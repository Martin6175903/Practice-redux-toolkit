export interface IRecipe {
    name: string
    id: number
    image: string
}

export type IRecipeData = Omit<IRecipe, 'id'>