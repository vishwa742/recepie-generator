import React, { useState, useEffect } from "react";

function BaseIngredients({ ingredients, onAddIngredient, onDeleteIngredient }) {
  const [filtered, setFiltered] = useState([]);
  const arrayStore = [];
  var res = [];
  const removeWords = [
    "Product",
    "aty:",
    "Z Total:",
    "Summary item",
    "Sales",
    "item",
    "Subtotat",
    "Sales",
    "Tax",
    "Total:",
    "Order",
  ];

  useEffect(() => {
    console.log("test", removeWords);
    res = ingredients.filter((item) => !removeWords.includes(item));
  }, []);

  // setFiltered(filters);

  return (
    <>
      <div className="sidebar">
        <div className="app-sidebar-header">
          <h1>Ingredients</h1>
          <button onClick={onAddIngredient}>Add</button>
        </div>
        <div className="app-sidebar-ing">
          {ingredients.map((ingredient) => (
            <div className="app-sidebar-items">
              <div className="sidebar-note-title">
                <strong>{ingredient.title}</strong>
                <button onClick={() => onDeleteIngredient(ingredient.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default BaseIngredients;
