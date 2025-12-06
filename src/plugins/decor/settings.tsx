/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { closeAllModals } from "@utils/modal";
import { OptionType } from "@utils/types";
import { FluxDispatcher } from "@webpack/common";

import DecorPlugin from ".";
import DecorSection from "./ui/components/DecorSection";

export const settings = definePluginSettings({
    changeDecoration: {
        label: () => t(plugin.decor.option.changeDecoration.label),
        type: OptionType.COMPONENT,
        component() {
            if (!DecorPlugin.started) return <Paragraph>
                {t(plugin.decor.option.changeDecoration.description)}
            </Paragraph>;

            return <div>
                <DecorSection hideTitle hideDivider noMargin />
                <Paragraph className={classes(Margins.top8, Margins.bottom8)}>
                    {t(plugin.decor.option.changeDecoration.also, {
                        profiles: <Link
                            href="/settings/profile-customization"
                            onClick={e => {
                                e.preventDefault();
                                closeAllModals();
                                FluxDispatcher.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section: "Profile Customization" });
                            }}
                        >{t(plugin.decor.option.changeDecoration.profiles)}</Link>
                    })}
                </Paragraph>
            </div>;
        }
    },
    baseUrl: {
        label: () => t(plugin.decor.option.baseUrl.label),
        description: () => t(plugin.decor.option.baseUrl.description),
        type: OptionType.STRING,
        hidden: true,
        default: "https://decor.fieryflames.dev"
    },
    agreedToGuidelines: {
        label: () => t(plugin.decor.option.agreedToGuidelines.label),
        description: () => t(plugin.decor.option.agreedToGuidelines.description),
        type: OptionType.BOOLEAN,
        hidden: true,
        default: false
    }
});
