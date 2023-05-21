import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.webp";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.photoURL)

  const handleLogOut = () => {
    logOut()
      .then((res) => {})
      .then((err) => console.log(err));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      <li>
        <Link to="/myToys">My Toys</Link>
      </li>
      <li>
        <Link to="/addToys">Add a Toys</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-orange-100 px-4">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-orange-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link className="flex items-center justify-center gap-2" to="/">
          <FontAwesomeIcon className="h-10 w-full text-sky-600" icon={faCarSide} /> 
          <h2 className="font-myFont text-3xl">Kidol</h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl font-display">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="border-2 border-white rounded-xl mr-2 px-5 py-3 font-myFont"
            >
              LogOut
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="border-2 border-white rounded-xl px-5 py-3 font-myFont mr-2">
              Login
            </button>
          </Link>
        )}

        {user ? (
            <div className="tooltip mr-2" data-tip={user?.displayName}>
                <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
            </div>
        ) : (
          <UserCircleIcon className="h-12 w-12 mr-2 text-blue-500"></UserCircleIcon>
        )}
      </div>
    </div>
  );
};

export default Navbar;
