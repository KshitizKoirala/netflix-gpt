import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { STATIC_PROFILE_IMAGE } from "../mocks/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user?.userInfo);

  useEffect(() => {
    /**
     * When my component unmounts, we need to clear the onAuthStateChanged as well
     */
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log("Auth State User", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-16 py-6 bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <Link to="/">
          <img className="w-36" alt="netlifx" src="./assets/netflix-logo.svg" />
        </Link>
      </div>
      {user && (
        <div className="flex">
          <img className="w-12 h-12" alt="profile" src={user.photoURL} />
          <button className="ml-2 font-bold text-white" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
