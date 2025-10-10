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

import { t, tJsx } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { disableStyle, enableStyle } from "@api/Styles";
import ErrorBoundary from "@components/ErrorBoundary";
import { ErrorCard } from "@components/ErrorCard";
import { Devs, IS_MAC, PcDevs } from "@utils/constants";
import { Margins } from "@utils/margins";
import definePlugin, { OptionType } from "@utils/types";
import { findByPropsLazy, findLazy } from "@webpack";
import { Forms, React } from "@webpack/common";

import hideBugReport from "./hideBugReport.css?managed";

const KbdStyles = findByPropsLazy("key", "combo");
const BugReporterExperiment = findLazy(m => m?.definition?.id === "2024-09_bug_reporter");

const modKey = IS_MAC ? "cmd" : "ctrl";
const altKey = IS_MAC ? "opt" : "alt";

const settings = definePluginSettings({
    toolbarDevMenu: {
        get label() {
            return t("plugin.experiments.option.toolbarDevMenu.label");
        },
        get description() {
            return t("plugin.experiments.option.toolbarDevMenu.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "Experiments",
    description: "Enable Access to Experiments & other dev-only features in Discord!",
    authors: [
        Devs.Megu,
        Devs.Ven,
        Devs.Nickyux,
        Devs.BanTheNons,
        Devs.Nuckyz,
        PcDevs.MutanPlex
    ],

    get displayDescription() {
        return t("plugin.experiments.description");
    },

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
            find: 'Search experiments"',
            replacement: {
                match: '"div",{children:[',
                replace: "$&$self.WarningCard(),"
            }
        },
        // Change top right chat toolbar button from the help one to the dev one
        {
            find: '?"BACK_FORWARD_NAVIGATION":',
            replacement: {
                match: /hasBugReporterAccess:(\i)/,
                replace: "_hasBugReporterAccess:$1=true"
            },
            predicate: () => settings.store.toolbarDevMenu
        },

        // Make the Favourites Server experiment allow favouriting DMs and threads
        {
            find: "useCanFavoriteChannel",
            replacement: {
                match: /\i\.isDM\(\)\|\|\i\.isThread\(\)/,
                replace: "false",
            }
        },
        // Enable option to always record clips even if you are not streaming
        {
            find: "isDecoupledGameClippingEnabled(){",
            replacement: {
                match: /\i\.isStaff\(\)/,
                replace: "true"
            }
        },
        // Enable experiment embed on sent experiment links
        {
            find: "dev://experiment/",
            replacement: [
                {
                    match: /\i\.isStaff\(\)/,
                    replace: "true"
                },
                // Fix some tricky experiments name causing a client crash
                {
                    match: /.getExperimentBucketName.+?if\(null==(\i)\|\|null==\i(?=\)return null;)/,
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
        }
    ],

    start: () => !BugReporterExperiment.getCurrentConfig().hasBugReporterAccess && enableStyle(hideBugReport),
    stop: () => disableStyle(hideBugReport),

    settingsAboutComponent: () => {
        return (
            <React.Fragment>
                <Forms.FormTitle tag="h3">{t("plugin.experiments.modal.about.title")}</Forms.FormTitle>
                <Forms.FormText variant="text-md/normal">
                    {tJsx("plugin.experiments.modal.about.body", {
                        key: <div className={KbdStyles.combo} style={{ display: "inline-flex" }}>
                            <kbd className={KbdStyles.key}>{modKey}</kbd> +{" "}
                            <kbd className={KbdStyles.key}>{altKey}</kbd> +{" "}
                            <kbd className={KbdStyles.key}>O</kbd>{" "}
                        </div>
                    })}
                </Forms.FormText>
            </React.Fragment>
        );
    },

    WarningCard: ErrorBoundary.wrap(() => (
        <ErrorCard id="pc-experiments-warning-card" className={Margins.bottom16}>
            <Forms.FormTitle tag="h2">{t("plugin.experiments.modal.warning.title")}</Forms.FormTitle>

            <Forms.FormText>
                {t("plugin.experiments.modal.warning.body")}
            </Forms.FormText>

            <Forms.FormText className={Margins.top8}>
                {t("plugin.experiments.modal.warning.notReponsible")}

                {t("plugin.experiments.modal.warning.useAtOwnRisk")}
            </Forms.FormText>

            <Forms.FormText className={Margins.top8}>
                {t("plugin.experiments.modal.warning.serverSideFeatures")}
            </Forms.FormText>
        </ErrorCard>
    ), { noop: true })
});
