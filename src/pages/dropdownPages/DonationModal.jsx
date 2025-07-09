import React, { useState } from 'react';
import './DonationModal.css';
import qrimg from '/images/image.png'
const DonationModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    method: '',
  });

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    const { name, email, amount, method } = formData;
    if (name && email && amount && method) {
      setStep(2);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleDonate = () => {
    alert('Thank you for your donation!');
    setStep(1); // Reset for next time
    onClose();
  };

  return (
    <div className="donation-overlay" onClick={handleOutsideClick}>
      <div className="donation-form-box">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose();
            setStep(1); // Reset step on close
          }}
          className="donation-close-btn"
          aria-label="Close donation form"
        >
          &times;
        </button>

        {step === 1 && (
          <>
            <h2 className="modal-title">Make a Donation</h2>
            <form onSubmit={handleNext}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
              <input
                type="number"
                name="amount"
                placeholder="Donation Amount (₹)"
                value={formData.amount}
                onChange={handleInputChange}
                required
                className="form-input"
              />
              <select
                name="method"
                value={formData.method}
                onChange={handleInputChange}
                required
                className="form-select"
              >
                <option value="">Select Payment Method</option>
                <option value="upi">UPI</option>
                <option value="card">Credit/Debit Card</option>
                <option value="netbanking">Net Banking</option>
              </select>
              <button type="submit" className="submit-button">
                Next
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="modal-title">Complete Your Donation</h2>
            <div className="qr-section">
              <img
                src={qrimg} // replace with your actual QR image path
                alt="UPI QR Code"
                className="qr-image"
              />
              <p><strong>Account Holder:</strong> PBKMS Trust</p>
              <p><strong>Bank A/C No:</strong> 123456789012</p>
              <p><strong>IFSC:</strong> HDFC0000123</p>
              <p><strong>UPI ID:</strong> pbkms@upi</p>
            </div>
            <div className="button-group">
              <button onClick={() => setStep(1)} className="back-button">Back</button>
              <button onClick={handleDonate} className="submit-button">Donate</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DonationModal;
