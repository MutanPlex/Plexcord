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

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { User } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { copyWithToast, fetchUserProfile } from "@utils/discord";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { useAwaiter } from "@utils/react";
import definePlugin, { OptionType } from "@utils/types";
import { findComponentByCodeLazy } from "@webpack";
import { ColorPicker, React, UserProfileStore, UserStore, useState } from "@webpack/common";

interface CachedDecodedThemeColors {
    decodedBio: string;
    themeColors: number[] | null;
}

const decodedThemeColorsCache = new Map<string, CachedDecodedThemeColors>();

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

const DecodeRegex = /\[#([a-fA-F0-9]{1,6}),#([a-fA-F0-9]{1,6})\]/;
function decode(bio: string): Array<number> | null {
    if (bio == null) return null;

    let ascii = "";
    for (const ch of bio) {
        const cp = ch.codePointAt(0)!;
        if (cp >= 0xe0000 && cp <= 0xe007f) {
            ascii += String.fromCodePoint(cp - 0xe0000);
        }
    }

    const match = ascii.match(DecodeRegex);
    if (!match) return null;

    return [parseInt(match[1], 16), parseInt(match[2], 16)];
}

const settings = definePluginSettings({
    nitroFirst: {
        label: () => t(plugin.fakeProfileThemes.option.nitroFirst.label),
        description: () => t(plugin.fakeProfileThemes.option.nitroFirst.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.fakeProfileThemes.option.nitroFirst.nitro), value: true, default: true },
            { label: () => t(plugin.fakeProfileThemes.option.nitroFirst.fake), value: false },
        ],
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
    isTryItOut: boolean;
}

const ProfileModal = findComponentByCodeLazy<ProfileModalProps>("isTryItOut:", "pendingThemeColors:", "pendingAvatarDecoration:", "EDIT_PROFILE_BANNER");

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
            <Heading>{t(plugin.fakeProfileThemes.modal.usage)}</Heading>
            <Paragraph>
                {t(plugin.fakeProfileThemes.modal.intro)}
                <br />
                {t(plugin.fakeProfileThemes.modal.setColor)}
                <ul className={Margins.top8}>
                    <li>• {t(plugin.fakeProfileThemes.modal.step1)}</li>
                    <li>• {t(plugin.fakeProfileThemes.modal.step2, { copy: t(plugin.fakeProfileThemes.button.copy) })}</li>
                    <li>• {t(plugin.fakeProfileThemes.modal.step3)}</li>
                </ul><br />
                <Divider
                    className={classes(Margins.top8, Margins.bottom8)}
                />
                <Heading>{t(plugin.fakeProfileThemes.modal.pickers)}</Heading>
                <Flex gap="1em">
                    <ColorPicker
                        color={color1}
                        label={
                            <BaseText size="xs" style={{ marginTop: "4px" }}>
                                {t(plugin.fakeProfileThemes.modal.primary)}
                            </BaseText>
                        }
                        onChange={(color: number) => {
                            setColor1(color);
                        }}
                    />
                    <ColorPicker
                        color={color2}
                        label={
                            <BaseText size="xs" style={{ marginTop: "4px" }}>
                                {t(plugin.fakeProfileThemes.modal.accent)}
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
                        variant="secondary"
                        style={{ marginBottom: "auto" }}
                    >
                        {t(plugin.fakeProfileThemes.button.copy)}
                    </Button>
                </Flex>
                <Divider
                    className={classes(Margins.top8, Margins.bottom8)}
                />
                <Heading>{t(plugin.fakeProfileThemes.modal.preview)}</Heading>
                <div className="pc-fpt-preview">
                    <ProfileModal
                        user={UserStore.getCurrentUser()}
                        pendingThemeColors={[color1, color2]}
                        onAvatarChange={() => { }}
                        onBannerChange={() => { }}
                        canUsePremiumCustomization={true}
                        hideExampleButton={true}
                        hideFakeActivity={true}
                        isTryItOut={true}
                    />
                </div>
            </Paragraph>
        </section>);
}

export default definePlugin({
    name: "FakeProfileThemes",
    description: () => t(plugin.fakeProfileThemes.description),
    authors: [Devs.Alyxia, Devs.Remty],
    tags: ["appearance", "customisation"],
    settings,
    settingsAboutComponent: SettingsAboutComponentWrapper,

    patches: [
        {
            find: "}getPreviewThemeColors(",
            replacement: [
                {
                    match: /(}getPreviewThemeColors\(.+?)this\.themeColors/,
                    replace: "$1$self.colorDecodeHook(this)"
                },
                {
                    match: /canEditThemes\(\){/,
                    replace: "$&return true;"
                }
            ],
        }
    ],

    colorDecodeHook(profile: any) {
        if (settings.store.nitroFirst && profile?.themeColors != null) {
            return profile?.themeColors;
        }

        if (profile?.bio != null) {
            const cached = decodedThemeColorsCache.get(profile.userId);
            if (cached != null && cached.decodedBio === profile.bio) {
                return cached.themeColors ?? profile?.themeColors;
            }

            const decodedThemeColors = decode(profile.bio);
            decodedThemeColorsCache.set(profile.userId, { decodedBio: profile.bio, themeColors: decodedThemeColors });

            if (decodedThemeColors != null) {
                return decodedThemeColors;
            }
        }

        return profile?.themeColors;
    }
});
