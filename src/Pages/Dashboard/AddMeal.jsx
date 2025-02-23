import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";





const image_hosting_key = import.meta.env.VITE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddMeal = () => {
  const {user}=useAuth()
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {

    const imageFile = {image:data.image[0]}
    console.log(imageFile);
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
      headers :{
        'content-type':'multipart/form-data'
      }
    })
    console.log(res.data);
    if(res.data.success){
      const mealData = {
        ...data,
        distributorName:user?.displayName,
        email:user.email,
        image:res.data.data.display_url,
        like:0,
        reviews: [],
        reviewsCount: 0,
        postTime: new Date().toLocaleString(),
      };
      const mealRes = await axiosSecure.post('/meals',mealData)
      console.log(mealRes.data);
      if(mealRes.data.insertedId){
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:`${data.title} added to menu in db`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="">
          <h2 className="text-2xl font-bold my-8 text-center">Add Meal</h2>
          <form
            onSubmit={handleSubmit(onsubmit)}
            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* Title Input */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Title"
                className="input input-bordered"
              />
              {errors.title && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* Category Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              
              <select className="input input-bordered" name="category" id="" defaultValue="selectCategory"   {...register("category", { required: true })}>
                <option value="selectCategory" disabled >Select Category</option>
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="dinner">dinner</option>
              </select>
              {errors.category && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            {/* status */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              
              <select className="input input-bordered" name="status" id="" defaultValue="selectStatus"   {...register("status", { required: true })}>
                <option value="selectStatus" disabled >Select Status</option>
                <option value="current">currentMeals</option>
                <option value="upcoming">upcoming</option>
                
              </select>
              {errors.status && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

           
           

            {/* Ingredients Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ingredients</span>
              </label>
              <textarea
                {...register("ingredients", { required: true })}
                placeholder="List of ingredients"
                className="input input-bordered"
              />
              {errors.ingredients && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* Description Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                {...register("description", { required: true })}
                placeholder="Description of the meal"
                className="input input-bordered"
              />
              {errors.description && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* Price Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price", { required: true, valueAsNumber: true })}
                type="number"
                step="0.01"
                placeholder="Price in USD"
                className="input input-bordered"
              />
              {errors.price && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>


            {/* Title Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                {...register("rating", { required: true, valueAsNumber: true, validate: {
                  maxValue: (value) =>
                    value <= 5 || "Rating cannot be greater than 5",
                }, })}
                type="number"
                placeholder="Rating"
                className="input input-bordered"
              />
              {errors.rating && (
                <span className="text-red-600">This field number is no longer than 5 </span>
              )}
            </div>

             {/* file */}
          <div className="form-control ">
          <label className="label">
                <span className="label-text">File</span>
              </label>
          <input {...register('image',{required:true})} type="file" className="file-input w-full max-w-xs bg-[#ffd709]" />
          </div>

            {/* Submit Button */}
            <div className="form-control ">
            <label className="label">
                <span className="label-text">Submit</span>
              </label>
              <button type="submit" className="btn bg-[#ffd709]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMeal;
