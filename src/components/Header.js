import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { STATIC_PROFILE_IMAGE, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user?.userInfo);
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

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

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log("selected value", value);
    dispatch(changeLanguage(e.target.value));
  };

  /**
   * Tailwind Responsive
   *  Default => Mobile
   *  sm => Tablet
   *  md => Desktop
   */

  return (
    <div className="absolute w-full px-16 py-6 bg-gradient-to-b from-black z-10 flex flex-col justify-center md:flex-row md:justify-between">
      <div className="mx-auto md:mx-0">
        <Link to="/">
          <img className="w-36" alt="netlifx" src="./assets/netflix-logo.svg" />
        </Link>
      </div>
      {user && (
        <div className="flex p-2 mt-5 md:mt-0 justify-between">
          {showGptSearch && (
            <select
              className="p-1 m-2 bg-gray-900 text-white text-sm rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 bg-purple-800 text-white rounded-lg mx-4 my-1 hover:bg-opacity-70"
            onClick={handleGptSearchClick}
          >
            {!showGptSearch ? "GPT Search" : "Homepage"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            alt="profile"
            src={user.photoURL}
          />
          <button
            className="ml-2 font-bold py-3 text-white"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
