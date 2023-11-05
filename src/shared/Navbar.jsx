import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.webp";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

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
      <li className="">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">ChildZone</Link>
      </li>
      <li>
        <Link to="/myToys">KidsWorld</Link>
      </li>
      <li>
        <Link to="/addToys">Create</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="bg-[#003580] px-10 pb-3 pt-5">
    <div className="flex justify-between items-center">
        {/* logo and title section */}
        <h1 className="font-Ubuntuu text-2xl text-[#f2f6fa] ">Kidz Store</h1>
        {/* Search secdtion */}
        <div className="relative w-3/4 mb-4 flex flex-wrap items-stretch">
          <input
            className="font-Ubuntuu"
            type="text"
            placeholder="Search by product name"
          />
          <span
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-white"
            id="basic-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      {/* profile section */}
      <div>
        <UserCircleIcon className="h-10 w-10 mr-2 text-white"></UserCircleIcon>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <Button title={'Register'} />
        <Button title={'SignIn'} />
      </div>
    </div>
    {/* navlink section */}
    <div>
        <ul className="flex text-white font-Ubuntuu text-xl gap-6 py-2">
          {navItems}
        </ul>
      </div>
      {/* <div className="navbar-start">
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
      </div> */}
    </div>
  );
};

export default Navbar;
