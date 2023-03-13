// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
//   auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

//   Code của đăng nhập bằng cách chuyển trang

//   useEffect(async () => {
//     const response = await getRedirectResult(auth);
//     console.log(response);

//     if (response) {
//       const userDocref = createUserDocumentFromAuth(response.user);
//     }
//   }, []);

  const logGoogleUSer = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocref = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      {/* Đăng nhập bằng cách hiện popup */}
      <button onClick={logGoogleUSer}>Sign in with Google Popup</button>
      {/* Đăng nhập bằng chuyển hướng trang 
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>*/}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
