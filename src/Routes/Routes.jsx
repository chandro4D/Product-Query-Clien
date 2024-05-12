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
          element:<MyQueries></MyQueries>
        },
        {
          path: '/addQueries',
          element: <AddQueries></AddQueries>
        },
        {
          path:'/queries',
          element: <Queries></Queries>
        },
        {
          path:'/RecomendationForMe',
          element: <RecomendationForMe></RecomendationForMe>
        },
        {
          path: '/MyRecomendation',
          element: <MyRecomendation></MyRecomendation>
        }
      ]
    },
  ]);

  export default router ;