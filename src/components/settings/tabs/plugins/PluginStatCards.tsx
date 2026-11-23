/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugins, t } from "@api/i18n";
import { Text } from "@components/Text";
import { Tooltip } from "@webpack/common";

export function StockPluginsCard({ totalStockPlugins, enabledStockPlugins, totalUserPlugins, enabledUserPlugins }) {
    return (
        <div className="pc-plugin-stats pc-stockplugins-stats-card">
            <div className="pc-plugin-stats-card-container">
                <div className="pc-plugin-stats-card-section">
                    <Text size="md" weight="bold">{t(plugins.pluginModal.enabledStock)}</Text>
                    <Text size="xl" weight="bold">{enabledStockPlugins}</Text>
                </div>
                <div className="pc-plugin-stats-card-divider"></div>
                <div className="pc-plugin-stats-card-section">
                    <Text size="md" weight="bold">{t(plugins.pluginModal.totalStock)}</Text>
                    <Text size="xl" weight="bold">{totalStockPlugins}</Text>
                </div>
                <div className="pc-plugin-stats-card-divider"></div>
                <div className="pc-plugin-stats-card-section">
                    <Text size="md" weight="bold">{t(plugins.pluginModal.enabledUser)}</Text>
                    <Text size="xl" weight="bold">{enabledUserPlugins}</Text>
                </div>
                <div className="pc-plugin-stats-card-divider"></div>
                <div className="pc-plugin-stats-card-section">
                    <Text size="md" weight="bold">{t(plugins.pluginModal.totalUser)}</Text>
                    {totalUserPlugins === 0 ? (
                        <Tooltip
                            text={
                                <img
                                    src="/assets/059679850d492e83.svg"
                                    style={{ width: "40px", height: "40px" }}
                                />
                            }
                        >
                            {tooltipProps => (
                                <span style={{ display: "inline", position: "relative" }}>
                                    <Text size="xl" weight="bold" {...tooltipProps}>
                                        {totalUserPlugins}
                                    </Text>
                                </span>
                            )}
                        </Tooltip>
                    ) : (
                        <Text size="xl" weight="bold">{totalUserPlugins}</Text>
                    )}
                </div>
            </div>
        </div >
    );
}
