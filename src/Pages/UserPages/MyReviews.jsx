import useAuth from "../../Hooks/useAuth";
import useReview from "../../Hooks/useReview";
import Swal from "sweetalert2";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import UpdateReview from "./UpdateReview";

const MyReviews = () => {
  const [reviewId, setReviewId] = useState(null);
  console.log(reviewId);
  const { user } = useAuth();
  console.log(user.email);
  const { data: myReview = [], refetch: refetchMyReview } = useReview(
    user.email
  );
  console.log(myReview);
  const handleDeleteMyReview = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/reviews/${id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetchMyReview();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });

    //
  };
  return (
    <div>
      {reviewId && (
        <UpdateReview
          refetch={refetchMyReview}
          id={reviewId}
          setReviewId={setReviewId}
        ></UpdateReview>
      )}
      <div>
        <h2 className="text-2xl font-bold text-center mt-4 mb-8">
          All Reviews here
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg">Meal Name</th>
              <th className="text-lg">Review</th>
              <th className="text-lg">likes</th>
              <th className="text-lg">Edit</th>
              <th className="text-lg">delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {myReview.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.review}</td>
                <td>{item.like}</td>
                <td>
                  <button onClick={() => setReviewId(item._id)}>
                    <FaEdit></FaEdit>
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeleteMyReview(item._id)}>
                    <RiDeleteBin6Line className="text-red-500 text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
