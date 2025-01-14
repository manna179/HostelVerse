import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import Navbar from "../../Pages/Navbar/Navbar";
import Banner from "../../Pages/Home/Banner/Banner";


const Main = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Banner></Banner>
           
           <div >
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;