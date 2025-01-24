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
        setMeals(data);
        setFilteredMeals(data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };
    fetchMeals();
  }, []);

  const applyFilters = () => {
    let filteredData = meals;

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
      <div className="my-4">
        <h3 className="text-center text-3xl font-bold text-blue-600">
          All the meals you want!
        </h3>
      </div>

      <div className="mb-4 flex flex-col md:flex-row items-center gap-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">All Categories</option>
          <option value="lunch">Lunch</option>
          <option value="breakfast">Breakfast</option>
          <option value="dinner">Dinner</option>
        </select>

        <div className="flex gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min Price"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max Price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        {/* Filter Button */}
        <button onClick={applyFilters} className="btn bg-[#ffd709]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {filteredMeals.slice(0, page * 10).map((item) => (
            <div key={item._id}>
              <div className="bg-base-100 w-full shadow-xl">
                <figure className="px-4 pt-4">
                  <img
                    src={item.image}
                    alt="Meal"
                    className="rounded-xl h-[250px] bg-cover object-cover w-full"
                  />
                </figure>
                <div className="p-4">
                  <h2 className="card-title">Name: {item.title}</h2>
                  <p className="font-semibold">
                    Description:{" "}
                    <span className="text-slate-500">{item.description}</span>
                  </p>
                  <p className="font-semibold">
                    Price: <span className="text-slate-500">{item.price}</span>
                  </p>
                  <p className="font-semibold">
                    Category:{" "}
                    <span className="text-slate-500">{item.category}</span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to={`/meals/${item._id}`}>
                      <button className="btn bg-[#FFD709]">See Details</button>
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
