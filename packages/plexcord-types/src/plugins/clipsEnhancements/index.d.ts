import { OptionType } from "../../utils/types";
import { SelectOption } from "../../webpack/common/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        richPresenceTagging: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default?: undefined;
            } | {
                label: string;
                value: string;
                default: true;
            })[];
        };
        clipsLink: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
    }, import("../../utils/types").SettingsChecks<{
        richPresenceTagging: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default?: undefined;
            } | {
                label: string;
                value: string;
                default: true;
            })[];
        };
        clipsLink: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    patchTimeslots(timeslots: SelectOption[]): SelectOption[];
    patchFramerates(framerates: SelectOption[]): SelectOption[];
    getApplicationId(activityName: string): string | null | undefined;
} & Record<string, any>;
export default _default;
