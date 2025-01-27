import { Link } from "react-router-dom";
import useMeals from "../../Hooks/useMeals";
import { FaOldRepublic } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa";
import { useGetSingleMeal, useMealUpdate } from "../../Hooks/meal";



const UpcomingMealsAdmin = () => {
    const [meals]=useMeals()
    // const {data}=useGetSingleMeal()
    // const {mutate:upcomingMealData={}}=useMealUpdate()
    const upcoming = meals.filter(item=>item.status==="upcoming")

    // const handleUploadMeal=(id)=>{

    // }
    return (
       <div className="overflow-x-auto">
               <table className="table">
                 {/* head */}
                 <thead>
                   <tr>
                     <th className="text-lg">Meal Name</th>
                     <th className="text-lg">Category</th>
                     <th className="text-lg">Likes</th>
                     <th className="text-lg">Publish</th>
                   </tr>
                 </thead>
                 <tbody>
                   {/* row 1 */}
                
                     { upcoming.map(item => <tr key={item._id}> 
                       <td>{item.title}</td>
                       <td>{item.category}</td>
                       <td>{item.like}</td>
                       <td><FaUpload className="text-lg"></FaUpload></td>
                       {/* <td><button onClick={()=>handleDeleteReview(item._id)}><RiDeleteBin6Line className="text-red-500 text-lg"/></button></td> */}
                      </tr>)
                     
                }
                   
                 </tbody>
               </table>
             </div>
    );
};

export default UpcomingMealsAdmin;