import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { Avatar, Dropdown } from "flowbite-react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };

  return (
    <nav className="nav">
      {/* desktop */}
      <dl className="md:flex shadow-2xl z-50 w-3/4  bg-[#2E2B2B] px-14 py-2 rounded-full fixed left-1/2 transform -translate-x-1/2 translate-y-2 items-center justify-between hidden">
        <h1 className="text-fuchsia-500 text-2xl font-semibold">
          <Link to="/">ShowTime</Link>
        </h1>

        <ul className="text-white font-medium flex gap-10 ">
          <Link className="hover:text-fuchsia-500" to="/">
            Home
          </Link>
          <Link className="hover:text-fuchsia-500" to="/people">
            People
          </Link>
          <Link className="hover:text-fuchsia-500" to="/schedule">
            Schedule
          </Link>
        </ul>

        <Dropdown
          label={<Avatar alt="User" img={user?.photoURL} rounded={true} />}
          arrowIcon={false}
          inline={true}
        >
          <Dropdown.Header>
            <span className="block text-sm">{user?.displayName}</span>
            <span className="block truncate text-sm font-medium">
              {user?.email}
            </span>
          </Dropdown.Header>

          <Dropdown.Item>
            <Link to="/login" onClick={logOut}>
              {user?.email ? "SignOut" : "LogIn"}
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </dl>

      {/* phone */}
      <dl className="absolute left-1/2 transform -translate-x-1/2 translate-y-3 z-50 md:hidden flex items-center">
        <h1 className="text-fuchsia-500 text-xl font-semibold text-center">
          <Link to="/">ShowTime</Link>
        </h1>

        <Dropdown
          label={
            <Avatar alt="User settings" img={user?.photoURL} rounded={true} />
          }
          arrowIcon={false}
          inline={true}
        >
          <Dropdown.Header>
            <span className="block text-sm">{user?.displayName}</span>
            <span className="block truncate text-sm font-medium">
              {user?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <Link to="/">Home</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/people">People</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/schedule">Schedule</Link>
          </Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to="/login" onClick={logOut}>
              {user?.email ? "SignOut" : "LogIn"}
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </dl>
    </nav>
  );
};

export default Nav;
