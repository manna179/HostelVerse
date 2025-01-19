import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMeals from "../../../Hooks/useMeals";
import { Link } from "react-router-dom";
const MealCategory = () => {
  const [meals] = useMeals();
  const breakfast = meals.filter((item) => item.category === "breakfast");
  const lunch = meals.filter((item) => item.category === "lunch");
  const dinner = meals.filter((item) => item.category === "dinner");

  return (
    <div className="mb-6">
<div>
  <h2 className="text-3xl font-bold text-center mt-6">HostelVerse: Where Every Meal Tells a Story</h2>
  <p className="text-lg font-semibold text-center mt-2 text-gray-600">Discover, Share, and Savor Dishes from Around the World in One Place.</p>
</div>
      
      <Tabs>
      <TabList>
        <Tab>Meals</Tab>
        <Tab>Breakfast</Tab>
        <Tab>Lunch</Tab>
        <Tab>Dinner</Tab>
      </TabList>

      <TabPanel >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full" >
       {meals.slice(0,3).map((item) => (
          <div  key={item._id}>
            <div className="bg-base-100 w-full  shadow-xl">
              <figure className="px-4 pt-4">
                <img
                  src={item.image}
                  alt="Shoes"
                  className="rounded-xl h-[300px] w-full object-cover bg-cover"
                />
              </figure>
              <div className=" p-4 space-y-2">
              
                <h2 className="card-title">{item.title}</h2>
               <div className="flex justify-between">
               <p className=" font-semibold ">Price : <span className="text-yellow-600">$</span> {item.price}</p>
               <p className="font-semibold">Rating : {item.rating}</p>
               </div>
                
                <div className="card-actions justify-end">
                 <Link to={`/meals/${item._id}`}> <button className="btn bg-[#FFD709]">Details</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
       </div>
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full" >
       {breakfast.slice(0,3).map((item) => (
          <div  key={item._id}>
            <div className="bg-base-100 w-full  shadow-xl">
              <figure className="px-4 pt-4">
                <img
                  src={item.image}
                  alt="Shoes"
                  className="rounded-xl h-[300px] w-full object-cover bg-cover"
                />
              </figure>
              <div className=" p-4 space-y-2">
              
                <h2 className="card-title">{item.title}</h2>
               <div className="flex justify-between">
               <p className=" font-semibold ">Price : <span className="text-yellow-600">$</span> {item.price}</p>
               <p className="font-semibold">Rating : {item.rating}</p>
               </div>
                
                <div className="card-actions justify-end">
                 <Link to={`/meals/${item._id}`}> <button className="btn bg-[#FFD709] font-semibold">Details</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
       </div>
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full" >
       {lunch.slice(0,3).map((item) => (
          <div  key={item._id}>
            <div className="bg-base-100 w-full  shadow-xl">
              <figure className="px-4 pt-4">
                <img
                  src={item.image}
                  alt="Shoes"
                  className="rounded-xl h-[300px] w-full object-cover bg-cover"
                />
              </figure>
              <div className=" p-4 space-y-2">
              
                <h2 className="card-title">{item.title}</h2>
               <div className="flex justify-between">
               <p className=" font-semibold ">Price : <span className="text-yellow-600">$</span> {item.price}</p>
               <p className="font-semibold">Rating : {item.rating}</p>
               </div>
                
                <div className="card-actions justify-end">
                 <Link to={`/meals/${item._id}`}> <button className="btn bg-[#FFD709]">Details</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
       </div>
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full" >
       {dinner.slice(0,3).map((item) => (
          <div  key={item._id}>
            <div className="bg-base-100 w-full  shadow-xl">
              <figure className="px-4 pt-4">
                <img
                  src={item.image}
                  alt="Shoes"
                  className="rounded-xl h-[300px] w-full object-cover bg-cover"
                />
              </figure>
              <div className=" p-4 space-y-2">
              
                <h2 className="card-title">{item.title}</h2>
               <div className="flex justify-between">
               <p className=" font-semibold ">Price : <span className="text-yellow-600">$</span> {item.price}</p>
               <p className="font-semibold">Rating : {item.rating}</p>
               </div>
                
                <div className="card-actions justify-end">
                 <Link to={`/meals/${item._id}`}> <button className="btn bg-[#FFD709]">Details</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
       </div>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default MealCategory;
