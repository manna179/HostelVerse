import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const meal = useLoaderData();
  console.log(meal);
  const {
    title,
    image,
    
distributorName,
    ingredients,
    like,
    postTime,
    rating,
    description,
    reviews,
  } = meal;

  return (
    <div className="  min-h-screen w-11/12 mx-auto">
<h2 className="text-4xl text-center underline mb-4 mt-2 font-bold">Food Details</h2>

      <div className="hero-content flex-col items-center lg:flex-row">
        <img src={image} className="h-[320px] object-cover bg-cover rounded-lg shadow-2xl" />
        <div className="flex flex-col space-y-2">
          <h1 className="text-4xl font-bold">{title}</h1>
          <h3 className="font-semibold">Distributor Name : <span className="text-slate-500">{distributorName}</span></h3>
          <p className="font-semibold ">Description:  <span className="text-slate-500">{description}</span></p>
          <p className="font-semibold ">Ingredients: <span className="text-slate-500">{ingredients}</span></p>
          <p className="font-semibold ">Post Time: <span className="text-slate-500">{postTime}</span></p>
          <p className="font-semibold "> Rating: <span className="text-slate-500">{rating} </span></p>
        <div className="flex gap-4 w-full">
        <button className="btn bg-[#FFD709] "><FaThumbsUp /> {like}</button>
        <button className="btn  bg-[#FFD709]">Request</button>
        </div>

          <div className="flex items-center gap-2">
            <textarea className="w-full border " placeholder="add review" defaultValue={reviews}></textarea>
            <button className="btn bg-[#FFD709]">post review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
