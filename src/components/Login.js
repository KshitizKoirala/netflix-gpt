import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BACKGROUND_IMAGE, STATIC_PROFILE_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignInForm] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmit = () => {
    // Validate Form Data
    /**
     * To get the data, we can either useState and get the values
     * Or We can use useRef hook as shown to pass the reference of the element
     */
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name?.current?.value
    );
    SetErrorMessage(message);

    if (message) return;

    // SignIn / SignUp Here.....
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: user.photoURL,
          })
            .then(() => {
              // We cannot extract the data from user, as this is an old object
              // So we need to use auth.currentUser
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  userInfo: {
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL ?? STATIC_PROFILE_IMAGE,
                  },
                })
              );
            })
            .catch((error) => {
              // An error occurred
              SetErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-auto"
          alt="background-banner"
          src={BACKGROUND_IMAGE}
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-11/12 md:w-3/12 absolute p-10 bg-black mx-auto top-[20%] right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 mb-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <p className="text-sm text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-6 font-semibold bg-red-700 w-full rounded-lg"
          onClick={handleSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-2 hover:underline cursor-pointer"
          onClick={() => setIsSignInForm(!isSignIn)}
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Login here"}
        </p>
      </form>
    </div>
  );
};

export default Login;
