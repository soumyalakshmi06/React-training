import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Reset password logic goes here.
    alert(`A password reset email has been sent to ${email}`);
    setEmail('');
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
