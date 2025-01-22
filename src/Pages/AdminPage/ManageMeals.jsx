import { FaEdit, FaUpload } from "react-icons/fa";
import useMeals from "../../Hooks/useMeals";

import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useMealUpdate } from "../../Hooks/meal";
import UpdateModal from "./UpdateModal";
import { useState } from "react";

const ManageMeals = () => {
  const [userId,setUserId]=useState(null)

  // const { mutate } = useMealUpdate();
  const axiosSecure = useAxiosSecure();
  const [meals, , refetch] = useMeals();
  console.log(meals);

  const handleDeleteMeal = async (id) => {
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
        const res = await axiosSecure.delete(`/meals/${id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
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
{
  userId && <UpdateModal refetch={refetch} id={userId} setUserId={setUserId}></UpdateModal>
}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Review Count</th>
              <th>Likes</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {meals.map((meal) => (
              <tr key={meal._id}>
                <th>
                  <p>{meal?.title}</p>
                </th>
                <td>{meal?.distributorName}</td>
                <td>{meal?.rating}</td>
                <td>{meal?.reviewsCount}</td>
                <td>{meal?.like}</td>
                <td>
                  {" "}
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  {/* <UpdateModal id={meal._id} ></UpdateModal> */}
                    <button
                          className=""
                          onClick={() => setUserId(meal._id)}
                        >
                         <FaEdit className="text-red-400 text-xl"></FaEdit>
                        </button>
                  
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteMeal(meal._id)}
                    className=""
                  >
                    <RiDeleteBin6Line className="text-xl text-red-400" />
                  </button>
                </td>
                <td>
                  <button className="btn btn-link text-red-400">
                    view Meal
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

export default ManageMeals;
