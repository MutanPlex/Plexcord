import "./styles.css";

import { t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Tooltip } from "@webpack/common";

export function StockPluginsCard({ totalStockPlugins, enabledStockPlugins, totalUserPlugins, enabledUserPlugins }) {
    return (
        <div className="pc-plugin-stats pc-stockplugins-stats-card">
            <div className="pc-plugin-stats-card-container">
                <div className="pc-plugin-stats-card-section">
                    <BaseText size="md" weight="bold">{t("plugins.pluginModal.enabledStock")}</BaseText>
                    <BaseText size="xl" weight="bold">{enabledStockPlugins}</BaseText>
                </div>
                <div className="pc-plugin-stats-card-divider"></div>
                <div className="pc-plugin-stats-card-section">
                    <BaseText size="md" weight="bold">{t("plugins.pluginModal.totalStock")}</BaseText>
                    <BaseText size="xl" weight="bold">{totalStockPlugins}</BaseText>
                </div>
                <div className="pc-plugin-stats-card-divider"></div>
                <div className="pc-plugin-stats-card-section">
                    <BaseText size="md" weight="bold">{t("plugins.pluginModal.enabledUser")}</BaseText>
                    <BaseText size="xl" weight="bold">{enabledUserPlugins}</BaseText>
                </div>
                <div className="pc-plugin-stats-card-divider"></div>
                <div className="pc-plugin-stats-card-section">
                    <BaseText size="md" weight="bold">{t("plugins.pluginModal.totalUser")}</BaseText>
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
                                    <BaseText size="xl" weight="bold" {...tooltipProps}>
                                        {totalUserPlugins}
                                    </BaseText>
                                </span>
                            )}
                        </Tooltip>
                    ) : (
                        <BaseText size="xl" weight="bold">{totalUserPlugins}</BaseText>
                    )}
                </div>
            </div>
        </div >
    );
}
