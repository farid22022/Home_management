import { Link, NavLink } from "react-router-dom";
import profilePic from "../../../public/profile.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Marquee from "react-fast-marquee";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    // console.log(user.photoURL);
    
    const handleSignOut = () =>{
        logOut()
            .then()
            .catch()
    }
    console.log(user);

    const navLinks = <>
        <li className="font-serif animate__animated animate__bounce animate text-2xl font-semibold text-green-700 shadow-2xl"><a><NavLink to="/">Home</NavLink></a></li>
        {
          user && <li className="font-serif animate__animated animate__bounce animate text-2xl font-semibold text-blue-800"><a><NavLink to="/userprofile">User Profile</NavLink></a></li>
        }
        <li className="font-serif animate__animated animate__bounce animate text-2xl text-red-700"><a><NavLink to="/updateprofile">Update Profile</NavLink></a></li>
    </>

    return (
        <div className="navbar bg-base-100 mt-4 md:grid-cols-1">
          <div className="navbar-start md:mt-10">
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


          <div className="navbar-center hidden lg:flex md:mt-5">
            <ul className="menu menu-horizontal px-1">
              {navLinks}
            </ul>
          </div>

          <div className="navbar-end">
            <div className="grid grid-cols-1">
                <div tabIndex={0} role="button" className="w-20 btn btn-ghost btn-circle avatar relative z-10">
                    <div className=" rounded-full">
                      {
                        user ?
                        
                        <div className="grid grid-cols-1">
                          
                          <img alt='' src={user.photoURL} />
                        </div>
                        :
                        <img alt="" src={profilePic} />
                      }
                    </div>
                    <div>
                      {
                        user?
                        <Marquee><h2>{user.email} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       </h2></Marquee>
                        :
                        <Marquee><h2>No User Found</h2></Marquee>
                      }
                    </div>
                </div>
                <div  className="absolute top-60">
                  {
                    user ?
                    <button onClick={handleSignOut} className="btn p-1">Sign Out</button>
                    :
                    <Link to="/login">
                        <button className="btn btn-secondary">Login</button>
                    </Link>
                  }
                </div>
                
            </div>
          </div>
      </div>
    );
};

export default Navbar;