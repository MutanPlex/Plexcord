/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// This plugin is a port from Alyxia's Vendetta plugin
import "./style.css";

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { Divider } from "@components/Divider";
import ErrorBoundary from "@components/ErrorBoundary";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { User, UserProfile } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { fetchUserProfile } from "@utils/discord";
import { Margins } from "@utils/margins";
import { classes, copyWithToast } from "@utils/misc";
import { useAwaiter } from "@utils/react";
import definePlugin, { OptionType } from "@utils/types";
import { findComponentByCodeLazy } from "@webpack";
import { Button, ColorPicker, Flex, React, UserProfileStore, UserStore, useState } from "@webpack/common";
import virtualMerge from "virtual-merge";

interface Colors {
    primary: number;
    accent: number;
}

function encode(primary: number, accent: number): string {
    const message = `[#${primary.toString(16).padStart(6, "0")},#${accent.toString(16).padStart(6, "0")}]`;
    const padding = "";
    const encoded = Array.from(message)
        .map(x => x.codePointAt(0))
        .filter(x => x! >= 0x20 && x! <= 0x7f)
        .map(x => String.fromCodePoint(x! + 0xe0000))
        .join("");

    return (padding || "") + " " + encoded;
}

// Courtesy of Cynthia.
function decode(bio: string): Array<number> | null {
    if (bio == null) return null;

    const colorString = bio.match(
        /\u{e005b}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]{1,6})\u{e002c}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]{1,6})\u{e005d}/u,
    );
    if (colorString != null) {
        const parsed = [...colorString[0]]
            .map(x => String.fromCodePoint(x.codePointAt(0)! - 0xe0000))
            .join("");
        const colors = parsed
            .substring(1, parsed.length - 1)
            .split(",")
            .map(x => parseInt(x.replace("#", "0x"), 16));

        return colors;
    } else {
        return null;
    }
}

const settings = definePluginSettings({
    nitroFirst: {
        get label() {
            return t("plugin.fakeProfileThemes.option.nitroFirst.label");
        },
        get description() {
            return t("plugin.fakeProfileThemes.option.nitroFirst.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t("plugin.fakeProfileThemes.option.nitroFirst.nitro"), value: true, default: true },
                { label: t("plugin.fakeProfileThemes.option.nitroFirst.fake"), value: false },
            ];
        }
    }
});

// I can't be bothered to figure out the semantics of this component. The
// functions surely get some event argument sent to them and they likely aren't
// all required. If anyone who wants to use this component stumbles across this
// code, you'll have to do the research yourself.
interface ProfileModalProps {
    user: User;
    pendingThemeColors: [number, number];
    onAvatarChange: () => void;
    onBannerChange: () => void;
    canUsePremiumCustomization: boolean;
    hideExampleButton: boolean;
    hideFakeActivity: boolean;
    isTryItOutFlow: boolean;
}

const ProfileModal = findComponentByCodeLazy<ProfileModalProps>("isTryItOutFlow:", "pendingThemeColors:", "pendingAvatarDecoration:", "EDIT_PROFILE_BANNER");

function SettingsAboutComponentWrapper() {
    const [, , userProfileLoading] = useAwaiter(() => fetchUserProfile(UserStore.getCurrentUser().id));

    return !userProfileLoading && <SettingsAboutComponent />;
}

