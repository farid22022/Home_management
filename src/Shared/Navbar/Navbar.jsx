import { Link, NavLink } from "react-router-dom";
import profilePic from "../../../public/profile.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    
    const handleSignOut = () =>{
        logOut()
            .then()
            .catch()
    }
    console.log(user);

    const navLinks = <>
        <li><a><NavLink to="/">Home</NavLink></a></li>
        <li><a><NavLink to="/updateprofile">Update Profile</NavLink></a></li>
        <li><a><NavLink to="/">User Profile</NavLink></a></li>
    </>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="grid grid-cols-1">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                  {
                    user ?
                    
                    <img alt={user.email} src={user.photoURL} />
                    :
                    <img alt="" src={profilePic} />
                  }
                  </div>
              </div>
              {
                user ?
                <button onClick={handleSignOut} className="btn">Sign Out</button>
                :
                <Link to="/login">
                    <button className="btn btn-secondary">Login</button>
                </Link>
              }
              
          </div>
        </div>
      </div>
    );
};

export default Navbar;