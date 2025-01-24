import Swal from "sweetalert2";
import { useGetAllCartMeal, } from "../../Hooks/mealCart";
import useReview from "../../Hooks/useReview";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";


const OrderedMeals = () => {
    const {user}=useAuth()
    const axiosSecure  = useAxiosSecure()
    const {data:review}= useReview()
    console.log('review',review);
    const{data,refetch:refetchMeal}=useGetAllCartMeal(user?.email)
    console.log(data);

     const handleDeleteRequestedMeal = async (id) => {
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
            const res = await axiosSecure.delete(`/mealCart/${id}`);
            // console.log(res.data);
            if (res.data.deletedCount > 0) {
              refetchMeal();
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
           <h3 className="text-3xl font-bold text-center my-4"> Requested Meals</h3>
{/* users */}
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Reviews Count</th>
        <th>Status </th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
        
      {/* row 1 */}
     {data &&  data.map(item=>  <tr  key={item._id}>
           
            <td>
             
               {item.title}
                
               
             
            </td>
            <td>
            {item.email}
        
            
            </td>
            <td>{item.price}</td>
            <td>{review?.length}</td>
            {item.status === "delivered"?<td className="text-green-500">{ item.status}</td>:<td className="text-red-500">{ item.status}</td>}
            <th>
            {item?.status==="delivered"?<> <button disabled className="btn bg-none btn-link text-green-500">Cancel</button></>:<>
                <button onClick={()=>handleDeleteRequestedMeal(item._id)}  className="btn btn-link text-red-500">Cancel</button>
            </>}
            </th>
          </tr>)}
      
     
     
    </tbody>
    {/* foot */}
   
  </table>
</div>


        </div>
    );
};

export default OrderedMeals;