import axios from "axios";
import { setError, setLoading, setRecipes } from "../slices/recipeSlice";
import { toast } from "react-hot-toast";
import { errorHandler } from "../../utils/errorHandler";

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

export const getRandomRecipesAction = () => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await axios.get(API_URL + "/random", {
            params: {
                number: 20
            },
            headers: {
                "x-api-key": API_KEY
            }
        });
        const data = response.data?.recipes;
        dispatch(setRecipes(data));

    } catch (err) {
        errorHandler(dispatch, err);
    }
};

export const getRecipesByIngredientsAction = (params) => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await axios.get(API_URL + "/findByIngredients", {
            params: {
                ...params,
                number: 20,
                sort: "max-used-ingredients"
            },
            headers: {
                "x-api-key": API_KEY
            }
        });
        const data = response.data;
        dispatch(setRecipes(data));

    } catch (err) {
        errorHandler(dispatch, err);
    }
};