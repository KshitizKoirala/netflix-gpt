import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";

import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

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
        // navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/");
      }
    });
  }, []);

  return <RouterProvider router={appRouter} />;
};

export default Body;
