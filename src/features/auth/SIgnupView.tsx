import { SignupViewProps } from "./types/types";
import withAuthContext from "./components/withAuthContext";

export function SignupView(props: SignupViewProps){
    return null;
}

export default withAuthContext<SignupViewProps>(SignupView);
