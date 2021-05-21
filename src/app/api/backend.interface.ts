import {AuthProvider} from "../common/interfaces/provider.types";

export interface Backend extends BackendAuth,BackendStorage{
    auth: BackendAuth,
    storage: BackendStorage,
};


interface BackendAuth {
    signup(email:string, password: string): Promise<any>,
    signup(provider: AuthProvider): Promise<any>,
    login(email: string, password: string): Promise<any>,
    login(provider: AuthProvider): Promise<any>
    logout():void,
    reset(email: string): Promise<any>,
    resetConfirm(email: string, code: string): Promise<any>,
    confirmEmail(code:string,email:string): Promise<any>,
    refresh(token: string): Promise<any>,
    changePassword(oldPassword: string, newPassword: string): Promise<any>
}

interface BackendStorage {
    putFile: (file: Blob) => Promise<any>,
    getFile: (key: string) => Promise<Blob>,
    deleteFile: (key: string) => Promise<any>,
    patchFile: (key:string, file: Blob) => Promise<any>
}
