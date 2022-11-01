import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const GoogleSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    toast.warn(error.message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  if (user) {
    toast.success(`LoggedIn ${user?.user?.displayName}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <div className="mt-10 flex justify-center">
      <button
        className="flex items-center gap-2 bg-white hover:bg-slate-300 px-5 py-2 rounded-full"
        onClick={() => signInWithGoogle()}
      >
        <span className="text-neutral-600 font-semibold">Sign In With</span>
        <FcGoogle className="text-2xl" />
      </button>
    </div>
  );
};

export default GoogleSignIn;
