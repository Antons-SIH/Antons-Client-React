import React from "react";
import { login, logout } from "../../store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  function logout() {
    localStorage.removeItem("userinfo");
    props.logout();
  }
  return (
    <div>
      <nav className="nav flex flex-wrap items-center justify-between px-4">
        <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          <span className="font-semibold text-xl tracking-tight">SIH</span>
        </div>
        <input className="menu-btn hidden " type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          htmlFor="menu-btn"
        >
          <span className="navicon bg-grey-light flex items-center relative"></span>
        </label>

        {props.isAuthenticated ? (
          <ul className="menu border-b md:border-none px-2 flex justify-end list-reset m-0 w-full md:w-auto">
            <li className=" md:border-none px-2">
              <Link
                href="/"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
              >
                Home
              </Link>
            </li>
            <li className=" md:border-none px-2">
              <Link
                href="/user/upload"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Upload Document
              </Link>
            </li>
            <li className=" md:border-none px-2">
              <Link
                href="/user/upload"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Profile
              </Link>
            </li>
            <li className=" md:border-none px-2">
              <Link
                href="/"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                <a onClick={logout}>
                  <span className="hide-sm"> &nbsp;Logout</span>
                </a>
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="menu border-b md:border-none px-2 flex justify-end list-reset m-0 w-full md:w-auto">
            <li className=" md:border-none px-2 p-2 hover:text-gray-300">
              <Link
                to="/"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
              >
                Home
              </Link>
            </li>
            <li className=" md:border-none px-2 p-2 hover:text-gray-300">
              <Link
                to="/auth/login"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
              >
                Sign In
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
    userData: state.userData,
  };
}
function mapActionToProps(dispatch) {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapActionToProps)(NavBar);
