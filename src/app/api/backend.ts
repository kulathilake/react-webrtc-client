export enum BackendProvider {
    FIREBASE = 'firebase',
}
export interface Backend {
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
    put: (file: Blob) => Promise<any>,
    get: any,
    delete: any,
    patch: any
}