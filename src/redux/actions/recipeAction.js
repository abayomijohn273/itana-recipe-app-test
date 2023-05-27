import axios from "axios";
import { setError, setLoading, setRecipes } from "../slices/recipeSlice";
import { toast } from "react-hot-toast";

export const getRandomRecipesAction = () => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await axios.get("https://api.spoonacular.com/recipes/random", {
            params: {
                number: 20
            },
            headers: {
                "x-api-key": "b4f7f795243a46318135c76e23a4041d"
            }
        });
        const data = response.data?.recipes;
        dispatch(setRecipes(data));

    } catch (err) {
        const errMessage = err?.response?.data?.message || "Failed to load recipes!"
        toast.error(errMessage)
        dispatch(setError(errMessage));
    }
};