import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const VerifyPayment = ({ reference }) => {
  const navigate = useNavigate();
  const paystackApiSecretKey = process.env.REACT_APP_PAYSTACK_API_SECRET_KEY;
  const [verificationResult, setVerificationResult] = useState(null);
  const [toastDisplayed, setToastDisplayed] = useState(false);

  useEffect(() => {
    const handleVerifyPayment = async () => {
      try {
        const response = await axios.get(
          `https://api.paystack.co/transaction/verify/${reference}`,
          {
            headers: {
              Authorization: `Bearer ${paystackApiSecretKey}`,
            },
          },
        );

        // Handle the verification response
        if (response.data.data.status === 'success') {
          setVerificationResult(`Payment Successful: Reference: ${reference}`);
        } else {
          setVerificationResult('Payment Failed');
        }
      } catch (error) {
        setVerificationResult(`An error occurred, ${error}`);
      }
    };

    handleVerifyPayment();
  }, [reference, paystackApiSecretKey]);

  // Show toast only once
  useEffect(() => {
    if (verificationResult && !toastDisplayed) {
      toast.success(verificationResult, {
        autoClose: 7000,
      });
      setToastDisplayed(true);
      navigate('/gifts');
    }
  }, [verificationResult, toastDisplayed, navigate]);

  return <div />;
};

export default VerifyPayment;
