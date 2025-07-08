import React, { useState } from 'react';
import './DonationModal.css';

const DonationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="donation-overlay" onClick={handleOutsideClick}>
      <div className="donation-form-box">
        <button 
          onClick={(e) => {
    e.stopPropagation();  // Prevents event bubbling
    onClose();           // Calls your close handler
  }}
          className="donation-close-btn"
          aria-label="Close donation form"
        >
          &times;
        </button>

        <h2 className="modal-title">Make a Donation</h2>

        <form onSubmit={(e) => {
          e.preventDefault();
          onClose();
          alert('Thank you for your donation!');
        }}>
          <input
            type="text"
            placeholder="Full Name"
            required
            className="form-input"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="form-input"
          />
          <input
            type="number"
            placeholder="Donation Amount (₹)"
            required
            className="form-input"
          />
          <select required className="form-select">
            <option value="">Select Payment Method</option>
            <option value="upi">UPI</option>
            <option value="card">Credit/Debit Card</option>
            <option value="netbanking">Net Banking</option>
          </select>
          <button type="submit" className="submit-button">
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationModal;