import RecipeItem from "./recipe-item/RecipeItem.tsx";
import Header from "./header/Header.tsx";

function App() {
  return (
    <>
        <Header/>
        <section>
            <RecipeItem recipe={{
                id: 1,
                name: "Лазанья"
            }}/>
            <RecipeItem recipe={{
                id: 2,
                name: "Каша"
            }}/>
            <RecipeItem recipe={{
                id: 3,
                name: "Паста"
            }}/>
        </section>
    </>
  )
}

export default App
