import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMeals from "../../../Hooks/useMeals";
import { useForm } from "react-hook-form";
import useReview from "../../../Hooks/useReview";
import { BiSolidLike } from "react-icons/bi";
import { useState } from "react";

// import { useState } from "react";

const MealDetails = () => {
  const { data, isLoading } = useReview();
  console.log(data);
  const [, , refetch] = useMeals();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user.displayName);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  // const location = useLocation()
  const navigate = useNavigate();
  const meal = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  //       const [isLiked, setIsLiked] = useState(false);
  // const [currentLikes, setCurrentLikes] = useState(meal.like);

  const {
    _id,
    title,
    image,
    distributorName,
    ingredients,
    like,
    postTime,
    rating,
    status,
    description,
    reviews,
  } = meal;
  console.log(meal);

  if (isLoading) {
    <span className="loading loading-bars loading-lg"></span>;
  }


  const handleAddRequest = () => {
    if (user && user?.email) {
      const mealItem = {
        mealId: _id,
        email: user?.email,
        badge: user?.badge,
        title: title,
        like: like,
        rating: rating,
        reviews: reviews,
        status: "pending",

      };
      axiosSecure.post("/mealCart", mealItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${title} added to your Meal`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
        navigate("/allMeals");
      });
    }
  };

  //  like buttons
  const handleLike = (id) => {
    setLiked(!liked);
    setLikes(liked? likes - 1 : likes + 1);
    axiosSecure
     .put(`/meal/${_id}/like`, { like: liked? likes - 1 : likes + 1 })
     .then((res) => {
        console.log(res.data);
      })
     .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onsubmit = async (data) => {
    if (user && user?.email) {
      const reviewItem = {
        mealId: _id,

        email: user?.email,
        title: title,
        like: like,
        rating: rating,
        review: data.review,
      };
      axiosSecure
        .post("/reviews", reviewItem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your review has been posted!",
              showConfirmButton: false,
              timer: 1500,
            });
            reset();
          }
        })
        .catch((error) => {
          console.error("Error posting review:", error);
        });
    }
  };

  // review

  return (
    <div className="  min-h-screen w-11/12 mx-auto">
      <h2 className="text-4xl text-center underline mb-4 mt-2 font-bold">
        Food Details
      </h2>

      <div  className="hero-content  flex-col items-center lg:flex-row">
        <div>
        <img
          src={image}
          className="h-[320px]  object-cover bg-cover rounded-lg shadow-2xl"
        />
        
        </div>
        
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{title}</h1>
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
          {/* {
             user?.displayName && status === "upcoming"  &&  <button className="bg-transparent btn-xs text-2xl"><BiSolidLike className="text-2xl text-black"/></button>
             
             } */}
              <button 
      onClick={()=>handleLike(_id)} 
      className={`px-4 py-2 rounded-lg ${liked ? "bg-blue-500 text-white" : "bg-gray-200"}`}
    >
      {liked ? "❤️ Liked" : "🤍 Like"} ({likes})
    </button>
          
          <div className="flex gap-4 w-full">

            {status === "current" && (
              <button onClick={handleAddRequest} className="btn  bg-[#FFD709]">
                Request
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto my-6">
        {status === "current" && (
          <h2 className="text-xl font-semibold  mb-3">
            Reviews : {data?.length}
          </h2>
        )}
        {status === "current" && (
          <form
            onSubmit={handleSubmit(onsubmit)}
            className="flex items-center gap-2"
          >
            <textarea
              {...register("review", { required: true })}
              className="w-full border rounded-lg text-center "
              placeholder="Add review"
              name="review"
            ></textarea>
            <button type="submit" className="btn bg-[#FFD709]">
              post review
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MealDetails;
