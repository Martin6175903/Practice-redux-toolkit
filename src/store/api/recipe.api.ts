import {api} from "./api.ts";

export const recipeApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createRecipe: builder.mutation({
            query: (recipe) => ({
                body: recipe,
                url: "/",
                method: 'POST'
            })
        })
    })
})

export const { useCreateRecipeMutation } = recipeApi;