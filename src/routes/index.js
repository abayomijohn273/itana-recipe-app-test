import { createBrowserRouter } from "react-router-dom";
import MainWrapper from "../components/layout/mainWrapper";
import Error404 from "../pages/error404";
import Home from "../pages/home";
import RecipeDetails from "../pages/recipeDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainWrapper />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: ":slug",
                element: <RecipeDetails />,
            },
        ]
    }
])

export default router;