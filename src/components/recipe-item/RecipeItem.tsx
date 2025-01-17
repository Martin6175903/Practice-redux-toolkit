import {useActions} from "../../hooks/useActions.ts";
import {useFavorites} from "../../hooks/useFavorites.ts";
import {IRecipe} from "../../types/recipe.types.ts";

interface IRecipeItem {
    recipe: IRecipe
}

const RecipeItem = ({recipe}: IRecipeItem) => {
    const { favorites } = useFavorites();

    const { toggleFavorites } = useActions();

    const isExists = favorites.some(r => r.id === recipe.id);

    return (
        <div className="bg-[#363636] rounded m-2.5 p-2.5 flex gap-5 items-center">
            <img className={"rounded-2xl"} src={recipe.image} alt={recipe.name} width={150}/>
            <div>
                <h2 className="mb-1.5">{recipe.name}</h2>
                <button onClick={() => toggleFavorites(recipe)}>
                    {isExists ? 'Remove from' : 'Add to'} favorites
                </button>
            </div>
        </div>
    );
};

export default RecipeItem;