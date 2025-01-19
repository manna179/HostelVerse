import React, { useEffect } from "react";
import { useGetSingleMeal, useMealUpdate } from "../../Hooks/meal";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";

const UpdateModal = ({ id }) => {
  const { register, handleSubmit, reset } = useForm();
  const { data } = useGetSingleMeal(id);
  const { mutate } = useMealUpdate();

  const handleUpdateMeal = (data) => {
    // const payload = {
    //     id,
    //     data
    // }
    mutate(
      {
        data,
        id,
      },
      {
        onSuccess: () => {
          document.getElementById("my_modal_1").showModal;
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
      <button
        className=""
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
       <FaEdit className="text-red-400 text-xl"></FaEdit>
      </button>
      <dialog id="my_modal_1" className="modal">
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
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateModal;
