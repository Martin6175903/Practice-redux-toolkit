import RecipeItem from "./recipe-item/RecipeItem.tsx";
import Header from "./header/Header.tsx";
import User from "./user/User.tsx";
import {useGetRecipesQuery} from "../store/api/api.ts";
import CreateRecipe from "./create-recipe/CreateRecipe.tsx";

function App() {
    const { isLoading, data } = useGetRecipesQuery();

    return (
    <>
        <Header/>
        {/*<User/>*/}
        <CreateRecipe/>
        <section>
            {isLoading ?
                (<h1>Loading...</h1>)
                : (data.map(recipe => (
                    <RecipeItem key={recipe.id} recipe={recipe}/>
                )))
            }
        </section>
    </>
  )
}

export default App
