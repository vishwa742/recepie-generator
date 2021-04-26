import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import BaseIngredients from "./BaseIngredients";
import MainIngredients from "./MainIngredients";
function App() {
  const [ingredients, setIngredients] = useState([
    { id: uuid(), title: "Salt" },
    { id: uuid(), title: "Pepper" },
    { id: uuid(), title: "Oil" },
    { id: uuid(), title: "Bread" },
  ]);
  const onAddIngredient = () => {
    console.log(ingredients);
    const newIngredients = {
      id: uuid(),
      title: "Random Ingredient",
    };
    setIngredients([newIngredients, ...ingredients]);
  };
  return (
    <div className="App">
      <BaseIngredients
        ingredients={ingredients}
        onAddIngredient={onAddIngredient}
      />
      <MainIngredients />
    </div>
  );
}

export default App;
