import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions.ts";

interface IProps {
    recipe: {
        id: number
        name: string
    }
}

const RecipeItem = ({recipe}: IProps) => {
    const {favorites} = useSelector((state: {favorites: { id: number, name: string }[]}) => state);

    const { toggleFavorites } = useActions();

    const isExists = favorites.some(r => r.id === recipe.id);

    return (
        <div className="bg-[#363636] rounded m-2.5 p-2.5">
            {/*<img src="" alt=""/>*/}
            <h2 className="mb-1.5">{recipe.name}</h2>
            <button onClick={() => toggleFavorites(recipe)}>
                {isExists ? 'Remove from' : 'Add to'} favorites
            </button>
        </div>
    );
};

export default RecipeItem;