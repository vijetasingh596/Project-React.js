import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"
import Home from "../pages/Home"
import UserDashBoard from "../pages/UserDashBoard"


export let myRoutes = createBrowserRouter( [
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<LoginPage/>
            },
            {
                path:"/signup",
                element:<SignupPage/>
            },
            {
                path:"/userdashboard/:id",
                element:<UserDashBoard/>
            }
        ]
    }
] )