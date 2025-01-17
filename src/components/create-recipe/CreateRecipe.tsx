import {FormEvent, useState} from "react";
import {useCreateRecipeMutation} from "../../store/api/recipe.api.ts";
import {IRecipeData} from "../../types/recipe.types.ts";

const defaultValue: IRecipeData = {
    name: '',
    image: ''
}

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState<IRecipeData>(defaultValue);

    const [createRecipe] = useCreateRecipeMutation();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createRecipe(recipe).then(() => {
            setRecipe(defaultValue)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-black max-w-screen-sm w-full mx-auto items-center">
                <h3 className="text-white">Create Form Recipe</h3>
                <label className={"w-1/2"}>
                    <input className="w-full px-3 py-2.5 rounded border-2 border-solid border-gray-300" type="text" placeholder="Name Recipe..." value={recipe.name}
                           onChange={(e) => setRecipe({...recipe, name: e.target.value})}/>
                </label>
                <label className={"w-1/2"}>
                    <input className="w-full px-3 py-2.5 rounded border-2 border-solid border-gray-300" type="text" placeholder="Image Recipe..." value={recipe.image}
                           onChange={(e) => setRecipe({...recipe, image: e.target.value})}/>
                </label>
                <button className="w-1/2" type={"submit"}>Create new Recipe</button>
            </form>
        </div>
    );
};

export default CreateRecipe;