// admin-dashboard/src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import StatCard from '../components/StatCard';
import { fetchDashboardStats } from '../utils/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    const getStats = async () => {
      try {
        const data = await fetchDashboardStats();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    getStats();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Orders"
          value={stats.totalOrders}
          icon="🛍️"
          change={5.2}
        />
        <StatCard
          title="Total Revenue"
          value={`Rs. ${stats.totalRevenue.toLocaleString()}`}
          icon="💰"
          change={3.8}
        />
        <StatCard
          title="Total Products"
          value={stats.totalProducts}
          icon="📦"
          change={-2.1}
        />
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon="👥"
          change={7.5}
        />
      </div>
    </div>
  );
};

export default Dashboard;