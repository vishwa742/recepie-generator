function BaseIngredients({ ingredients, onAddIngredient }) {
  return (
    <>
      <div className="sidebar">
        <div className="app-sidebar-header">
          <h1>Base Ingredients</h1>
          <button onClick={onAddIngredient}>Add</button>
        </div>
        <div className="app-sidebar-ing">
          {ingredients.map((ingredient) => (
            <div className="app-sidebar-items">
              <div className="sidebar-note-title">
                <strong>{ingredient}</strong>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default BaseIngredients;
