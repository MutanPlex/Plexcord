import { GitHubRepo } from "../types";
interface ReposModalProps {
    repos: GitHubRepo[];
    username: string;
    rootProps: any;
}
export declare function ReposModal({ repos, username, rootProps }: ReposModalProps): import("react").JSX.Element;
export {};
