const Cart = ({ cart, handleRemoveFromCart }) => {
  console.log(cart);
  return (
    <div>
      <h4>Cart: {cart.length}</h4>
      <div>
        {cart.map((Bottle, index) => (
          <div key={index}>
            <img src={Bottle.image}></img>
            <button onClick={() => handleRemoveFromCart(Bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
