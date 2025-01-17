import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const meal = useLoaderData();
  console.log(meal);
  const {
    title,
    image,
    price,
    ingredients,
    like,
    postTime,
    rating,
    description,
    reviews,
  } = meal;

  return (
    <div className=" bg-base-200 min-h-screen w-11/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="flex flex-col space-y-2">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="">Description:  {description}</p>
          <p className="">Ingredients: {ingredients}</p>
          <p className="">Post Time: {postTime}</p>
          <p className=""> Rating: {rating}</p>
        <div className="flex gap-4 w-full">
        <button className="btn  bg-[#007BFF]"><FaThumbsUp /> {like}</button>
        <button className="btn  bg-[#007BFF]">Request</button>
        </div>

          <div className="flex items-center gap-2">
            <textarea className="w-full " placeholder="add review" defaultValue={reviews}></textarea>
            <button className="btn bg-[#007BFF]">post review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
