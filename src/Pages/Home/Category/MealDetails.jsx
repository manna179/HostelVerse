import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMeals from "../../../Hooks/useMeals";
import { useForm } from "react-hook-form";
import useReview from "../../../Hooks/useReview";
import { BiSolidLike } from "react-icons/bi";
// import { useState } from "react";

const MealDetails = () => {
  const { data, isLoading } = useReview();
  console.log(data);
  const [, , refetch] = useMeals();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

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

  if (isLoading) {
    <span className="loading loading-bars loading-lg"></span>;
  }
  // const { data } = useGetSingleReview(_id);
  // console.log(data);
  // likes
  //  const handleLike = async () => {
  //   if(isLiked){
  //     return;
  //   }
  //   if (!user || !user.email) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "You need to log in to like this meal!",
  //     });
  //     return;
  //   }

  //   try {
  //     const response = await axiosSecure.post(`/meals/${meal._id}/like`, {
  //       email: user.email,
  //     });

  //     if (response.data.success) {
  //       setCurrentLikes((prev) => prev + 1); // Increment like count locally
  //       setIsLiked(true); // Disable the button
  //       Swal.fire({
  //         icon: "success",
  //         title: "Liked!",
  //         text: "You have liked this meal.",
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error liking meal:", error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error",
  //       text: error.response?.data?.error || "Failed to like the meal.",
  //     });
  //   } }

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

      <div className="hero-content flex-col items-center lg:flex-row">
        <img
          src={image}
          className="h-[320px] object-cover bg-cover rounded-lg shadow-2xl"
        />
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

           {
              status === "upcoming" && user?.badge==="gold" ? <><button className="btn btn-xs bg-[#FFD709]"><BiSolidLike className="text-lg text-yellow-400"/></button>
              </>:<>
              <button disabled className="btn px-2 bg-[#FFD709]"><BiSolidLike className="text-lg  "/></button>
              </>
             }
          <div className="flex gap-4 w-full">
            {/* <button
              className={`btn bg-[#FFD709] ${isLiked ? "btn-disabled" : ""}`}
              onClick={handleLike}
              disabled={isLiked}
            >
              <FaThumbsUp /> {currentLikes}
            </button> */}

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
