import { Activity, ActivityViewProps, Application, ApplicationIcon } from "./types";
export declare const ActivityView: import("../../utils").LazyComponentWrapper<import("react").ComponentType<ActivityViewProps>>;
export declare const cl: (...args: (string | false | 0 | string[] | Record<string, unknown> | null | undefined)[]) => string;
export declare function getActivityApplication(activity: Activity | null): Application | undefined;
export declare function getApplicationIcons(activities: Activity[], preferSmall?: boolean): ApplicationIcon[];
