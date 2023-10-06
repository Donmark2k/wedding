import React, { useState } from 'react';
import axios from 'axios'; // You'll need Axios for making API requests

const VerifyPayment = () => {
  const [reference, setReference] = useState(''); // Input field for the payment reference
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerifyPayment = async () => {
    try {
      const response = await axios.get(
        `https://api.paystack.co/transaction/verify/${reference}`,
        {
          headers: {
            Authorization: `Bearer YOUR_SECRET_KEY`, // Replace with your secret key
          },
        }
      );

      // Handle the verification response
      if (response.data.data.status === 'success') {
        setVerificationResult('Payment Successful');
      } else {
        setVerificationResult('Payment Failed');
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      setVerificationResult('An error occurred');
    }
  };

  return (
    <div>
      <h2>Verify Payment</h2>
      <label>
        Payment Reference:
        <input
          type="text"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
      </label>
      <button onClick={handleVerifyPayment}>Verify Payment</button>
      <div>
        {verificationResult && <p>Verification Result: {verificationResult}</p>}
      </div>
    </div>
  );
};

export default VerifyPayment;
