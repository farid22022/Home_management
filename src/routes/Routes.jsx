import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import CityHomes from "../Pages/CityHomes/CityHomes";
import CityHomeCard from "../Pages/CityHomeCard/CityHomeCard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('/home.json')
            },

            {
                path: '/cityhome',
                element: <CityHomes></CityHomes>,
                loader: ()=> fetch('/cityHome.json')
            },
            {
                path: "/cityhomecard/:townhouse_id",
                element: <CityHomeCard></CityHomeCard>,
                loader: ()=> fetch('/cityHome.json')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/updateprofile",
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    }
]);

export default router;