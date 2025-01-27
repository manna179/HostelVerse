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
import ManageMeals from "../Pages/AdminPage/ManageMeals";
import AdminProfile from "../Pages/AdminPage/AdminProfile";
import UserProfile from "../Pages/UserPage/UserProfile/UserProfile";
import UpcomingMeals from "../Pages/Home/UpcomingMeals/UpcomingMeals";
import StatusRoute from "./StatusRoute";
import AllReview from "../Pages/AdminPage/AllReview";
import ServeMeals from "../Pages/AdminPage/ServeMeals";
import OrderedMeals from "../Pages/UserPages/OrderedMeals";
import MyReviews from "../Pages/UserPages/MyReviews";
import PaymentHistory from "../Pages/UserPage/UserProfile/PaymentHistory";
import UpcomingMealsAdmin from "../Pages/AdminPage/UpcomingMealsAdmin";

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
          path:'/upcomingMeals',
          element:<UpcomingMeals></UpcomingMeals>
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
          loader:({params})=>fetch(`https://server-hostel.vercel.app/meals/${params.id}`)
        }
       
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>,
      children:[
        {
          path:'adminProfile',
          element:<AdminRoute><AdminProfile></AdminProfile></AdminRoute>
        },
        {
          path:'addMeal',
          element:<AdminRoute><AddMeal></AddMeal></AdminRoute>
        },
        {
          path:'manageMeals',
          element:<AdminRoute><ManageMeals></ManageMeals></AdminRoute>
        },
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'allReviews',
          element:<AdminRoute><AllReview></AllReview></AdminRoute>
        },
        {
          path:'serveMeals',
          element:<AdminRoute><ServeMeals></ServeMeals></AdminRoute>
        },
        {
          path:'upcomingMealsAdmin',
          element:<UpcomingMealsAdmin></UpcomingMealsAdmin>
        },
        // user related
        {
          path:'userProfile',
          element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
          path:'orderedMeals',
          element:<PrivateRoute><OrderedMeals></OrderedMeals></PrivateRoute>
        },
        {
          path:'myReviews',
          element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
          path:'paymentHistory',
          element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        }
        
      ]
    }
  ]);
