import { LazyComponentWrapper } from "../utils/lazyReact";
interface Props<T = any> {
    /** Render nothing if an error occurs */
    noop?: boolean;
    /** Fallback component to render if an error occurs */
    fallback?: React.ComponentType<React.PropsWithChildren<{
        error: any;
        message: string;
        stack: string;
        wrappedProps: T;
    }>>;
    /** called when an error occurs. The props property is only available if using .wrap */
    onError?(data: {
        error: Error;
        errorInfo: React.ErrorInfo;
        props: T;
    }): void;
    /** Custom error message */
    message?: string;
    /** The props passed to the wrapped component. Only used by wrap */
    wrappedProps?: T;
}
declare const ErrorBoundary: LazyComponentWrapper<React.ComponentType<React.PropsWithChildren<Props>> & {
    wrap<T extends object = any>(Component: React.ComponentType<T>, errorBoundaryProps?: Omit<Props<T>, "wrappedProps">): React.FunctionComponent<T>;
}>;
export default ErrorBoundary;
