
import Banner from "./Banner/Banner";
import MealCategory from "./Category/MealCategory";
import Membership from "./Membership/Membership";
import Promotion from "./Promotion/Promotion";



const Home = () => {
    
  


    return (
        <div>
           <div className="">
           <Banner></Banner>
           </div>
           <div className="w-11/12 mx-auto mt-40">
           <MealCategory></MealCategory>
           </div>
           <div>
            <Promotion></Promotion>
           </div>
           <div>
            <Membership></Membership>
           </div>
          
          
        </div>
    );
};

export default Home;