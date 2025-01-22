import React, { useEffect } from "react";
import { useGetSingleMeal, useMealUpdate } from "../../Hooks/meal";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";

const UpdateModal = ({ id ,setUserId,refetch}) => {
 

  const { register, handleSubmit, reset } = useForm();
  const { data } = useGetSingleMeal(id);
  const { mutate } = useMealUpdate();

  const handleUpdateMeal = (data) => {
 
    mutate(
      {
        data,
        id,
      },
      
      {
        onSuccess: () => {
          setUserId(null)
          refetch()
        },
      }
    );
  };
  console.log(data);

  useEffect(() => {
    if (data) {
      reset({
        rating: data.rating,
        reviewsCount: data.reviewsCount,
        like: data.like,
      });
    }
  }, [data, reset]);

  return (
    <>
     
      <dialog id="my_modal_1" className="modal opacity-100 pointer-events-auto">
        <div className="modal-box">
          <form onSubmit={handleSubmit(handleUpdateMeal)}>
            {/* Ingredients Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">rating</span>
              </label>
              <textarea
                {...register("rating", { required: true })}
                placeholder="List of ingredients"
                className="textarea textarea-bordered"
              />
            </div>
            {/* Ingredients Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Review count</span>
              </label>
              <textarea
                {...register("reviewsCount", { required: true })}
                placeholder="List of ingredients"
                className="textarea textarea-bordered"
              />
            </div>
            {/* Ingredients Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">like</span>
              </label>
              <textarea
                {...register("like", { required: true })}
                placeholder="List of ingredients"
                className="textarea textarea-bordered"
              />
            </div>
            <button type="submit" className="btn btn-link modal-action">
              save details
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={()=>setUserId(null)} className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateModal;
