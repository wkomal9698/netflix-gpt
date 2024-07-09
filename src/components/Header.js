import React from "react";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-2 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" alt="Netflix logo" src={NETFLIX_LOGO}></img>
      {user && <div className="flex p-4">
        <p>{user?.displayName}</p>
        <img className="w-12 h-12" alt="User Avatar" src={user ? user.photoURL ? user.photoURL : USER_AVATAR : USER_AVATAR}></img>
        <button
          onClick={handleSignOut}
          className="bg-red-300 text-red-800 mx-2 px-2 rounded-xl bg-opacity-[0.7] font-bold"
        >
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
