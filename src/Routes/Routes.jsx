import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Error from "../Components/Error/Error";
import MyQueries from "../Components/MyQueries/MyQueries";
import AddQueries from "../Components/AddQueries/AddQueries";
import Queries from "../Components/Queries/Queries";
import RecomendationForMe from "../Components/RecomendationForMe/RecomendationForMe";
import MyRecomendation from "../Components/MyRecomendation/MyRecomendation";
import Update from "../Components/Update/Update";
import Details from "../Components/Details/Details";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
          path: '/myQueries',
          element:<PrivateRoute><MyQueries></MyQueries></PrivateRoute>
        },
        {
          path: '/addQueries',
          element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>
        },
        {
          path:'/queries',
          element: <PrivateRoute><Queries></Queries></PrivateRoute>
        },
        {
          path:'/RecomendationForMe',
          element:<PrivateRoute> <RecomendationForMe></RecomendationForMe></PrivateRoute>
        },
        {
          path: '/MyRecomendation',
          element: <PrivateRoute><MyRecomendation></MyRecomendation></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <Update></Update>,
          loader: ({ params }) =>
            fetch(`${import.meta.env.VITE_API_URL}/query/${params.id}`),
          
        },
        {
          path: '/details/:id',
          element:<Details></Details>,
          loader: ({ params }) =>
            fetch(`${import.meta.env.VITE_API_URL}/query/${params.id}`)
        }
      ]
    },
  ]);

  export default router ;