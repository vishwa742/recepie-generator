import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import BaseIngredients from "./BaseIngredients";
import MainIngredients from "./MainIngredients";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const onAddIngredient = () => {
    setIngredients(["Random Ingredient", ...ingredients]);
  };

  const getIngredients = (data) => {
    data.map((item, i) => {
      setIngredients((ingredients) => [...ingredients, data[i]]);
    });
  };

  const onDeleteIngredient = (idToDelete) => {
    setIngredients(
      ingredients.filter((ingredient) => ingredient !== idToDelete)
    );
  };

  return (
    <div className="App">
      <BaseIngredients
        ingredients={ingredients}
        onAddIngredient={onAddIngredient}
        onDeleteIngredient={onDeleteIngredient}
      />
      <MainIngredients getIngredients={getIngredients} />
    </div>
  );
}

export default App;
