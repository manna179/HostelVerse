import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminDashboard from "../Dashboard/AdminDashboard";
import AddMeal from "../Pages/Dashboard/AddMeal";
import MealDetails from "../Pages/Home/Category/MealDetails";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:'meals/:id',
          element:<MealDetails></MealDetails>,
          loader:({params})=>fetch(`http://localhost:4000/meals/${params.id}`)
        }
       
      ]
    },
    {
      path:'/dashboard',
      element:<AdminDashboard></AdminDashboard>,
      children:[
        {
          path:'addMeal',
          element:<AddMeal></AddMeal>
        },
        
      ]
    }
  ]);
