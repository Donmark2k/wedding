import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';

const PaystackIntegration = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const paywithpaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_test_86963e6c82576f869d86c89ae441bec44073e913',
      amount: amount * 100,
      email,
      firstname,
      lastname,
      onSuccess(transaction) {
        const message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
        setEmail('');
        setAmount('');
        setFirstname('');
        setLastname('');
      },
      onCancel() {
        alert('You have cancelled the transaction');
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
          <input type="tel" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" required />
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
