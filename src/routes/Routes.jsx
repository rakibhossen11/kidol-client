import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../authentication/SignIn";
import Login from "../authentication/Login";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import Blogs from "../pages/Blogs/Blogs";
import UpdateToys from "../pages/UpdateToys/UpdateToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import PrivateRoutes from "./PrivateRoutes";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/addToys',
          element: <AddToys></AddToys>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>
        },
        {
          path: '/myToys',
          element: <MyToys></MyToys>,
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/updateToys/:id',
          element: <UpdateToys></UpdateToys>,
          loader: ({params}) => fetch(`https://kidol-server.vercel.app/toys/${params.id}`)
        },
        {
          path: '/toyDetails/:id',
          element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`https://kidol-server.vercel.app/toys/${params.id}`)
        }
      ]
    },
  ]);

  export default router;