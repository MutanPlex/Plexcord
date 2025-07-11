import { Review, ReviewDBCurrentUser, ReviewDBUser } from "./entities";
export declare const REVIEWS_PER_PAGE = 50;
export interface Response {
    message: string;
    reviews: Review[];
    updated: boolean;
    hasNextPage: boolean;
    reviewCount: number;
}
export declare function getReviews(id: string, offset?: number): Promise<Response>;
export declare function addReview(review: any): Promise<Response | null>;
export declare function deleteReview(id: number): Promise<Response | null>;
export declare function reportReview(id: number): Promise<void>;
export declare const blockUser: (userId: string) => Promise<void>;
export declare const unblockUser: (userId: string) => Promise<void>;
export declare function fetchBlocks(): Promise<ReviewDBUser[]>;
export declare function getCurrentUserInfo(token: string): Promise<ReviewDBCurrentUser>;
export declare function readNotification(id: number): Promise<globalThis.Response>;
