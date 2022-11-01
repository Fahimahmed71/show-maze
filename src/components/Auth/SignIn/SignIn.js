import React from "react";
import { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import logo from "../../../logo.svg";
import Footer from "../../Footer/Footer";
import Loading from "../Loading/Loading";
import GoogleSignIn from "../SocialSignIn/GoogleSignIn";

const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    await signInWithEmailAndPassword(email, pass);

    if (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    console.log(user);

    if (user) {
      navigate("/");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="cover"
            src="http://wallpaperdump.cf/wp-content/uploads/2021/04/2660x3759-Kugisaki-NobaraJujutsu-Kaisen-1240x1752.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <span className="sr-only">Home</span>
            <img className="w-[100px] block mx-auto" src={logo} alt="" />

            <h1 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
              Welcome to ShowTime🎬
            </h1>
            <h1 className="text-center mt-2 text-white text-2xl">LogIn</h1>

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6">
                <label
                  for="Email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Email
                </label>

                <input
                  ref={emailRef}
                  required
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 py-1 px-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6 ">
                <label
                  for="Password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Password
                </label>

                <input
                  ref={passRef}
                  required
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full py-1 px-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white">
                  Log In
                </button>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                  Don't Have An Account? {""}
                  <Link
                    className="text-gray-700 underline dark:text-gray-200"
                    to="/registration"
                  >
                    Registration
                  </Link>
                </p>
              </div>
            </form>
            <GoogleSignIn />
          </div>
        </main>
      </div>
      <Footer />
    </section>
  );
};

export default SignIn;
