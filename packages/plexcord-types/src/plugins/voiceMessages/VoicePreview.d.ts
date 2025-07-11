export type VoicePreviewOptions = {
    src?: string;
    waveform: string;
    recording?: boolean;
};
export declare const VoicePreview: ({ src, waveform, recording, }: VoicePreviewOptions) => import("react").JSX.Element;
