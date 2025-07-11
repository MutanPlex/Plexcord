import { GitHubRepo } from "./types";
export interface GitHubUserInfo {
    username: string;
    totalRepos: number;
}
export declare function fetchUserInfo(username: string): Promise<GitHubUserInfo | null>;
export declare function fetchReposByUserId(githubId: string, perPage?: number): Promise<GitHubRepo[] | null>;
export declare function fetchReposByUsername(username: string, perPage?: number): Promise<GitHubRepo[]>;
