// frontend/src/utils/storage.js
export const getStoredCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  export const storeCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const clearStoredCart = () => {
    localStorage.removeItem('cart');
  };