import useMeals from "../../Hooks/useMeals";
import Banner from "./Banner/Banner";
import MealCategory from "./Category/MealCategory";
import Promotion from "./Promotion/Promotion";



const Home = () => {
    
  


    return (
        <div>
           <div className="">
           <Banner></Banner>
           </div>
           <div className="w-11/12 mx-auto">
           <MealCategory></MealCategory>
           </div>
           <div>
            <Promotion></Promotion>
           </div>
          
          
        </div>
    );
};

export default Home;