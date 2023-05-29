import axios from "axios";
import { setLoading, setRecipe, setRecipeLoading, setRecipes } from "../slices/recipeSlice";
import { errorHandler } from "../../utils/errorHandler";

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

export const getRandomRecipesAction = (params) => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await axios.get(API_URL + "/random", {
            params: {
                ...params,
                number: 15
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
                number: 15,
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

export const getRecipeInformationAction = (id) => async (dispatch) => {
    dispatch(setRecipeLoading(true));

    try {
        const response = await axios.get(API_URL + `/${id}/information`, {
            headers: {
                "x-api-key": API_KEY
            }
        });
        const data = response.data;
        dispatch(setRecipe(data));

    } catch (err) {
        errorHandler(dispatch, err);
    }
};