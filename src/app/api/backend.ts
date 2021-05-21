export enum BackendProvider {
    FIREBASE = 'firebase',
}
export interface Backend extends BackendAuth,BackendStorage{
    version: string,
    provider: BackendProvider,
    auth: BackendAuth,
    storage: BackendStorage,
};


interface BackendAuth {
    login: any,
    logout:any,
    signup: any,
    reset: any,
    refresh: any,
    changePassword: any
}

interface BackendStorage {
    putFile: (file: Blob) => Promise<any>,
    getFile: (key: string) => Promise<Blob>,
    deleteFile: (key: string) => Promise<any>,
    patchFile: (key:string, file: Blob) => Promise<any>
}