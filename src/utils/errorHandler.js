import { toast } from "react-hot-toast";
import { setError } from "../redux/slices/recipeSlice";

export const errorHandler = (dispatch, err) => {
    const errMessage = err?.response?.data?.message || "Failed to load recipes!"
    toast.error(errMessage)
    dispatch(setError(errMessage));
}