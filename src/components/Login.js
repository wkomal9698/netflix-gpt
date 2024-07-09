import React, { useState, useRef } from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE, KWI2_USER_PROFILE, USER_AVATAR } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    setErrorMessage(
      checkValidData(
        email.current.value,
        password.current.value,
        fullName.current?.value,
        isSignInForm
      )
    );

    if (errorMessage) return;

    if (isSignInForm) {
      // login user and redirect to browse page
      console.log("Sign In Auth");
      console.log("Auth", auth);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Success: ", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          console.log("Error: ", errorCode, errorMsg);
          setErrorMessage(errorCode + " - " + errorMsg);
        });
    } else {
      // create account and redirect to browse page
      console.log("Sign In Auth");
      console.log("Auth", auth);
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("Success: ", user);
          updateProfile(user, {
            displayName: fullName.current.value, photoURL: KWI2_USER_PROFILE
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message)
            });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          console.log("Error: ", errorCode, errorMsg);
          setErrorMessage(errorCode + " - " + errorMsg);
        });
    }
  };

  return (
    <div>
      <div className="absolute h-full w-full bg-black bg-opacity-50">
        <Header></Header>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col w-1/3 mt-20 p-10 bg-black bg-opacity-70 mx-auto right-0 left-0 text-white"
        >
          <p className="font-bold text-3xl mb-5">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </p>
          {!isSignInForm ? (
            <input
              type="text"
              placeholder="Full Name"
              ref={fullName}
              className="p-4 my-2 rounded-sm shadow-md bg-transparent border border-gray-300 h-14"
            ></input>
          ) : null}
          <input
            type="text"
            placeholder="Email or mobile number"
            ref={email}
            className="p-4 my-2 rounded-sm shadow-md bg-transparent border border-gray-300 h-14"
          ></input>
          <input
            type="password"
            placeholder="Password"
            ref={password}
            className="p-4 my-2 rounded-sm shadow-md bg-transparent border border-gray-300 h-14"
          ></input>
          <p className="text-sm mt-2 text-red-600">
            {errorMessage ? errorMessage : null}
          </p>
          <button
            className="p-4 my-2 bg-red-700 font-bold rounded-sm"
            onClick={handleButtonClick}
          >
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
