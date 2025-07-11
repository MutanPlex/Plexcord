import { DBMessageStatus } from "./db";
import { LoggedMessage, LoggedMessageJSON } from "./types";
export declare const addMessage: (message: LoggedMessage | LoggedMessageJSON, status: DBMessageStatus) => Promise<void>;
