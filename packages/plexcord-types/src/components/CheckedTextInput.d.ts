interface TextInputProps {
    /**
     * WARNING: Changing this between renders will have no effect!
     */
    value: string;
    /**
     * This will only be called if the new value passed validate()
     */
    onChange(newValue: string): void;
    /**
     * Optionally validate the user input
     * Return true if the input is valid
     * Otherwise, return a string containing the reason for this input being invalid
     */
    validate(v: string): true | string;
    placeholder?: string;
}
/**
 * A very simple wrapper around Discord's TextInput that validates input and shows
 * the user an error message and only calls your onChange when the input is valid
 */
export declare function CheckedTextInput({ value: initialValue, onChange, validate, placeholder }: TextInputProps): import("react").JSX.Element;
export {};
