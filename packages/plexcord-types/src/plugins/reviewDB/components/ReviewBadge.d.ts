import { Badge } from "../entities";
export default function ReviewBadge(badge: Badge & {
    onClick?(): void;
}): import("react").JSX.Element;
