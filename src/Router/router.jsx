import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Errorpage from "../component/Errorpage/Errorpage";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import ProductDetails from "../component/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Errorpage/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
          path: '/card/:id',
          element: <ProductDetails/>,
          loader: ({params}) =>fetch(`https://fakestoreapi.com/products/${params.id}`)
        }
      ]
    },
  ]);

export default router;