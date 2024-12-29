// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold">සෝස ලංකා</Link>
          <div className="flex items-center space-x-4">
            <Link to="/shop" className="hover:text-gray-700">Shop</Link>
            <Link to="/cart" className="hover:text-gray-700">
              Cart ({cart.length})
            </Link>
            {user ? (
              <>
                <Link to="/profile" className="hover:text-gray-700">Profile</Link>
                <button
                  onClick={logout}
                  className="hover:text-gray-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="hover:text-gray-700">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;