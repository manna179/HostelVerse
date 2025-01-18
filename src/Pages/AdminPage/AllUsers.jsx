import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useChangeRole } from "../../Hooks/user";


const AllUsers = () => {
    const {mutate} = useChangeRole()

  
    const axiosSecure = useAxiosSecure()
    const {data:users=[],isLoading ,refetch } = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
          const res=await axiosSecure.get('/users');
        console.log(res.data);
        return res.data
        }
        
      })
      console.log(users);


      const handleChangeRole = (email)=>{
        const payload = {
            email,
            data:{
                role:'admin'
            }
        }
        mutate(payload,{
            onSuccess:(data)=>{
                console.log(data);
               refetch()
            }
        })
    }

    return (
        <div>
            all users
{/* users */}
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Subscription </th>
        <th>Make Admin</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map(user=> <tr key={user._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                
                
                <div>
                  <div className="font-bold">{user.name}</div>
                  <div className="text-sm opacity-50">
                    {user.role}
                  </div>
                </div>
              </div>
            </td>
            <td>
             {user.email}
         
            
            </td>
            <td>{user.badge}</td>
            <th>
              <button onClick={()=>handleChangeRole(user.email)} className=" btn "> Request</button>
            </th>
          </tr>)
     }
     
    </tbody>
    {/* foot */}
   
  </table>
</div>


        </div>
    );
};

export default AllUsers;