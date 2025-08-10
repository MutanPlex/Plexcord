import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export interface folderIcon {
    url: string,
    size: number,
}
export type folderIconsData = Record<string, folderIcon | null>;

export const settings = definePluginSettings({
    solidIcon: {
        type: OptionType.BOOLEAN,
        default: false,
        description: "Use a solid background on the background of the image"
    },
    folderIcons: {
        type: OptionType.COMPONENT,
        hidden: true,
        description: "folder icon settings",
        component: () => <></>
    }
});
