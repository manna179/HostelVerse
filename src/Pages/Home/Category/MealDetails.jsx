import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMeals from "../../../Hooks/useMeals";

const MealDetails = () => {
  const [,,refetch]=useMeals()
  const axiosSecure = useAxiosSecure()
  const {user}=useAuth()
  // const location = useLocation()
  const navigate = useNavigate()
  const meal = useLoaderData();
  console.log(meal);
  const {
    _id,
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


  const handleAddRequest=()=>{
    if(user&&user?.email){
      const mealItem={
        mealId:_id,
        email:user?.email,
        title:title,
        like:like,
        rating:rating,
        reviews:reviews,
        status:"requested"
      }
axiosSecure.post('/mealCart',mealItem)
.then(res=>{
  console.log(res.data);
  if(res.data.insertedId){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title:`${title} added to your Meal`,
      showConfirmButton: false,
      timer: 1500
    });
  }
refetch()
navigate('/allMeals')

})


    }

  }

  return (
    <div className="  min-h-screen w-11/12 mx-auto">
      <h2 className="text-4xl text-center underline mb-4 mt-2 font-bold">
        Food Details
      </h2>

      <div className="hero-content flex-col items-center lg:flex-row">
        <img
          src={image}
          className="h-[320px] object-cover bg-cover rounded-lg shadow-2xl"
        />
        <div className="flex flex-col space-y-2">
          <h1 className="text-4xl font-bold">{title}</h1>
          <h3 className="font-semibold">
            Distributor Name :{" "}
            <span className="text-slate-500">{distributorName}</span>
          </h3>
          <p className="font-semibold ">
            Description: <span className="text-slate-500">{description}</span>
          </p>
          <p className="font-semibold ">
            Ingredients: <span className="text-slate-500">{ingredients}</span>
          </p>
          <p className="font-semibold ">
            Post Time: <span className="text-slate-500">{postTime}</span>
          </p>
          <p className="font-semibold ">
            {" "}
            Rating: <span className="text-slate-500">{rating} </span>
          </p>
          <div className="flex gap-4 w-full">
            <button className="btn bg-[#FFD709] ">
              <FaThumbsUp /> {like}
            </button>
            <button onClick={handleAddRequest} className="btn  bg-[#FFD709]">Request</button>
          </div>

          <div className="flex items-center gap-2">
            <textarea
              className="w-full border "
              placeholder="add review"
              defaultValue={reviews}
            ></textarea>
            <button className="btn bg-[#FFD709]">post review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
