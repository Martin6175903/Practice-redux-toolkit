import RecipeItem from "./recipe-item/RecipeItem.tsx";
import Header from "./header/Header.tsx";
import {useGetRecipesQuery} from "../store/api/api.ts";
import CreateRecipe from "./create-recipe/CreateRecipe.tsx";
import {useState} from "react";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [queryTerm,setQueryTerm] = useState('');

    const { isLoading, data } = useGetRecipesQuery(queryTerm);

    const handleSearch = () => {
        setQueryTerm(searchTerm)
    }

    return (
    <>
        <Header/>
        {/*<User/>*/}
        <CreateRecipe/>

        <div className={"p-2.5 text-black"}>
            <p className={"text-white"}>If you gonna find: </p>
            <input type="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder={"Enter search term"}/>
            <button onClick={handleSearch}>Search</button>
        </div>

        <section>
            {isLoading ?
                (<h1>Loading...</h1>)
                : (data?.map(recipe => (
                    <RecipeItem key={recipe.id} recipe={recipe}/>
                )))
            }
        </section>
    </>
  )
}

export default App
