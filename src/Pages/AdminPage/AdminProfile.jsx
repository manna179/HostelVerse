import useAuth from "../../Hooks/useAuth";
import useMeals from "../../Hooks/useMeals";


const AdminProfile = () => {
    const [meals]=useMeals()
    const {user}= useAuth()
  
    return (
      <div className="flex justify-center items-center min-h-screen">
          <div className="card w-full h-[400px] lg:card-side bg-base-200 shadow-2xl ">
        <figure className="w-full">
          <img className="h-[200px] w-[200px] rounded-full"
            src={user.photoURL}
            alt="Album" />
        </figure>
        <div className=" flex flex-col justify-center items-center space-y-3 w-full">
          <h2 className="card-title">NAME: <span className="text-orange-500"> {user?.displayName}</span></h2>
          <p className="text-lg font-semibold ">EMAIL: <span className="text-orange-500"> {user.email}</span></p>
          <p className="text-lg font-semibold ">Total Meals: <span className="text-orange-500">({meals.length})</span></p>
        </div>
      </div>
      </div>
    );
};

export default AdminProfile;