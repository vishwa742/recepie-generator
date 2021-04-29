import ImageLoader from "./ImageLoader";
function MainIngredients({ getIngredients }) {
  return (
    <>
      <div className="mainbar">
        <ImageLoader getIngredients={getIngredients} />
      </div>
    </>
  );
}
export default MainIngredients;
