import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaystackPop from '@paystack/inline-js';
import VerifyPayment from './verifyPayment';

const PaystackIntegration = () => {
  const paystackApiKey = process.env.REACT_APP_PAYSTACK_API_KEY;
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const amount = queryParams.get('amount') || '';
  const amountInKobo = parseInt(amount.replace(/,/g, ''), 10) * 100;
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [paymentSuccessful, setPaymentSuccessful] = useState(false); // Add state for tracking payment success
  const [reference, setReference] = useState('');

  const paywithpaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: paystackApiKey,
      amount: amountInKobo,
      email,
      firstname,
      lastname,
      onSuccess(transaction) {
        setEmail('');
        setFirstname('');
        setLastname('');
        setPaymentSuccessful(true); // Set paymentSuccessful to true
        setReference(transaction.reference);
      },
      onCancel() {
        toast.error('Payment canceled'); // Use toast for error message
        navigate('/gifts'); // Use navigate to redirect
      },
    });
  };

  return (
    <>
      <form id="paymentForm">
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="email-address">Email Address:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email-address" required />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input type="tel" value={amount} readOnly id="amount" required />
          </div>
          <div className="form-group">
            <label htmlFor="first-name">First Name:</label>
            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} id="first-name" />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name: </label>
            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} id="last-name" />
          </div>
          <div className="form-submit">
            <Button variant="primary" className="buttonPay" onClick={paywithpaystack}>
              Proceed to Pay
            </Button>
          </div>
        </div>
      </form>
      {paymentSuccessful && <VerifyPayment reference={reference} />}

    </>
  );
};

export default PaystackIntegration;
