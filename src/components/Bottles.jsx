import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import "./Bottles.css";
import { addToLs, getStoredCart, removeFromLs } from "../utilitis/localstorage";
import Cart from "./Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLs(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    const remainCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainCart);
    removeFromLs(id);
  };

  // load cart from local storage
  useEffect(() => {
    const storedCratId = getStoredCart();
    if (bottles.length > 0) {
      const savedCart = [];
      for (const id of storedCratId) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles]);

  return (
    <>
      <h2> Bottles Available: {bottles.length} </h2>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
