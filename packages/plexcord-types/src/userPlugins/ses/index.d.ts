type ContextMenuPatchCallback = (children: any, props: any) => void;
declare const UserListManager: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    userContextMenuPatch: ContextMenuPatchCallback;
    channelContextMenuPatch: ContextMenuPatchCallback;
    _voiceStateListener: ((data: any) => void);
    start(): void;
    stop(): void;
    registerContextMenu(): void;
    registerCommands(): void;
    executeCommand(commandName: any, userId: any, channelId: any): boolean;
    pushMyListsSection(sections: any[]): void;
    renderMyLists: import("react").FunctionComponent<{
        onClose: () => void;
    }>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
} & Record<string, any>;
export default UserListManager;
