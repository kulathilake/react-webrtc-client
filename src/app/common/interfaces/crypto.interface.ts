export interface Crypto {
    getCandidateKeys(): Promise<string>;
    generateSecret(): Promise<string>;
    signString(stringToSign: string): Promise<string>;
    encrypt(string: string, key: string): Promise<string>;
    decrypt(cipher: string, key: string): Promise<string>;
}