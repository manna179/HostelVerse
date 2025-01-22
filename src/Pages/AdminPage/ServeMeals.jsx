import { useGetAllCartMeal, useSingleMealUpdate } from "../../Hooks/mealCart";
import useMeals from "../../Hooks/useMeals";

const ServeMeals = () => {
  const [meals, loading, refetch] = useMeals();
  const { data } = useGetAllCartMeal();
  console.log(data);
  const { mutate } = useSingleMealUpdate();

  //   console.log(users);

  const handleChangeMealCart = (id) => {
    const payload = {
      id,
      data: {
        status: "delivered",
      },
    };
    mutate(payload, {
      onSuccess: (data) => {
        console.log(data);
        refetch();
      },
    });
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
              <th>Subscription </th>
              <th>Serve Meal</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data &&
              data.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      {item.title}

                      <div>
                        <div className="font-bold"></div>
                        <div className="text-sm opacity-50"></div>
                      </div>
                    </div>
                  </td>
                  <td>{item.email}</td>
                  {item.status === "delivered" ? (
                    <td className="text-red-500">{item.status}</td>
                  ) : (
                    <td className="text-green-500">{item.status}</td>
                  )}
                  <th>
                    {/* <button onClick={()=>handleChangeRole(user.email)} className=" btn "> <FaEdit></FaEdit></button> */}
                    <button
                      onClick={() => handleChangeMealCart(item._id)}
                      className="btn btn-link text-red-500"
                    >
                      Serve
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ServeMeals;
