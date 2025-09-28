/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, tJsx } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { User } from "@plexcord/discord-types";
import { Decoration, getPresets, Preset } from "@plugins/decor/lib/api";
import { GUILD_ID, INVITE_KEY } from "@plugins/decor/lib/constants";
import { useAuthorizationStore } from "@plugins/decor/lib/stores/AuthorizationStore";
import { useCurrentUserDecorationsStore } from "@plugins/decor/lib/stores/CurrentUserDecorationsStore";
import { decorationToAvatarDecoration } from "@plugins/decor/lib/utils/decoration";
import { settings } from "@plugins/decor/settings";
import { cl, DecorationModalStyles, requireAvatarDecorationModal } from "@plugins/decor/ui";
import { AvatarDecorationModalPreview } from "@plugins/decor/ui/components";
import DecorationGridCreate from "@plugins/decor/ui/components/DecorationGridCreate";
import DecorationGridNone from "@plugins/decor/ui/components/DecorationGridNone";
import DecorDecorationGridDecoration from "@plugins/decor/ui/components/DecorDecorationGridDecoration";
import SectionedGridList from "@plugins/decor/ui/components/SectionedGridList";
import { openInviteModal } from "@utils/discord";
import { Margins } from "@utils/margins";
import { classes, copyWithToast } from "@utils/misc";
import { closeAllModals, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { Queue } from "@utils/Queue";
import { Alerts, Button, FluxDispatcher, Forms, GuildStore, NavigationRouter, Parser, Text, Tooltip, useEffect, UserStore, UserSummaryItem, UserUtils, useState } from "@webpack/common";

import { openCreateDecorationModal } from "./CreateDecorationModal";
import { openGuidelinesModal } from "./GuidelinesModal";

function usePresets() {
    const [presets, setPresets] = useState<Preset[]>([]);
    useEffect(() => { getPresets().then(setPresets); }, []);
    return presets;
}

interface Section {
    title: string;
    subtitle?: string;
    sectionKey: string;
    items: ("none" | "create" | Decoration)[];
    authorIds?: string[];
}

interface SectionHeaderProps {
    section: Section;
}

const fetchAuthorsQueue = new Queue();

function SectionHeader({ section }: SectionHeaderProps) {
    const hasSubtitle = typeof section.subtitle !== "undefined";
    const hasAuthorIds = typeof section.authorIds !== "undefined";

    const [authors, setAuthors] = useState<User[]>([]);

    useEffect(() => {
        fetchAuthorsQueue.push(async () => {
            if (!section.authorIds) return;

            for (const authorId of section.authorIds) {
                const author = UserStore.getUser(authorId) ?? await UserUtils.getUser(authorId).catch(() => null);
                if (author == null) continue;

                setAuthors(authors => [...authors, author]);
            }
        });
    }, [section.authorIds]);

    return <div>
        <Flex>
            <Forms.FormTitle style={{ flexGrow: 1 }}>{section.title}</Forms.FormTitle>
            {hasAuthorIds && <UserSummaryItem
                users={authors}
                guildId={undefined}
                renderIcon={false}
                max={5}
                showDefaultAvatarsForNullUsers
                size={16}
                showUserPopout
                className={Margins.bottom8}
            />}
        </Flex>
        {hasSubtitle &&
            <Forms.FormText className={Margins.bottom8}>
                {section.subtitle}
            </Forms.FormText>
        }
    </div>;
}

function ChangeDecorationModal(props: ModalProps) {
    // undefined = not trying, null = none, Decoration = selected
    const [tryingDecoration, setTryingDecoration] = useState<Decoration | null | undefined>(undefined);
    const isTryingDecoration = typeof tryingDecoration !== "undefined";

    const avatarDecorationOverride = tryingDecoration != null ? decorationToAvatarDecoration(tryingDecoration) : tryingDecoration;

    const {
        decorations,
        selectedDecoration,
        fetch: fetchUserDecorations,
        select: selectDecoration
    } = useCurrentUserDecorationsStore();

    useEffect(() => {
        fetchUserDecorations();
    }, []);

    const activeSelectedDecoration = isTryingDecoration ? tryingDecoration : selectedDecoration;
    const activeDecorationHasAuthor = typeof activeSelectedDecoration?.authorId !== "undefined";
    const hasDecorationPendingReview = decorations.some(d => d.reviewed === false);

    const presets = usePresets();
    const presetDecorations = presets.flatMap(preset => preset.decorations);

    const activeDecorationPreset = presets.find(preset => preset.id === activeSelectedDecoration?.presetId);
    const isActiveDecorationPreset = typeof activeDecorationPreset !== "undefined";

    const ownDecorations = decorations.filter(d => !presetDecorations.some(p => p.hash === d.hash));

    const data = [
        {
            title: t("plugin.decor.your.title"),
            subtitle: t("plugin.decor.your.subtitle"),
            sectionKey: "ownDecorations",
            items: ["none", ...ownDecorations, "create"]
        },
        ...presets.map(preset => ({
            title: preset.name,
            subtitle: preset.description || undefined,
            sectionKey: `preset-${preset.id}`,
            items: preset.decorations,
            authorIds: preset.authorIds
        }))
    ] as Section[];

    return <ModalRoot
        {...props}
        size={ModalSize.DYNAMIC}
        className={DecorationModalStyles.modal}
    >
        <ModalHeader separator={false} className={cl("modal-header")}>
            <Text
                color="header-primary"
                variant="heading-lg/semibold"
                tag="h1"
                style={{ flexGrow: 1 }}
            >
                {t("plugin.decor.button.change")}
            </Text>
            <ModalCloseButton onClick={props.onClose} />
        </ModalHeader>
        <ModalContent
            className={cl("change-decoration-modal-content")}
            scrollbarType="none"
        >
            <ErrorBoundary>
                <SectionedGridList
                    renderItem={item => {
                        if (typeof item === "string") {
                            switch (item) {
                                case "none":
                                    return <DecorationGridNone
                                        className={cl("change-decoration-modal-decoration")}
                                        isSelected={activeSelectedDecoration === null}
                                        onSelect={() => setTryingDecoration(null)}
                                    />;
                                case "create":
                                    return <Tooltip text={t("plugin.decor.tooltip.pendingReview")} shouldShow={hasDecorationPendingReview}>
                                        {tooltipProps => <DecorationGridCreate
                                            className={cl("change-decoration-modal-decoration")}
                                            {...tooltipProps}
                                            onSelect={!hasDecorationPendingReview ? (settings.store.agreedToGuidelines ? openCreateDecorationModal : openGuidelinesModal) : () => { }}
                                        />}
                                    </Tooltip>;
                            }
                        } else {
                            return <Tooltip text={t("plugin.decor.tooltip.pending")} shouldShow={item.reviewed === false}>
                                {tooltipProps => (
                                    <DecorDecorationGridDecoration
                                        {...tooltipProps}
                                        className={cl("change-decoration-modal-decoration")}
                                        onSelect={item.reviewed !== false ? () => setTryingDecoration(item) : () => { }}
                                        isSelected={activeSelectedDecoration?.hash === item.hash}
                                        decoration={item}
                                    />
                                )}
                            </Tooltip>;
                        }
                    }}
                    getItemKey={item => typeof item === "string" ? item : item.hash}
                    getSectionKey={section => section.sectionKey}
                    renderSectionHeader={section => <SectionHeader section={section} />}
                    sections={data}
                />
                <div className={cl("change-decoration-modal-preview")}>
                    <AvatarDecorationModalPreview
                        avatarDecorationOverride={avatarDecorationOverride}
                        user={UserStore.getCurrentUser()}
                    />
                    {isActiveDecorationPreset && <Forms.FormTitle className="">{tJsx("plugin.decor.title.presetPart", { name: activeDecorationPreset.name })}</Forms.FormTitle>}
                    {typeof activeSelectedDecoration === "object" &&
                        <Text
                            variant="text-sm/semibold"
                            color="header-primary"
                        >
                            {activeSelectedDecoration?.alt}
                        </Text>
                    }
                    {activeDecorationHasAuthor && (
                        <Text key={`createdBy-${activeSelectedDecoration.authorId}`}>
                            {tJsx("plugin.decor.createdBy", { author: Parser.parse(`<@${activeSelectedDecoration.authorId}>`) })}
                        </Text>
                    )}
                    {isActiveDecorationPreset && (
                        <Button onClick={() => copyWithToast(activeDecorationPreset.id)}>
                            {t("plugin.decor.copy")}
                        </Button>
                    )}
                </div>
            </ErrorBoundary>
        </ModalContent>
        <ModalFooter className={classes(cl("change-decoration-modal-footer", cl("modal-footer")))}>
            <div className={cl("change-decoration-modal-footer-btn-container")}>
                <Button
                    onClick={() => {
                        selectDecoration(tryingDecoration!).then(props.onClose);
                    }}
                    disabled={!isTryingDecoration}
                >
                    {t("plugin.decor.button.apply")}
                </Button>
                <Button
                    onClick={props.onClose}
                    color={Button.Colors.PRIMARY}
                    look={Button.Looks.LINK}
                >
                    {t("plugin.decor.button.cancel")}
                </Button>
            </div>
            <div className={cl("change-decoration-modal-footer-btn-container")}>
                <Button
                    onClick={() => Alerts.show({
                        title: t("plugin.decor.alert.logout.title"),
                        body: t("plugin.decor.alert.logout.body"),
                        confirmText: t("plugin.decor.alert.logout.confirm"),
                        confirmColor: cl("danger-btn"),
                        cancelText: t("plugin.decor.alert.logout.cancel"),
                        onConfirm() {
                            useAuthorizationStore.getState().remove(UserStore.getCurrentUser().id);
                            props.onClose();
                        }
                    })}
                    color={Button.Colors.PRIMARY}
                    look={Button.Looks.LINK}
                >
                    {t("plugin.decor.alert.logout.title")}
                </Button>
                <Tooltip text={t("plugin.decor.join.tooltip")}>
                    {tooltipProps => <Button
                        {...tooltipProps}
                        onClick={async () => {
                            if (!GuildStore.getGuild(GUILD_ID)) {
                                const inviteAccepted = await openInviteModal(INVITE_KEY);
                                if (inviteAccepted) {
                                    closeAllModals();
                                    FluxDispatcher.dispatch({ type: "LAYER_POP_ALL" });
                                }
                            } else {
                                props.onClose();
                                FluxDispatcher.dispatch({ type: "LAYER_POP_ALL" });
                                NavigationRouter.transitionToGuild(GUILD_ID);
                            }
                        }}
                        color={Button.Colors.PRIMARY}
                        look={Button.Looks.LINK}
                    >
                        {t("plugin.decor.join.button")}
                    </Button>}
                </Tooltip>
            </div>
        </ModalFooter>
    </ModalRoot>;
}

export const openChangeDecorationModal = () =>
    requireAvatarDecorationModal().then(() => openModal(props => <ChangeDecorationModal {...props} />));
