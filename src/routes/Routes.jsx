import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import CityHomes from "../Pages/CityHomes/CityHomes";
import CityHomeCard from "../Pages/CityHomeCard/CityHomeCard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import SelectedHomeCard from "../Pages/SelectedHomeCard/SelectedHomeCard";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";




const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
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
                path: "/userprofile",
                element: <UserProfile></UserProfile>,
                loader: () => fetch('/home.json')
            },
            {
                path:"/updateprofile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path:"/selectedhomecard/:id",
                element:<SelectedHomeCard></SelectedHomeCard>,
                loader: () => fetch('/home.json')
            },
            // {
            //     path: "/leaf",
            //     element: <Leaf></Leaf>
            // }
        ]
    }
]);

export default router;