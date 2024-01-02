const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToLs = (cart) => {
  const CartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", CartStringified);
};

const addToLs = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  // save cart to local storage
  saveCartToLs(cart);
};

const removeFromLs = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLs(remaining);
};

export { addToLs, getStoredCart, removeFromLs };
