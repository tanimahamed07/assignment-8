import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import App from "../App";
import Apps from "../pages/Apps";
import ErrorPage from "../pages/ErrorPage";


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
            }
        ]
    },
]);

export default router