import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recipes: [],
  loading: false,
  error: null,
  recipe: {},
  recipeLoading: false
}

const recipesSlice = createSlice({
    name:'recipes',
    initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = [...state.recipes, ...action.payload];
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
            state.recipeLoading = false;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearRecipes: (state) => {
            state.recipes = [];
            state.loading = false;
            state.error = null;
        },

        setRecipe: (state, action) => {
            state.recipe = action.payload;
            state.recipeLoading = false;
            state.error = null;
        },
        setRecipeLoading: (state, action) => {
            state.recipeLoading = action.payload;
            state.error = null;
        },
    }
})

export const { setRecipes, setLoading, setError, clearError, clearRecipes, setRecipe, setRecipeLoading } = recipesSlice.actions;

export default recipesSlice.reducer;

export const selectRecipes = (state) => state.recipes.recipes;
export const selectRecipesLoading = (state) => state.recipes.loading;
export const selectRecipesError = (state) => state.recipes.error;

export const selectRecipe = (state) => state.recipes.recipe;
export const selectRecipeLoading = (state) => state.recipes.recipeLoading;
export const selectRecipeError = (state) => state.recipes.error;