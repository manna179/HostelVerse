import React, { useEffect } from "react";
import { useGetSingleMeal, useMealUpdate } from "../../Hooks/meal";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { useGetSingleReview, useSingleReviewUpdate } from "../../Hooks/useReview";

const UpdateReview = ({ id ,setReviewId,refetch}) => {
 

  const { register, handleSubmit, reset } = useForm();
  const { data } = useGetSingleReview(id);
  const { mutate } = useSingleReviewUpdate();

  const handleUpdateReview = (data) => {
 
    mutate(
      {
        data,
        id,
      },
      
      {
        onSuccess: () => {
            setReviewId(null)
          refetch()
        },
      }
    );
  };
  console.log(data);

  useEffect(() => {
    if (data) {
      reset({
        review: data.review,
        
      });
    }
  }, [data, reset]);

  return (
    <>
     
      <dialog id="my_modal_1" className="modal opacity-100 pointer-events-auto">
        <div className="modal-box">
          <form onSubmit={handleSubmit(handleUpdateReview)}>
            {/* Ingredients Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <textarea
                {...register("review", { required: true })}
                placeholder="Update your review"
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
              <button onClick={()=>setReviewId(null)} className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateReview;
