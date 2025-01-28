import useMeals from "../../Hooks/useMeals";


const AllMealsAdmin = () => {
    const [meals]=useMeals()
    console.log(meals);
    return (
        <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th className="text-lg">Meal Name</th>
                      <th className="text-lg">Category</th>
                      <th className="text-lg">Likes</th>
                      <th className="text-lg">Price</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                 
                      { meals.map(item => <tr key={item._id}> 
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.like}</td>
                        <td>{item.price}</td>
                        
                       </tr>)
                      
                 }
                    
                  </tbody>
                </table>
              </div>
    );
};

export default AllMealsAdmin;