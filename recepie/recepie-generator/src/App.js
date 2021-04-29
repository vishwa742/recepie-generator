import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import BaseIngredients from "./BaseIngredients";
import MainIngredients from "./MainIngredients";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const onAddIngredient = () => {
    setIngredients(["Random Ingredient", ...ingredients]);
    console.log(ingredients);
  };

  const getIngredients = (data) => {
    data.map((item, i) => {
      console.log(item);
      setIngredients((ingredients) => [...ingredients, data[i]]);
    });
  };
  return (
    <div className="App">
      <BaseIngredients
        ingredients={ingredients}
        onAddIngredient={onAddIngredient}
      />
      <MainIngredients getIngredients={getIngredients} />
    </div>
  );
}

export default App;
