import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { id, name, image, price } = bottle;
  return (
    <div className="bottle">
      <h2>id: {id}</h2>
      <h1>Name: {name}</h1>
      <img src={image} alt="" />
      <p>Price: {price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
