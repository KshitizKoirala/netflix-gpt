import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user?.userInfo);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("Auth State User", user);
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
              photoURL:
                photoURL ??
                "https://imgs.search.brave.com/_1YhWGfJE_pbpg5x-rNvmWKanuf0TuNM8vjby3XCJhQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTEw/MDAteC0xMDAwLXFv/OWg4MjEzNHQ5bnYw/ajAuanBn",
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