function SettingsAboutComponent() {
    const existingColors = decode(
        UserProfileStore.getUserProfile(UserStore.getCurrentUser().id)?.bio ?? ""
    ) ?? [0, 0];
    const [color1, setColor1] = useState(existingColors[0]);
    const [color2, setColor2] = useState(existingColors[1]);

    return (
        <section>
            <Heading>{t("plugin.fakeProfileThemes.modal.usage")}</Heading>
            <Paragraph>
                {t("plugin.fakeProfileThemes.modal.intro")}
                <br />
                {t("plugin.fakeProfileThemes.modal.setColor")}
                <ul>
                    <li>
                        • {t("plugin.fakeProfileThemes.modal.step1")}
                    </li>
                    <li>• {t("plugin.fakeProfileThemes.modal.step2", { copy: t("plugin.fakeProfileThemes.button.copy") })}</li>
                    <li>• {t("plugin.fakeProfileThemes.modal.step3")}</li>
                </ul><br />
                <Divider
                    className={classes(Margins.top8, Margins.bottom8)}
                />
                <Heading>{t("plugin.fakeProfileThemes.modal.pickers")}</Heading>
                <Flex
                    direction={Flex.Direction.HORIZONTAL}
                    style={{ gap: "1rem" }}
                >
                    <ColorPicker
                        color={color1}
                        label={
                            <BaseText size="xs" weight="normal" style={{ marginTop: "4px" }}>
                                {t("plugin.fakeProfileThemes.modal.primary")}
                            </BaseText>
                        }
                        onChange={(color: number) => {
                            setColor1(color);
                        }}
                    />
                    <ColorPicker
                        color={color2}
                        label={
                            <BaseText size="xs" weight="normal" style={{ marginTop: "4px" }}>
                                {t("plugin.fakeProfileThemes.modal.accent")}
                            </BaseText>
                        }
                        onChange={(color: number) => {
                            setColor2(color);
                        }}
                    />
                    <Button
                        onClick={() => {
                            const colorString = encode(color1, color2);
                            copyWithToast(colorString);
                        }}
                        color={Button.Colors.PRIMARY}
                        size={Button.Sizes.XLARGE}
                    >
                        {t("plugin.fakeProfileThemes.button.copy")}
                    </Button>
                </Flex>
                <Divider
                    className={classes(Margins.top8, Margins.bottom8)}
                />
                <Heading>{t("plugin.fakeProfileThemes.modal.preview")}</Heading>
                <div className="pc-fpt-preview">
                    <ProfileModal
                        user={UserStore.getCurrentUser()}
                        pendingThemeColors={[color1, color2]}
                        onAvatarChange={() => { }}
                        onBannerChange={() => { }}
                        canUsePremiumCustomization={true}
                        hideExampleButton={true}
                        hideFakeActivity={true}
                        isTryItOutFlow={true}
                    />
                </div>
            </Paragraph>
        </section>);
}

export default definePlugin({
    name: "FakeProfileThemes",
    description: "Allows profile theming by hiding the colors in your bio thanks to invisible 3y3 encoding",
    authors: [Devs.Alyxia, Devs.Remty],

    get displayDescription() {
        return t("plugin.fakeProfileThemes.description");
    },

    patches: [
        {
            find: "UserProfileStore",
            replacement: {
                match: /(?<=getUserProfile\(\i\){return )(.+?)(?=})/,
                replace: "$self.colorDecodeHook($1)"
            },
        },
        {
            find: "#{intl::USER_SETTINGS_RESET_PROFILE_THEME}",
            replacement: {
                match: /#{intl::USER_SETTINGS_RESET_PROFILE_THEME}\).+?}\)(?=\])(?<=color:(\i),.{0,500}?color:(\i),.{0,500}?)/,
                replace: "$&,$self.addCopy3y3Button({primary:$1,accent:$2})"
            }
        }
    ],

    settingsAboutComponent: SettingsAboutComponentWrapper,

    settings,
    colorDecodeHook(user: UserProfile) {
        if (user?.bio) {
            // don't replace colors if already set with nitro
            if (settings.store.nitroFirst && user.themeColors) return user;
            const colors = decode(user.bio);
            if (colors) {
                return virtualMerge(user, {
                    premiumType: 2,
                    themeColors: colors
                });
            }
        }
        return user;
    },
    addCopy3y3Button: ErrorBoundary.wrap(function ({ primary, accent }: Colors) {
        return <Button
            onClick={() => {
                const colorString = encode(primary, accent);
                copyWithToast(colorString);
            }}
            color={Button.Colors.PRIMARY}
            size={Button.Sizes.XLARGE}
            className={Margins.left16}
        >{t("plugin.fakeProfileThemes.button.copy")}
        </Button >;
    }, { noop: true }),
});
