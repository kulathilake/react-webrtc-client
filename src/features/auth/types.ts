export interface AuthWrapperProps{
    setAlert: () => void;
    onLogin: (email: string, password: string) => void;
  }
  
  export interface LoginViewProps extends AuthWrapperProps{
      variant?: 'page' | 'modal' | 'dropdown';
      social?: {
          google?: boolean
          facebook?: boolean;
          github?: boolean;
      }
  }
  
  export interface SignupViewProps extends LoginViewProps{
      
  }