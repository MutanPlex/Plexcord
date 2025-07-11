import { SessionInfo } from "./types";
export declare const savedSessionsCache: Map<string, {
    name: string;
    isNew: boolean;
}>;
export declare function getDefaultName(clientInfo: SessionInfo["session"]["client_info"]): string;
export declare function saveSessionsToDataStore(): Promise<void>;
export declare function fetchNamesFromDataStore(): Promise<void>;
export declare function GetOsColor(os: string): "" | "#55a6ef" | "#cdcd31" | "#7bc958" | "#f3799a";
export declare function GetPlatformIcon(platform: string): import("../../utils").LazyComponentWrapper<import("react").ComponentType<any>> | ((props: React.PropsWithChildren<import("react").SVGProps<SVGSVGElement>>) => import("react").JSX.Element);
