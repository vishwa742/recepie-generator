import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import BaseIngredients from "./BaseIngredients";
import MainIngredients from "./MainIngredients";
import ShowRecepies from "./ShowRecepies";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [recepie, setRecepie] = useState([]);

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

  const getRecepies = () => {
    const items = ingredients.toString();
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=4b4353c06ae445229cad091a7b2abf34&ingredients=` +
        items +
        `&number=14&ranking=2`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecepie(data);
      });
  };

  return (
    <div className="App">
      <BaseIngredients
        ingredients={ingredients}
        onAddIngredient={onAddIngredient}
        onDeleteIngredient={onDeleteIngredient}
        getRecepies={getRecepies}
      />
      {recepie.length < 1 ? (
        <MainIngredients onAddIngredient={onAddIngredient} />
      ) : (
        <ShowRecepies />
      )}
    </div>
  );
}

export default App;
