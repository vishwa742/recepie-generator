import ImageLoader from "./ImageLoader";
function MainIngredients({ onAddIngredient }) {
  return (
    <>
      <div className="mainbar">
        <ImageLoader onAddIngredient={onAddIngredient} />
      </div>
    </>
  );
}
export default MainIngredients;
