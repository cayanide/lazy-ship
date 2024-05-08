import React, { useState } from "react";
import axios from "axios";

const OrderForm = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API call to submit order
      const response = await axios.post("your-api-url/orders", {
        pickupLocation,
        deliveryLocation,
      });
      console.log("Order placed successfully:", response.data);
      // Reset form
      setPickupLocation("");
      setDeliveryLocation("");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div>
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <label>Pickup Location:</label>
        <input
          type="text"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          required
        />
        <label>Delivery Location:</label>
        <input
          type="text"
          value={deliveryLocation}
          onChange={(e) => setDeliveryLocation(e.target.value)}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
