import { useState } from "react";
import { Link } from "react-router-dom";
import useMeals from "../../../Hooks/useMeals";
import { BiSearchAlt } from "react-icons/bi";

const AllMeal = () => {
  const [sort, setSort] = useState(false);
  const [search,setSearch]=useState("")
  console.log(sort);

  const [meals, loading] = useMeals(sort,search);
  console.log(meals);
  if (loading) {
    <span className="loading loading-bars loading-xl"></span>;
  }
  return (
    <div className="w-11/12 mx-auto">
      <div className="mt-4 mb-8">
        <h3 className="text-center text-3xl font-bold text-blue-400">
          All the meals you want!
        </h3>

        <div className="flex">
          <button
            className={`btn btn-neutral ${sort && "btn btn-success"}`}
            onClick={() => setSort(!sort)}
          >
            {sort ? "sorted by salary" : "not sorted"}
          </button>

          
        </div>
          <BiSearchAlt className="text-4xl"></BiSearchAlt>
        <div className="flex  ">
          <input 
          onChange={(e)=>setSearch(e.target.value)}
          name="search"
          className= "input w-full max-w-2xl border-2 "
          type="text"
          placeholder="search here"
           />
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {meals?.map((item) => (
          <div key={item._id} className="card bg-base-100 w-96 shadow-sm">
            <div key={item._id}>
              <div className="bg-base-100 w-full  shadow-xl">
                <figure className="px-4 pt-4">
                  <img
                    src={item?.image}
                    alt="Shoes"
                    className="rounded-xl h-[250px] bg-cover object-cover w-full"
                  />
                </figure>
                <div className="p-4 ">
                  <h2 className="card-title">Name: {item?.title}</h2>
                  <p className="font-semibold">
                    Description:{" "}
                    <span className="text-slate-500">{item?.description}</span>
                  </p>
                  <p className="font-semibold">
                    Ingredients:{" "}
                    <span className="text-slate-500">{item?.ingredients}</span>
                  </p>
                  <p className="font-semibold">
                    Post Time:{" "}
                    <span className="text-slate-500">{item?.postTime}</span>
                  </p>
                  <p className="font-semibold">
                    Rating:{" "}
                    <span className="text-slate-500">{item?.rating}</span>
                  </p>
                  <p className="font-semibold">
                    Price:{" "}
                    {console.log(typeof(item?.price))}
                    <span className="text-slate-500">{item?.price} $</span>
                  </p>

                  <div className="card-actions justify-end">
                    <Link to={`/meals/${item?._id}`}>
                      {" "}
                      <button className="btn bg-[#FFD709]">See Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMeal;
