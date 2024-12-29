// admin-dashboard/src/components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/products', label: 'Products', icon: '📦' },
    { path: '/orders', label: 'Orders', icon: '🛍️' },
    { path: '/users', label: 'Users', icon: '👥' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <div className="text-2xl font-bold mb-8">සෝස ලංකා Admin</div>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block py-2 px-4 rounded mb-2 ${
              location.pathname === item.path
                ? 'bg-blue-600'
                : 'hover:bg-gray-700'
            }`}
          >
            {item.icon} {item.label}
          </Link>
        ))}
        <button
          onClick={logout}
          className="w-full text-left py-2 px-4 rounded mb-2 hover:bg-gray-700"
        >
          🚪 Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;