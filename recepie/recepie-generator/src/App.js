import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import BaseIngredients from "./BaseIngredients";
import MainIngredients from "./MainIngredients";
const newIngredients = [];

function App() {
  const [ingredients, setIngredients] = useState([]);
  const onAddIngredient = () => {
    // setIngredients([newIngredients, ...ingredients]);
    console.log(ingredients);
  };

  const getIngredients = (data) => {
    data.map((indrec) => {
      setIngredients([...ingredients, "indrec"]);
      console.log(ingredients);
      //newIngredients.push(indrec);
    });

    // console.log("Reee", data);
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
