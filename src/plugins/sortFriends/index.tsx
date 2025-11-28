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

import "./styles.css";

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { BaseText } from "@components/BaseText";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { User } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { DateUtils, RelationshipStore, TooltipContainer } from "@webpack/common";
import { PropsWithChildren } from "react";

const formatter = new Intl.DateTimeFormat(undefined, {
    month: "numeric",
    day: "numeric",
    year: "numeric",
});

const cl = classNameFactory("pc-sortFriends-");

function getSince(user: User) {
    return new Date(RelationshipStore.getSince(user.id));
}

const settings = definePluginSettings({
    showDates: {
        get label() {
            return t("plugin.sortFriends.option.showDates.label");
        },
        get description() {
            return t("plugin.sortFriends.option.showDates.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "SortFriends",
    authors: [Devs.Megu, PcDevs.CallMeGii],
    description: "Sorts friend requests by date of receipt",
    settings,

    get displayDescription() {
        return t("plugin.sortFriends.description");
    },

    patches: [
        {
            find: "getRelationshipCounts(){",
            replacement: {
                match: /\}\)\.sortBy\((.+?)\)\.value\(\)/,
                replace: "}).sortBy(row => $self.wrapSort(($1), row)).value()"
            }
        }, {
            find: "#{intl::FRIEND_REQUEST_CANCEL}",
            replacement: {
                predicate: () => settings.store.showDates,
                match: /(?<=\.listItemContents,children:\[)\(0,.+?(?=,\(0)(?<=user:(\i).+?)/,
                replace: (children, user) => `$self.WrapperDateComponent({user:${user},children:${children}})`
            }
        },
        {
            find: "peopleListItemRef",
            replacement: {
                match: /(?<=children:.*user:(\i),.*subText:).+?(?=,hovered:\i,showAccountIdentifier)/,
                replace: "$self.makeSubtext($1, $&)"
            }
        }
    ],

    wrapSort(comparator: Function, row: any) {
        return row.type === 3 || row.type === 4
            ? -getSince(row.user)
            : comparator(row);
    },

    makeSubtext(user: User, origSubtext: any) {
        const since = getSince(user);
        if (isNaN(since.getTime())) {
            return null;
        }

        return (
            <Flex
                flexDirection="row"
                style={{ gap: "0px", flexWrap: "wrap", lineHeight: "0.9rem", flexFlow: "row wrap!important" }}
            >
                <span>{origSubtext}</span>
                <span style={{ display: "flex" }}>
                    <div className="" style={{ display: "flex", alignItems: "center" }}>
                        <svg
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            fill="none"
                            viewBox="0 0 24 24"
                            style={{ marginRight: "4px", display: "inline-block" }}
                        >
                            <path
                                fill="var(--input-placeholder-text)"
                                fillRule="evenodd"
                                d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm1-18a1 1 0 1 0-2 0v7c0 .27.1.52.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.58V5Z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span>{t("plugin.sortFriends.tooltip", { date: formatter.format(since) })}</span>
                    </div>
                </span>
            </Flex>
        );
    },

    WrapperDateComponent: ErrorBoundary.wrap(({ user, children }: PropsWithChildren<{ user: User; }>) => {
        const since = getSince(user);

        return <div className={cl("wrapper")}>
            {children}
            {!isNaN(since.getTime()) && (
                <TooltipContainer text={DateUtils.dateFormat(since, "LLLL")} tooltipClassName={cl("tooltip")}>
                    <BaseText size="xs" weight="normal" className={cl("date")}>{formatter.format(since)}</BaseText>
                </TooltipContainer>
            )}
        </div>;
    }, { noop: true })
});
