import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignInForm] = useState(true);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          alt="background-banner"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/NP-en-20250106-TRIFECTA-perspective_fb74a1a8-7915-4b5c-ba3f-fc93d3bc8ca2_large.jpg"
        />
      </div>
      <form className="w-3/12 absolute p-10 bg-black mx-auto top-[20%] right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 mb-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <button className="p-4 my-6 font-semibold bg-red-700 w-full rounded-lg">
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
