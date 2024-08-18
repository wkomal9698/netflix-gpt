import React, { useEffect } from "react";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGPTSearch = useSelector(store => store.gpt?.showGPTSearch);
  const currentLang = useSelector(store => store.config?.lang);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
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
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  }

  return (
    <div className="absolute w-screen px-2 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" alt="Netflix logo" src={NETFLIX_LOGO}></img>
      {user && <div className="flex p-4">
        <p className="p-4">{user?.displayName}</p>
        {showGPTSearch && <select value={currentLang} className="bg-gray-500 px-4 text-white mx-2 rounded-md z-20" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)}
          </select>}
        
        <button
          onClick={handleGPTSearchClick}
          className="text-white bg-purple-800 mx-2 px-2 hover:bg-opacity-[0.7] font-bold z-20"
        >
          {showGPTSearch ? "Home page" : "GPT Search"}
        </button>
        <img className="w-12 h-12" alt="User Avatar" src={user ? user.photoURL ? user.photoURL : USER_AVATAR : USER_AVATAR}></img>
        <button
          onClick={handleSignOut}
          className="bg-red-300 text-red-800 mx-2 px-2 rounded-xl bg-opacity-[0.7] font-bold z-20"
        >
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
