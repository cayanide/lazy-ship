import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders data from API
    const fetchOrders = async () => {
      try {
        const response = await axios.get("your-api-url/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Dashboard - My Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Pickup: {order.pickupLocation} - Delivery: {order.deliveryLocation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
