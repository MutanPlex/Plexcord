import "./styles.css";

import { t } from "@api/i18n";
import { Text, Tooltip } from "@webpack/common";

export function StockPluginsCard({ totalStockPlugins, enabledStockPlugins, totalUserPlugins, enabledUserPlugins }) {
    return (
        <div className="pc-plugin-stats pc-stockplugins-stats-card">
            <div className="pc-plugin-stats-card-container">
                <div className="pc-plugin-stats-card-section">
                    <Text variant="text-md/bold">{t("plugins.pluginModal.enabledStock")}</Text>
                    <Text variant="heading-xl/bold">{enabledStockPlugins}</Text>
                </div>
                <div className="pc-plugin-stats-card-divider"></div>
                <div className="pc-plugin-stats-card-section">
                    <Text variant="text-md/bold">{t("plugins.pluginModal.totalStock")}</Text>
                    <Text variant="heading-xl/bold">{totalStockPlugins}</Text>
                </div>
                <div className="pc-plugin-stats-card-divider"></div>
                <div className="pc-plugin-stats-card-section">
                    <Text variant="text-md/bold">{t("plugins.pluginModal.enabledUser")}</Text>
                    <Text variant="heading-xl/bold">{enabledUserPlugins}</Text>
                </div>
                <div className="pc-plugin-stats-card-divider"></div>
                <div className="pc-plugin-stats-card-section">
                    <Text variant="text-md/bold">{t("plugins.pluginModal.totalUser")}</Text>
                    {totalUserPlugins === 0 ? (
                        <Tooltip
                            text={
                                <img
                                    src="https://discord.com/assets/ab6835d2922224154ddf.svg"
                                    style={{ width: "40px", height: "40px" }}
                                />
                            }
                        >
                            {tooltipProps => (
                                <span style={{ display: "inline", position: "relative" }}>
                                    <Text variant="heading-xl/bold" {...tooltipProps}>
                                        {totalUserPlugins}
                                    </Text>
                                </span>
                            )}
                        </Tooltip>
                    ) : (
                        <Text variant="heading-xl/bold">{totalUserPlugins}</Text>
                    )}
                </div>
            </div>
        </div >
    );
}
