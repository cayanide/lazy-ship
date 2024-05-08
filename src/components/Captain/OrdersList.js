import React from "react";

const OrdersList = ({ orders }) => {
  return (
    <div>
      <h2>Orders List</h2>
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

export default OrdersList;
