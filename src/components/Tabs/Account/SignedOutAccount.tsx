import { Form } from "semantic-ui-react";
import { useFirebase } from "../../Firebase";

export const SignedOutAccount = (): JSX.Element | null => {
	const { user, googleSignIn } = useFirebase();

	if (user) {
		return null;
	}
	return (
		<Form>
			<h1>Sign In</h1>
			<button onClick={googleSignIn}>Sign in with Google</button>
		</Form>
	);
};
