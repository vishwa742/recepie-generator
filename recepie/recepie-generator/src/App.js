import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import BaseIngredients from "./BaseIngredients";
import MainIngredients from "./MainIngredients";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const onAddIngredient = (data) => {
    // data.map((ingred) => {
    data.map((ingred) => {
      // data.map((ingred, i) => {
      // const newIngredients = {
      //   id: i,
      //   title: ingred,
      // };
      //const newIngredients = ingred;

      //console.log(newIngredients.title, newIngredients.id);
      //setIngredients([...ingredients, ingred]);
      setIngredients((ingredients) => [...ingredients, ingred]);
    });
    console.log("test", typeof ingredients);
  };

  // const getIngredients = (data) => {
  //   data.map((item, i) => {
  //     newIngredients.title = item;
  //     newIngredients.id = uuid();
  //   });
  //   // setIngredients((newIngredients) => [...newIngredients, ingredients]);
  //   setIngredients([newIngredients, ...ingredients]);
  // };

  const onDeleteIngredient = (idToDelete) => {
    setIngredients(
      ingredients.filter((ingredient) => ingredient.id !== idToDelete)
    );
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
