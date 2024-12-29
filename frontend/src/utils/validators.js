// frontend/src/utils/validators.js
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 6;
  };
  
  export const validatePhoneNumber = (phone) => {
    const re = /^(?:7|0|(?:\+94))[0-9]{9,10}$/;
    return re.test(phone);
  };