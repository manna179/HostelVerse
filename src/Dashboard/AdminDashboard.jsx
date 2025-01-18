import { FaAd, FaBook, FaEnvelope, FaHome, FaList, FaPaypal, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { FaTowerObservation } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";


const AdminDashboard = () => {
   
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="bg-[#007BFF] text-white w-64 min-h-screen">
        <ul className="menu p-4">
          {
            isAdmin ? <>
                <li>
            <Link to="/dashBoard/adminProfile">
              <FaHome></FaHome> Admin Profile
            </Link>
          </li>
          <li>
            <Link to="/dashBoard/addMeal">
              <FaUtensils></FaUtensils> Add meal
            </Link>
          </li>
          <li>
            <Link to="/dashBoard/manageMeals">
              <FaList></FaList> Manage meals
            </Link>
          </li>

         
          <li>
            <Link to="/dashBoard/manageBooking">
              <FaBook></FaBook>Manage Booking 
            </Link>
          </li>
          <li>
            <Link to="/dashBoard/users">
              <FaUser></FaUser> All Users
            </Link>
          </li>
            </>
            :
            <>
            <li>
            <Link to="/dashBoard/userProfile">
              <FaHome></FaHome> User Profile
            </Link>
          </li>
          <li>
            <Link to="/dashBoard/reservation">
              <FaTowerObservation></FaTowerObservation> Reservation
            </Link>
          </li>
          <li>
            <Link to="/dashBoard/payment">
              <FaPaypal></FaPaypal> Payment History
            </Link>
          </li>

          <li>
            <Link to="/dashBoard/cart">
              <FaShoppingCart></FaShoppingCart> My Cart 
            </Link>
          </li>
          <li>
            <Link to="/dashBoard/review">
              <FaAd></FaAd> Add Review
            </Link>
          </li>
          <li>
            <Link to="/dashBoard/paymentHistory">
              <FaList></FaList> Payment History
            </Link>
          </li>
            </>
          }
          {/* shared links */}
          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome></FaHome>Home
            </Link>
          </li>
          <li>
            <Link to="/allMeals">
              <FaSearch></FaSearch>  Menu
            </Link>
          </li>
          <li>
            <Link to="/order/contact">
              <FaEnvelope></FaEnvelope>  Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminDashboard;