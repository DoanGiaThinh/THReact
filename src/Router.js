import { createBrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Login/Login";
import App from "./App";
import Car from "./Components/Car";
import HelloChaoXin from "./Components/Hellochaoxin";
import Register from "./Components/Register/Register";
import Product from "./Components/Product/Product";
import Category from "./Components/Category/Category";
import DetailProduct from "./Components/Product/DetailProduct";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/car',
        element: <Car />
      },
      {
        path: '/hellochaoxin',
        element: <HelloChaoXin />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/listproduct',
        element: <Product />
      },
      {
        path: '/listcategories',
        element: <Category />
      }
      ,
      {
        path: '/detailproduct/:masp',
        element: <DetailProduct />
      }
    ]
  },
 
  {
    path: '*',
    element: <div>Không tìm thấy</div>
  }
]);
