export interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    language: string;
    fork: boolean;
}
export interface IconProps {
    className?: string;
    width?: number;
    height?: number;
}
export interface RepoCardProps {
    repo: GitHubRepo;
    showStars: boolean;
    showLanguage: boolean;
}
