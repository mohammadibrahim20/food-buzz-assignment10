import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import ErrorELement from "../../pages/Error/ErrorELement";
import Chef from "../../pages/home/products/Chef";
import ChefDetails from "../../pages/home/products/ChefDetails";
import Login from "../../pages/login/Login";
import Registration from "../../pages/login/Registration";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorELement/>,
    children: [
      {
        path: "/",
        element: <Navigate to="/chef"></Navigate>

      },
      {
        path:"login",
        element: <Login></Login>
      },
     
      {
        path:"register",
        element: <Registration></Registration>
      }
     
    ],
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "chef",
        element: <Chef></Chef>,
        loader: () => fetch("https://food-buzz-server.vercel.app/"),
      },
      {
        path: "chef/:id",
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://food-buzz-server.vercel.app/chef/${params.id}`)
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      }
      
    ],
  },
]);

export default router;
