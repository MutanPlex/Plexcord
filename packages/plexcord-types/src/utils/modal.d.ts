import type { ComponentType, PropsWithChildren, ReactNode, Ref } from "react";
export declare const enum ModalSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    DYNAMIC = "dynamic"
}
declare const enum ModalTransitionState {
    ENTERING = 0,
    ENTERED = 1,
    EXITING = 2,
    EXITED = 3,
    HIDDEN = 4
}
export interface ModalProps {
    transitionState: ModalTransitionState;
    onClose(): void;
}
export interface ModalOptions {
    modalKey?: string;
    onCloseRequest?: (() => void);
    onCloseCallback?: (() => void);
}
type RenderFunction = (props: ModalProps) => ReactNode | Promise<ReactNode>;
interface Modals {
    ModalRoot: ComponentType<PropsWithChildren<{
        transitionState: ModalTransitionState;
        size?: ModalSize;
        role?: "alertdialog" | "dialog";
        className?: string;
        fullscreenOnMobile?: boolean;
        "aria-label"?: string;
        "aria-labelledby"?: string;
        onAnimationEnd?(): string;
    }>>;
    ModalHeader: ComponentType<PropsWithChildren<{
        /** Flex.Justify.START */
        justify?: string;
        /** Flex.Direction.HORIZONTAL */
        direction?: string;
        /** Flex.Align.CENTER */
        align?: string;
        /** Flex.Wrap.NO_WRAP */
        wrap?: string;
        separator?: boolean;
        className?: string;
    }>>;
    /** This also accepts Scroller props but good luck with that */
    ModalContent: ComponentType<PropsWithChildren<{
        className?: string;
        scrollerRef?: Ref<HTMLElement>;
        [prop: string]: any;
    }>>;
    ModalFooter: ComponentType<PropsWithChildren<{
        /** Flex.Justify.START */
        justify?: string;
        /** Flex.Direction.HORIZONTAL_REVERSE */
        direction?: string;
        /** Flex.Align.STRETCH */
        align?: string;
        /** Flex.Wrap.NO_WRAP */
        wrap?: string;
        separator?: boolean;
        className?: string;
    }>>;
    ModalCloseButton: ComponentType<{
        focusProps?: any;
        onClick(): void;
        withCircleBackground?: boolean;
        hideOnFullscreen?: boolean;
        className?: string;
    }>;
}
export declare const Modals: Modals;
export declare const ModalRoot: import("./lazyReact").LazyComponentWrapper<ComponentType<PropsWithChildren<{
    transitionState: ModalTransitionState;
    size?: ModalSize;
    role?: "alertdialog" | "dialog";
    className?: string;
    fullscreenOnMobile?: boolean;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    onAnimationEnd?(): string;
}>>>;
export declare const ModalHeader: import("./lazyReact").LazyComponentWrapper<ComponentType<PropsWithChildren<{
    /** Flex.Justify.START */
    justify?: string;
    /** Flex.Direction.HORIZONTAL */
    direction?: string;
    /** Flex.Align.CENTER */
    align?: string;
    /** Flex.Wrap.NO_WRAP */
    wrap?: string;
    separator?: boolean;
    className?: string;
}>>>;
export declare const ModalContent: import("./lazyReact").LazyComponentWrapper<ComponentType<PropsWithChildren<{
    [prop: string]: any;
    className?: string;
    scrollerRef?: Ref<HTMLElement>;
}>>>;
export declare const ModalFooter: import("./lazyReact").LazyComponentWrapper<ComponentType<PropsWithChildren<{
    /** Flex.Justify.START */
    justify?: string;
    /** Flex.Direction.HORIZONTAL_REVERSE */
    direction?: string;
    /** Flex.Align.STRETCH */
    align?: string;
    /** Flex.Wrap.NO_WRAP */
    wrap?: string;
    separator?: boolean;
    className?: string;
}>>>;
export declare const ModalCloseButton: import("./lazyReact").LazyComponentWrapper<ComponentType<{
    focusProps?: any;
    onClick(): void;
    withCircleBackground?: boolean;
    hideOnFullscreen?: boolean;
    className?: string;
}>>;
export type MediaModalItem = {
    url: string;
    type: "IMAGE" | "VIDEO";
    original?: string;
    alt?: string;
    width?: number;
    height?: number;
    animated?: boolean;
    maxWidth?: number;
    maxHeight?: number;
} & Record<PropertyKey, any>;
export type MediaModalProps = {
    location?: string;
    contextKey?: string;
    onCloseCallback?: () => void;
    className?: string;
    items: MediaModalItem[];
    startingIndex?: number;
    onIndexChange?: (...args: any[]) => void;
    fit?: string;
    shouldRedactExplicitContent?: boolean;
    shouldHideMediaOptions?: boolean;
};
export declare const openMediaModal: (props: MediaModalProps) => void;
interface ModalAPI {
    /**
     * Wait for the render promise to resolve, then open a modal with it.
     * This is equivalent to render().then(openModal)
     * You should use the Modal components exported by this file
     */
    openModalLazy: (render: () => Promise<RenderFunction>, options?: ModalOptions & {
        contextKey?: string;
    }) => Promise<string>;
    /**
     * Open a Modal with the given render function.
     * You should use the Modal components exported by this file
     */
    openModal: (render: RenderFunction, options?: ModalOptions, contextKey?: string) => string;
    /**
     * Close a modal by its key
     */
    closeModal: (modalKey: string, contextKey?: string) => void;
    /**
     * Close all open modals
     */
    closeAllModals: () => void;
}
export declare const ModalAPI: ModalAPI;
export declare const openModalLazy: (render: () => Promise<RenderFunction>, options?: ModalOptions & {
    contextKey?: string;
}) => Promise<string>, openModal: (render: RenderFunction, options?: ModalOptions, contextKey?: string) => string, closeModal: (modalKey: string, contextKey?: string) => void, closeAllModals: () => void;
export {};
