import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import BaseIngredients from "./BaseIngredients";
import MainIngredients from "./MainIngredients";
function App() {
  const [ingredients, setIngredients] = useState([]);
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
