import {api} from "./api.ts";
import {IRecipeData} from "../../types/recipe.types.ts";

export const recipeApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createRecipe: builder.mutation<null, IRecipeData>({
            query: (recipe) => ({
                body: recipe,
                url: "/",
                method: 'POST'
            }),
            invalidatesTags: () => [{
                type: "Recipe"
            }]
        })
    })
})

export const { useCreateRecipeMutation } = recipeApi;