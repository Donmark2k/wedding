import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';
import { useLocation, useNavigate } from 'react-router-dom';

const PaystackIntegration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const amount = queryParams.get('amount') || '';
  const amountInKobo = parseInt(amount.replace(/,/g, ''), 10) * 100;
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const paywithpaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_test_86963e6c82576f869d86c89ae441bec44073e913',
      amount: amountInKobo,
      email,
      firstname,
      lastname,
      onSuccess(transaction) {
        const message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
        setEmail('');
        setFirstname('');
        setLastname('');
        navigate('/gifts'); // Use navigate to redirect
      },
      onCancel() {
        alert('You have cancelled the transaction');
        navigate('/gifts'); // Use navigate to redirect
      },
    });
  };
  return (
    <>
      <form id="paymentForm">
        <div className="form-group">
          <label htmlFor="email-address">Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email-address" required />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="tel" value={amount} readOnly id="amount" required />
        </div>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} id="first-name" />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} id="last-name" />
        </div>
        <div className="form-submit">
          <button type="submit" onClick={paywithpaystack}> Pay </button>
        </div>
      </form>
    </>
  );
};

export default PaystackIntegration;
