import { ReviewType } from "../entities";
import { Response } from "../reviewDbApi";
interface UserProps {
    discordId: string;
    name: string;
}
interface Props extends UserProps {
    onFetchReviews(data: Response): void;
    refetchSignal?: unknown;
    showInput?: boolean;
    page?: number;
    scrollToTop?(): void;
    hideOwnReview?: boolean;
    type: ReviewType;
}
export default function ReviewsView({ discordId, name, onFetchReviews, refetchSignal, scrollToTop, page, showInput, hideOwnReview, type, }: Props): import("react").JSX.Element | null;
export declare function ReviewsInputComponent({ discordId, isAuthor, refetch, name, modalKey }: {
    discordId: string;
    name: string;
    isAuthor: boolean;
    refetch(): void;
    modalKey?: string;
}): import("react").JSX.Element;
export {};
