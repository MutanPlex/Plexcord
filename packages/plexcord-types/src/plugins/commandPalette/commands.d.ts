export interface ButtonAction {
    id: string;
    label: string;
    callback?: () => void;
    registrar?: string;
}
export declare const actions: ButtonAction[];
export declare function registerAction(action: ButtonAction): void;
