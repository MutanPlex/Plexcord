import { ComponentType, HTMLProps } from "react";
export declare const enum BadgePosition {
    START = 0,
    END = 1
}
export interface ProfileBadge {
    /** The tooltip to show on hover. Required for image badges */
    description?: string;
    /** Custom component for the badge (tooltip not included) */
    component?: ComponentType<ProfileBadge & BadgeUserArgs>;
    /** The custom image to use */
    image?: string;
    link?: string;
    /** Action to perform when you click the badge */
    onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, props: BadgeUserArgs): void;
    /** Should the user display this badge? */
    shouldShow?(userInfo: BadgeUserArgs): boolean;
    /** Optional props (e.g. style) for the badge, ignored for component badges */
    props?: HTMLProps<HTMLImageElement>;
    /** Insert at start or end? */
    position?: BadgePosition;
    /** The badge name to display, Discord uses this. Required for component badges */
    key?: string;
    /**
     * Allows dynamically returning multiple badges
     */
    getBadges?(userInfo: BadgeUserArgs): ProfileBadge[];
}
/**
 * Register a new badge with the Badges API
 * @param badge The badge to register
 */
export declare function addProfileBadge(badge: ProfileBadge): void;
/**
 * Unregister a badge from the Badges API
 * @param badge The badge to remove
 */
export declare function removeProfileBadge(badge: ProfileBadge): boolean;
/**
 * Inject badges into the profile badges array.
 * You probably don't need to use this.
 */
export declare function _getBadges(args: BadgeUserArgs): ProfileBadge[];
export interface BadgeUserArgs {
    userId: string;
    guildId: string;
}
