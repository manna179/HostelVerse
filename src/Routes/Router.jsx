import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminDashboard from "../Dashboard/AdminDashboard";
import AddMeal from "../Pages/Dashboard/AddMeal";
import MealDetails from "../Pages/Home/Category/MealDetails";
import AllMeal from "../Pages/Home/Allmeal/Allmeal";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllUsers from "../Pages/AdminPage/AllUsers";

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
          path:'/allMeals',
          element:<AllMeal></AllMeal>
        },
        {
          path:'meals/:id',
          element:<PrivateRoute><MealDetails></MealDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:4000/meals/${params.id}`)
        }
       
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>,
      children:[
        {
          path:'addMeal',
          element:<AdminRoute><AddMeal></AddMeal></AdminRoute>
        },
        {
          path:'users',
          element:<AllUsers></AllUsers>
        }
        
      ]
    }
  ]);
