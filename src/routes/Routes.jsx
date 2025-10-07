import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import App from "../App";
import Apps from "../pages/Apps";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: '/apps',
            element: <Apps/>
        }
    ]
  },
]);

export default router