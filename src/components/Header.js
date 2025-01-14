import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user?.userInfo);
  // console.log("Header User", user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
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
