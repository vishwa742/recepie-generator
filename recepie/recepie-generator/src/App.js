import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import BaseIngredients from "./BaseIngredients";
import MainIngredients from "./MainIngredients";
import ShowRecepies from "./ShowRecepies";
import bill1 from "./1.png";
import bill2 from "./2.png";
import bill3 from "./3.png";

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
      {ingredients.length > 0 ? (
        <BaseIngredients
          ingredients={ingredients}
          onAddIngredient={onAddIngredient}
          onDeleteIngredient={onDeleteIngredient}
          getRecepies={getRecepies}
        />
      ) : (
        <div
          className="side"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <h2>Dont have a bill? Click on of the below images to try</h2>
          <img src={bill1} width="420px" height="180px"></img>
          <img src={bill2} width="420px" height="180px"></img>
          <img src={bill3} width="420px" height="180px"></img>
        </div>
      )}
      {recepie.length < 1 ? (
        <MainIngredients onAddIngredient={onAddIngredient} />
      ) : (
        // <ShowRecepies recepie={recepie} />
        <div className="mainbar">
          <h1 style={{ textAlign: "center" }}>Your Recepies</h1>

          {recepie.map((indrec) => (
            <div className="recepie-list">
              <div className="recepie">
                <img src={indrec.image} />
                <div className="recepie-title">{indrec.title}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
