import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import whiteLogo from "../../Assets/Icons/vroomxlogowhite.png";
import auth from "../Authentication/Firebase/Firebase.init";

const Navbar = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  console.log(user);
  return (
    <section className="drawer drawer-end p-0">
      <input id="responsive" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar starts from here */}
        <div className="w-full navbar bg-black text-white lg:px-8 fixed top-0 z-50">
          <div className="flex-1 px-2 mx-2">
            <img src={whiteLogo} className="w-32" alt="logo" />
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu-horizontal">
              {/* Navbar menu content */}
              <li className="mx-4">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="mx-4">
                <NavLink to="">Cars</NavLink>
              </li>
              <li className="mx-4">
                <NavLink to="">Accessories</NavLink>
              </li>
              <li className="mx-4">
                <NavLink to="">Services</NavLink>
              </li>
              <li className="mx-4">
                <NavLink to="">Career</NavLink>
              </li>
              <li className="mx-4">
                <NavLink to="">About Us</NavLink>
              </li>
              <li className="mx-4">
                <NavLink to="">Contact Us</NavLink>
              </li>
            </ul>
            {user ? (
              <button className="btn btn-outline btn-error" onClick={logout}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-outline text-white">
                Login
              </Link>
            )}
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="responsive" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {/* Navbar ends here */}

        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="responsive" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto w-80 bg-base-100">
          {/* Responsive sidebar for menu */}
          <li className="my-4 text-center">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="my-4 text-center">
            <NavLink to="">Cars</NavLink>
          </li>
          <li className="my-4 text-center">
            <NavLink to="">Accessories</NavLink>
          </li>
          <li className="my-4 text-center">
            <NavLink to="">Services</NavLink>
          </li>
          <li className="my-4 text-center">
            <NavLink to="">Career</NavLink>
          </li>
          <li className="my-4 text-center">
            <NavLink to="">About Us</NavLink>
          </li>
          <li className="my-4 text-center">
            <NavLink to="">Contact Us</NavLink>
          </li>
          <div className="flex justify-center">
            {user ? (
              <button className="btn btn-outline btn-error" onClick={logout}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-outline text-black">
                Login
              </Link>
            )}
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
