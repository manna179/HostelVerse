
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const UserProfile = () => {
   
    const axiosPublic = useAxiosPublic()
    const {user}=useAuth()


    const { data } = useQuery({
        queryKey: ["userProfile", user.email], 
        queryFn: async () => {
          const response = await axiosPublic.get(`/users/${user.email}`);
          return response.data;
        }
      });
    

    return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="card lg:card-side w-full h-[400px] bg-base-300 text-orange-500 shadow-2xl ">
        <figure className="w-full">
          <img className="h-[300px] w-[300px] rounded-full"
            src={user.photoURL}
            alt="Album" />
        </figure>
        <div className="card-body justify-center items-center w-full">
         <div className="space-y-2">
         <h2 className="card-title">NAME:  {user?.displayName}</h2>
          <p>EMAIL: {user.email}</p>
          <p>Badge : {data?.badge}</p>
         </div>
        </div>
      </div>
      </div>
    );
};

export default UserProfile;