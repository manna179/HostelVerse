import useMeals from "../../Hooks/useMeals";
import Banner from "./Banner/Banner";
import MealCategory from "./Category/MealCategory";



const Home = () => {
    
  


    return (
        <div>
            <Banner></Banner>
           <div className="w-11/12 mx-auto">
           <MealCategory></MealCategory>
           </div>
          
          
        </div>
    );
};

export default Home;