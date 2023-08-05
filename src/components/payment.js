import React from 'react';
// import PaystackPop from 'paystack-pop';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
  function payWithPaystack(e) {
    e.preventDefault();

    // const handler = PaystackPop.setup({
    //   key: 'pk_test_86963e6c82576f869d86c89ae441bec44073e913', // Replace with your public key
    //   email: document.getElementById('email-address').value,
    //   amount: document.getElementById('amount').value * 100,
    //   ref: `${Math.floor((Math.random() * 1000000000) + 1)}`,
    //   onClose() {
    //     toast.error('Payment window closed.', { autoClose: 3000 });
    //   },
    //   callback(response) {
    //     const message = `Payment complete! Reference: ${response.reference}`;
    //     toast.success(message, { autoClose: 5000 });
    //   },
    // });

    // handler.openIframe();
  }

  return (
    <>
      <form id="paymentForm">
        <div className="form-group">
          <label htmlFor="email-address">Email Address</label>
          <input type="email" id="email-address" required />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="tel" id="amount" required />
        </div>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </div>
        <div className="form-submit">
          <button type="submit" onClick={payWithPaystack}> Pay </button>
        </div>
      </form>
      {/* <ToastContainer /> */}
      {' '}
      {/* Container for displaying toasts */}
    </>
  );
};

export default Payment;
