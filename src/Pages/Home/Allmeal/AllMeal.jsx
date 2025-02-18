import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const AllMeal = () => {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("https://server-hostel.vercel.app/meals");
        const data = await response.json();
        // console.log(data);
        setMeals(data);
        setFilteredMeals(data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };
    fetchMeals();
  }, []);

 
 
  const applyFilters = () => {
   

    let filteredData =  meals;
    
    if (category) {
      filteredData = filteredData.filter((meal) => meal.category === category);
    }
    if (minPrice) {
      filteredData = filteredData.filter((meal) => meal.price >= minPrice);
    }
    if (maxPrice) {
      filteredData = filteredData.filter((meal) => meal.price <= maxPrice);
    }
   

    setFilteredMeals(filteredData);
    setPage(1);
    setHasMore(filteredData.length > 10);
  };

  const loadMoreMeals = () => {
    if (page * 10 >= filteredMeals.length) {
      setHasMore(false);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="mt-4 mb-8">
        <h3 className="text-center text-3xl font-bold text-blue-400">
          All the meals you want!
        </h3>
      </div>

      <div className="mb-4 flex flex-col md:flex-row items-center gap-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full bg-slate-50 max-w-xs"
        >
          <option value="">All Categories</option>
          <option value="lunch">Lunch</option>
          <option value="breakfast">Breakfast</option>
          <option value="dinner">Dinner</option>
        </select>

        <div className="flex gap-2 ">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min Price"
            className="input input-bordered w-full max-w-xs bg-slate-50"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max Price"
            className="input input-bordered w-full max-w-xs bg-slate-50"
          />
        </div>

        {/* Filter Button */}
        <button onClick={applyFilters} className="btn text-[#007bff] bg-[#ffd709]">
          Apply Filters
        </button>
      </div>

      {/* Infinite Scroll Meals Grid */}
      <InfiniteScroll
      
        dataLength={page * 10}
        next={loadMoreMeals}
        hasMore={hasMore}
        
        loader={<h4>Loading more meals...</h4>}
        endMessage={<p className="text-center text-lg font-semibold my-4">No more meals to show!</p>}
      >
        <div className="grid grid-cols-1  md:grid-cols-3  lg:grid-cols-4 gap-4 w-full">
          {filteredMeals .filter((item) => item.status === "current").slice(0, page * 10).map((item) => (
            <div key={item._id} className="border-[2px] border-[#ffd709] rounded-lg ">
              <div className="bg-base-100 w-full shadow-xl">
                <figure className="px-2 pt-2">
                  <img
                    src={item.image}
                    alt="Meal"
                    className="rounded-xl h-[150px] bg-cover object-cover w-full"
                  />
                </figure>
                <div className="p-2">
                  <h2 className="card-title text-slate-300">Name: {item.title}</h2>
                  <p className="font-semibold text-slate-300">
                    Description : 
                    <span className="text-slate-300"> {item.description}</span>
                  </p>
                  <p className="font-semibold text-slate-300">
                    Price: <span className="text-[#f47e44]"> $ {item.price}</span>
                  </p>
                  <p className="font-semibold text-slate-300">
                    Category :
                    <span className="text-slate-300"> {item.category}</span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to={`/meals/${item._id}`}>
                      <button className="btn bg-[#FFD709] text-[#007bff]">See Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default AllMeal;
