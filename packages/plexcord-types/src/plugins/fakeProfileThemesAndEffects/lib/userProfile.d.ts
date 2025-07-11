export interface UserProfile {
    bio: string;
    premiumType: number | null | undefined;
    profileEffectId: string | undefined;
    themeColors: [primaryColor: number, accentColor: number] | undefined;
}
export declare function decodeAboutMeFPTEHook(profile?: UserProfile): UserProfile | undefined;
