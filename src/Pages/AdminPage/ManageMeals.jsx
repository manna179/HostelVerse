import { FaEdit, FaUpload } from "react-icons/fa";
import useMeals from "../../Hooks/useMeals";
import { FaDeleteLeft } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageMeals = () => {
  const [meals] = useMeals();
  console.log(meals);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Name</th>
              <th>Rating</th>
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
                  <p>{meal.title}</p>
                </th>
                <td>{meal.distributorName}</td>
                <td>{meal.rating}</td>
               <td></td>
                <td>{meal.like}</td>
                <td>
                  {" "}
                  <button className="flex justify-center items-center">
                    <FaEdit className="text-lg text-orange-500"></FaEdit>
                  </button>
                </td>
                <td>
                  <button className="">
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
