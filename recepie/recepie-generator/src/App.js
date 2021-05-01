import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import BaseIngredients from "./BaseIngredients";
import MainIngredients from "./MainIngredients";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const onAddIngredient = (data) => {
    data.map((ingred) => {
      setIngredients((ingredients) => [...ingredients, ingred]);
    });
    console.log("test", typeof ingredients);
  };

  const onDeleteIngredient = (idToDelete) => {
    const index = ingredients.indexOf(idToDelete);
    setIngredients(ingredients.filter((ingredient, i) => i !== index));
  };

  return (
    <div className="App">
      <BaseIngredients
        ingredients={ingredients}
        onAddIngredient={onAddIngredient}
        onDeleteIngredient={onDeleteIngredient}
      />
      <MainIngredients onAddIngredient={onAddIngredient} />
    </div>
  );
}

export default App;
