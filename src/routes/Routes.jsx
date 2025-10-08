import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import App from "../App";
import Apps from "../pages/Apps";
import ErrorPage from "../pages/ErrorPage";
import AppsDetails from "../pages/AppsDetails";
import Installation from "../pages/Installation";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <p>Loading....</p>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/apps',
                element: <Apps />
            },
            {
                path: '/apps/:id',
                element: <AppsDetails />,
                
            },
            {
                path: '/installation',
                element: <Installation />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ],

    },
]);

export default router