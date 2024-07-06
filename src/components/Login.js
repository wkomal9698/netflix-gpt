import React, { useState } from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="absolute h-full w-full bg-black bg-opacity-50">
        <Header></Header>
        <form className="flex flex-col w-1/3 mt-20 p-10 bg-black bg-opacity-70 mx-auto right-0 left-0 text-white">
          <p className="font-bold text-3xl mb-5">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </p>
          {!isSignInForm ? (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-2 rounded-sm shadow-md bg-transparent border border-gray-300 h-14"
            ></input>
          ) : null}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-4 my-2 rounded-sm shadow-md bg-transparent border border-gray-300 h-14"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-2 rounded-sm shadow-md bg-transparent border border-gray-300 h-14"
          ></input>
          <button className="p-4 my-2 bg-red-700 font-bold rounded-sm">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-md mb-5 text-gray-300">
            {isSignInForm ? "New to Netflix?" : "Already a user?"}{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </form>
      </div>

      <div>
        <img alt="Netflix Background" src={BACKGROUND_IMAGE} />
      </div>
    </div>
  );
};

export default Login;
