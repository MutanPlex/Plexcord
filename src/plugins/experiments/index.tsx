/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
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

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { disableStyle, enableStyle } from "@api/Styles";
import ErrorBoundary from "@components/ErrorBoundary";
import { ErrorCard } from "@components/ErrorCard";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Devs, IS_MAC, PcDevs } from "@utils/constants";
import { Margins } from "@utils/margins";
import definePlugin, { OptionType } from "@utils/types";
import { findByPropsLazy, findLazy } from "@webpack";
import { React } from "@webpack/common";

import hideBugReport from "./hideBugReport.css?managed";

const KbdStyles = findByPropsLazy("key", "combo");
const BugReporterExperiment = findLazy(m => m?.definition?.id === "2024-09_bug_reporter");

const modKey = IS_MAC ? "cmd" : "ctrl";
const altKey = IS_MAC ? "opt" : "alt";

const settings = definePluginSettings({
    toolbarDevMenu: {
        label: () => t(plugin.experiments.option.toolbarDevMenu.label),
        description: () => t(plugin.experiments.option.toolbarDevMenu.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "Experiments",
    description: () => t(plugin.experiments.description),
    authors: [
        Devs.Megu,
        Devs.Ven,
        Devs.Nickyux,
        Devs.BanTheNons,
        Devs.Nuckyz,
        PcDevs.MutanPlex
    ],
    settings,

    patches: [
        {
            find: "Object.defineProperties(this,{isDeveloper",
            replacement: {
                match: /(?<={isDeveloper:\{[^}]+?,get:\(\)=>)\i/,
                replace: "true"
            }
        },
        {
            find: 'type:"user",revision',
            replacement: {
                match: /!(\i)(?=&&"CONNECTION_OPEN")/,
                replace: "!($1=true)"
            }
        },
        {
            find: 'placeholder:"Search experiments"',
            replacement: {
                match: /(?<=children:\[)(?=\(0,\i\.jsx?\)\(\i\.\i,{placeholder:"Search experiments")/,
                replace: "$self.WarningCard(),"
            }
        },
        // Change top right toolbar button from the help one to the dev one
        {
            find: '?"BACK_FORWARD_NAVIGATION":',
            replacement: {
                match: /hasBugReporterAccess:(\i)/,
                replace: "_hasBugReporterAccess:$1=true"
            },
            predicate: () => settings.store.toolbarDevMenu
        },

        // Disable opening the bug report menu when clicking the top right toolbar dev button
        {
            find: 'navId:"staff-help-popout"',
            replacement: {
                match: /(isShown.+?)onClick:\i/,
                replace: (_, rest) => `${rest}onClick:()=>{}`
            }
        },

        // Make the Favourites Server experiment allow favouriting DMs and threads
        {
            find: "useCanFavoriteChannel",
            replacement: {
                match: /\i\.isDM\(\)\|\|\i\.isThread\(\)/,
                replace: "false",
            }
        },
        // Enable experiment embed on sent experiment links
        {
            find: "Clear Treatment ",
            replacement: [
                {
                    match: /\i\??\.isStaff\(\)/,
                    replace: "true"
                },
                // Fix some tricky experiments name causing a client crash
                {
                    match: /\.isStaffPersonal\(\).+?if\(null==(\i)\|\|null==\i(?=\)return null;)/,
                    replace: "$&||({})[$1]!=null"
                }
            ]
        },
        // Fix another function which cases crashes with tricky experiment names and the experiment embed
        {
            find: "}getServerAssignment(",
            replacement: {
                match: /}getServerAssignment\((\i),\i,\i\){/,
                replace: "$&if($1==null)return;"
            }
        },
        // Enable playground embed on sent playground links
        // dev://playground/mana, dev://playground/payments, dev://playground/virtual-currency,
        // dev://playground/nitro, dev://playground/mfa, dev://playground/cms, dev://playground/void
        {
            find: "{PlaygroundEmbed:()=>",
            replacement: {
                match: /PotionIcon.{0,250}getCurrentUser\(\);return/,
                replace: "$& true||"
            }
        },
        {
            // Expands the experiment regex to allow negative numbers as well as text in the last segment of the URL.
            find: "?\"dev://experiment/\".concat",
            replacement: {
                match: /(\[0-9\]\+)/,
                replace: "[a-zA-Z0-9-]+"
            }
        },
        {
            find: ".EXPERIMENT_TREATMENT&&null",
            replacement: [
                {
                    // Uses the label instead of the value for the button text in the experiment embed.
                    match: /"Clear Treatment ".concat\((\i).value\):"Apply Treatment ".concat\(\i.value\)/,
                    replace: '"Clear Treatment: ".concat($1.label):"Apply Treatment: ".concat($1.label)'
                },
                {
                    // Allow linking experiments by their label instead of their value.
                    match: /(?<=find\(\i=>)((\i).value===\i)/,
                    replace: "{return($1)||($self.matchExperiment(arguments[0].url,$2.label))}"
                }
            ]
        }
    ],

    matchExperiment(url: string, label: string): boolean {
        const items = url.split("/");
        const labelCleaned = label.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
        const urlEndCleaned = items[items.length - 1]?.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
        return !!labelCleaned && urlEndCleaned !== undefined && labelCleaned === urlEndCleaned;
    },

    start: () => !BugReporterExperiment.getCurrentConfig().hasBugReporterAccess && enableStyle(hideBugReport),
    stop: () => disableStyle(hideBugReport),

    settingsAboutComponent: () => {
        return (
            <React.Fragment>
                <Heading>{t(plugin.experiments.modal.about.title)}</Heading>
                <Paragraph size="md">
                    {t(plugin.experiments.modal.about.body, {
                        key: <div className={KbdStyles.combo} style={{ display: "inline-flex" }}>
                            <kbd className={KbdStyles.key}>{modKey}</kbd> +{" "}
                            <kbd className={KbdStyles.key}>{altKey}</kbd> +{" "}
                            <kbd className={KbdStyles.key}>O</kbd>{" "}
                        </div>
                    })}
                </Paragraph>
            </React.Fragment>
        );
    },

    WarningCard: ErrorBoundary.wrap(() => (
        <ErrorCard id="pc-experiments-warning-card" className={Margins.bottom16}>
            <Heading>{t(plugin.experiments.modal.warning.title)}</Heading>

            <Paragraph>
                {t(plugin.experiments.modal.warning.body)}
            </Paragraph>

            <Paragraph className={Margins.top8}>
                {t(plugin.experiments.modal.warning.notReponsible)}
                {t(plugin.experiments.modal.warning.useAtOwnRisk)}
            </Paragraph>

            <Paragraph className={Margins.top8}>
                {t(plugin.experiments.modal.warning.serverSideFeatures)}
            </Paragraph>
        </ErrorCard>
    ), { noop: true })
});
