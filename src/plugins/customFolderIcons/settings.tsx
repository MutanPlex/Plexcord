import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export interface folderIcon {
    url: string,
    size: number,
}
export type folderIconsData = Record<string, folderIcon | null>;

export const settings = definePluginSettings({
    solidIcon: {
        label: () => t(plugin.customFolderIcons.option.solidIcon.label),
        description: () => t(plugin.customFolderIcons.option.solidIcon.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    folderIcons: {
        label: () => t(plugin.customFolderIcons.option.folderIcons.label),
        description: () => t(plugin.customFolderIcons.option.folderIcons.description),
        type: OptionType.COMPONENT,
        hidden: true,
        component: () => <></>
    }
});
