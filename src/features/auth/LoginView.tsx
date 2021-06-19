import { LoginViewProps } from "./types";
import withAuthContext from "./components/withAuthContext";

/**
 * UI For Login Screen
 */
export function LoginView(props: LoginViewProps) {
    return null;
};

export default withAuthContext<LoginViewProps>(LoginView);