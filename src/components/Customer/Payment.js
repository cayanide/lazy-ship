import React from "react";
import QRCode from "qrcode.react"; // Install 'qrcode.react' package for QR code generation

const Payment = ({ amount }) => {
  return (
    <div>
      <h2>Payment Details</h2>
      <p>Total Amount: ₹{amount}</p>
      <QRCode value={`your-payment-api-url?amount=${amount}`} />
    </div>
  );
};

export default Payment;
