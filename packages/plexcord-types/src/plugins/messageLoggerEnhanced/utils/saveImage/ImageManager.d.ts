import { LoggedAttachment } from "../../types";
export declare function getImage(attachmentId: string, fileExt?: string | null): Promise<any>;
export declare function downloadAttachment(attachemnt: LoggedAttachment): Promise<string | undefined>;
export declare function deleteImage(attachmentId: string): Promise<void>;
