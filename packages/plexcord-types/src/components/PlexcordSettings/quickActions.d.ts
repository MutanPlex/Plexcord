import "./quickActions.css";
import type { ComponentType, PropsWithChildren, ReactNode } from "react";
export interface QuickActionProps {
    Icon: ComponentType<{
        className?: string;
    }>;
    text: ReactNode;
    action?: () => void;
    disabled?: boolean;
}
export declare function QuickAction(props: QuickActionProps): import("react").JSX.Element;
export declare function QuickActionCard(props: PropsWithChildren): import("react").JSX.Element;
