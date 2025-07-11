import type { GitResult } from "../types";
export declare function update(): Promise<GitResult>;
export declare function getCommitHash(): Promise<GitResult>;
export interface GitInfo {
    repo: string;
    gitHash: string;
}
export declare function getRepoInfo(): Promise<GitResult>;
export interface Commit {
    hash: string;
    longHash: string;
    message: string;
    author: string;
}
export declare function getNewCommits(): Promise<GitResult>;
