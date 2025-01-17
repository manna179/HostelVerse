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
    <Tabs>
      <TabList>
        <Tab>Breakfast</Tab>
        <Tab>Lunch</Tab>
        <Tab>Dinner</Tab>
        <Tab>All Meal</Tab>
      </TabList>

      <TabPanel >
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full " >
       {breakfast.slice(0,3).map((item) => (
          <div  key={item._id}>
            <div className="bg-base-100 w-full p-4  shadow-xl">
              <figure >
                <img
                  src={item.image}
                  alt="Shoes"
                  className="rounded-xl h-[300px] w-full bg-cover object-cover"
                />
              </figure>
              <div className=" flex flex-col  ">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.price}</p>
                <p>{item.rating}</p>
                <div className="card-actions justify-end">
                <Link to={`/meals/${item._id}`}> <button className="btn btn-primary">Buy Now</button></Link>
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
                  className="rounded-xl"
                />
              </figure>
              <div className=" items-center text-center">
                <h2 className="card-title">{item.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <Link to={`/meals/${item._id}`}> <button className="btn btn-primary">Buy Now</button></Link>
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
                  className="rounded-xl"
                />
              </figure>
              <div className=" items-center text-center">
                <h2 className="card-title">{item.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <Link to={`/meals/${item._id}`}> <button className="btn btn-primary">Buy Now</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
       </div>
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full" >
       {meals.slice(0,3).map((item) => (
          <div  key={item._id}>
            <div className="bg-base-100 w-full  shadow-xl">
              <figure className="px-4 pt-4">
                <img
                  src={item.image}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className=" items-center text-center">
                <h2 className="card-title">{item.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                 <Link to={`/meals/${item._id}`}> <button className="btn btn-primary">Buy Now</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
       </div>
      </TabPanel>
    </Tabs>
  );
};

export default MealCategory;
