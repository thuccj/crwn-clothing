import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUSer = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocref = createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUSer = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUSer}>Sign in with Google Popup</button>
      <button onClick={logGoogleUSer}>Sign in with Google Redirect</button>
    </div>
  );
};

export default SignIn;
