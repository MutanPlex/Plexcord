import "./style.css";
import { StartAt } from "../../utils/types";
interface User {
    id: string;
    avatar: string;
    global_name: string;
    username: string;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
    RenderTip(isGuest: boolean, message: string, expires_at: string): import("react").JSX.Element;
    Header(currentUserId: string, inviter: User | undefined, defaultMessage: string): import("react").JSX.Element;
    Lurkable: (id: string, features: Iterable<string> | undefined) => (() => void) | null;
    startAt: StartAt.WebpackReady;
} & Record<string, any>;
export default _default;
