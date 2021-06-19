import { SignupViewProps } from "../../common/types/auth.types";
import withAuthContext from "./components/withAuthContext";

export function SignupView(props: SignupViewProps){
    return null;
}

export default withAuthContext<SignupViewProps>(SignupView);
