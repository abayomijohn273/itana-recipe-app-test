import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recipes: [],
  loading: false,
  error: null,
}

const recipesSlice = createSlice({
    name:'recipes',
    initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearError: (state) => {
            state.error = null;
        },
    }
})

export const { setRecipes, setLoading, setError, clearError } = recipesSlice.actions;

export default recipesSlice.reducer;

export const selectRecipes = (state) => state.recipes.recipes;
export const selectRecipesLoading = (state) => state.recipes.loading;
export const selectRecipesError = (state) => state.recipes.error;