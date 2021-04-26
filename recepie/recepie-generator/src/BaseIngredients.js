function BaseIngredients() {
  return (
    <>
      <div className="sidebar">
        <div className="app-sidebar-header">
          <h1>Base Ingredients</h1>
          <button>Add</button>
        </div>
        <div className="app-sidebar-ing">
          <div className="app-sidebar-items">
            <div className="sidebar-note-title">
              <strong>Cheese</strong>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BaseIngredients;
