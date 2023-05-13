import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <nav className="max-w-screen-2xl w-full mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLink className="py-5" to="/">
                  <li>Home</li>
                </NavLink>

                <NavLink to="/blog">
                  <li>Blog</li>
                </NavLink>
                <Link className="py-5">
                  <li>LogOut</li>
                </Link>
              </ul>
            </div>

            <Link to="/chef">
              <img
                className="h-6 md:h-10 w-auto cursor-pointer"
                src="https://foodbuzz.site/images/logo.png"
                alt="Your Company"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavLink className="px-5" to="/chef">
                <li>Home</li>
              </NavLink>
              <NavLink to="/blog">
                <li>Blog</li>
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <Link onClick={logOut}>LogOut</Link>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img title={user?.displayName} src={user?.photoURL} />
                  </div>
                </label>
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
