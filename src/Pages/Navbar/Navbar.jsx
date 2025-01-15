import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import AdminDashboard from "../../Dashboard/AdminDashboard";


const Navbar = () => {
    const {user,logout}=useContext(AuthContext)
    return (
        <div className="navbar flex justify-between pl-6 pr-6 bg-[#007BFF]">
        <div className="flex">
            <img className="h-10 w-10" src="https://i.ibb.co.com/xmNyvnY/brand-17653861.png" alt="" />
          <h2 className=" text-2xl text-white">HostelVerse</h2>
        </div>

        <div className="list-none gap-10 text-white font-semibold">
           <li><NavLink to='/'>Home</NavLink></li> 
           <li><NavLink>Meals</NavLink></li> 
           <li><NavLink>Upcoming Meals</NavLink></li> 
           <li><NavLink>
            <button className="flex  items-center">
            <FaCartShopping />
            <div className="badge text-orange-300">+99</div>
           </button>
           </NavLink></li>
           
           
        </div>

        {
            user ?<><div className="flex-none">
       
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
               <p>{user?.displayName}</p>
              </li>
              <li><Link to='/dashboard'> Dashboard </Link></li>
              <li><Link onClick={logout}>Logout</Link></li>
            </ul>
          </div>
        </div></>:<> <li className="list-none"><NavLink to='login'> Join Us</NavLink></li> </>
        }
        
      </div>
    );
};

export default Navbar;