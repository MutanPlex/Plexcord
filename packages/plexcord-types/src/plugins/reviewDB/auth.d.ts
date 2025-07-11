import { ReviewDBAuth } from "./entities";
export declare let Auth: ReviewDBAuth;
export declare function initAuth(): Promise<void>;
export declare function getAuth(): Promise<ReviewDBAuth | undefined>;
export declare function getToken(): Promise<string | undefined>;
export declare function updateAuth(newAuth: ReviewDBAuth): Promise<void>;
export declare function authorize(callback?: any): void;
