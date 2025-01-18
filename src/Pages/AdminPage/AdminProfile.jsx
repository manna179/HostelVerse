import useAuth from "../../Hooks/useAuth";
import useMeals from "../../Hooks/useMeals";


const AdminProfile = () => {
    const [meals]=useMeals()
    const {user}= useAuth()
    console.log(user?.photoURL);
    return (
      <div className="flex justify-center items-center min-h-screen">
          <div className="card  lg:card-side bg-[#007BFF] text-white shadow-2xl ">
        <figure className="w-full">
          <img className="h-[200px] w-[200px] rounded-full"
            src={user.photoURL}
            alt="Album" />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title">NAME: <br /> {user?.displayName}</h2>
          <p>EMAIL: <br /> {user.email}</p>
          <p>Total Meals: {meals.length}</p>
        </div>
      </div>
      </div>
    );
};

export default AdminProfile;