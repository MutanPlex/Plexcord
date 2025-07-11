import "./fixDiscordBadgePadding.css";
import { BadgePosition, BadgeUserArgs, ProfileBadge } from "../../../api/Badges";
import { User } from "discord-types/general";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    required: true;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    } | {
        find: string;
        replacement: ({
            match: RegExp;
            replace: (_: string, rest: string, originalSrc: string, badge: string) => string;
        } | {
            match: RegExp;
            replace: string;
        })[];
    })[];
    readonly DonorBadges: Record<string, Record<"tooltip" | "badge", string>[]>;
    toolboxActions: {
        "Refetch Badges"(): Promise<void>;
    };
    userProfileBadge: ProfileBadge;
    userProfileContributorBadge: ProfileBadge;
    start(): Promise<void>;
    stop(): Promise<void>;
    getBadges(props: {
        userId: string;
        user?: User;
        guildId: string;
    }): ProfileBadge[];
    renderBadgeComponent: import("react").FunctionComponent<ProfileBadge & BadgeUserArgs>;
    getDonorBadges(userId: string): {
        image: string;
        description: string;
        position: BadgePosition;
        props: {
            style: {
                borderRadius: string;
                transform: string;
            };
        };
        onClick(): void;
    }[];
} & Record<string, any>;
export default _default;
