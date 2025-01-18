import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import Navbar from "../../Pages/Navbar/Navbar";
import Banner from "../../Pages/Home/Banner/Banner";


const Main = () => {
    return (
        <div>
         <div className="w-full sticky top-0 z-30 bg-[#007BFF] "> <Navbar></Navbar></div>
        
           
           <div className="min-h-screen">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;