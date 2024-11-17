import {createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import App from "./App";
import Car from "./Components/Car";
import HelloChaoXin from "./Components/Hellochaoxin";
import Register from "./Components/Register/Register";


export const router = createBrowserRouter([
    { 
        path: '/', 
        element: <App />,
        children: [
            {
                path: '/car',
                element: <Car />
            },{ 
                path: '/hellochaoxin',
                element: <HelloChaoXin />
            }
        ]
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
        path: '*',
        element: <div>Không tìm thấy</div>
    }
]);
