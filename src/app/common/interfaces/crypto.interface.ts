export interface Crypto {
    getCandidateKeys(): Promise<JSON>;
    generateSecret(): Promise<JSON>;
    signString(stringToSign: string): Promise<string>;
    encrypt(string: string, key: JSON): Promise<string>;
    decrypt(cipher: string, key: JSON): Promise<string>;
}