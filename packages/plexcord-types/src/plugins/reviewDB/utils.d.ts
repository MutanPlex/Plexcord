import { Review } from "./entities";
export declare const cl: (...args: (string | false | 0 | string[] | Record<string, unknown> | null | undefined)[]) => string;
export declare function canDeleteReview(profileId: string, review: Review): boolean;
export declare function canBlockReviewAuthor(profileId: string, review: Review): boolean;
export declare function canReportReview(review: Review): boolean;
export declare function showToast(message: string, type?: string): void;
