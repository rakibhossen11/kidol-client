import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.webp";

const Navbar = () => {
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
        <Link to="/">
          <img className="h-10 w-28 lg:w-40 lg:h-14" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl font-display">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login"><button className="bg-orange-400 px-2 py-1 rounded-sm md:px-6 md:py-4 md:rounded-md text-xs md:text-xl text-white font-myFont">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
