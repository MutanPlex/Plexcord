export declare const generateKeys: () => Promise<{
    privateKey: CryptoKey;
    publicKey: string;
}>;
export declare const encryptData: (pemPublicKey: any, data: any) => Promise<any[]>;
export declare const decryptData: (privateKey: any, encArray: any) => Promise<string>;
export declare const formatPemKey: (keyData: any, type: any) => string;
