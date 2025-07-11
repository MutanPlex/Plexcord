import { JSX } from "react";
declare const _default: {
    name: string;
    required: true;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    settings: import("../../utils/types").DefinedSettings<{}, import("../../utils/types").SettingsChecks<{}>, {
        dismissedDevBuildWarning?: boolean;
    }>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    commands: ({
        name: string;
        description: string;
        predicate: (ctx: import("../../api/Commands").CommandContext) => boolean;
        execute: () => Promise<{
            content: string;
        }>;
    } | {
        name: string;
        description: string;
        predicate: (ctx: import("../../api/Commands").CommandContext) => boolean;
        execute: () => {
            content: string;
        };
    })[];
    flux: {
        CHANNEL_SELECT({ channelId }: any): Promise<void>;
    };
    renderMessageAccessory(props: Record<string, any>): JSX.Element | null;
    renderContributorDmWarningCard: import("react").FunctionComponent<any>;
} & Record<string, any>;
export default _default;
