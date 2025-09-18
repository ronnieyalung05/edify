import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const CheckEmailPage = () => {
  const location = useLocation();
  const email = location.state?.email || "your email"; // coming from auth/components/sign-up/sign-up-form.jsx

  return (
    <div>
      <h2>Almost there!</h2>
      <p>
        A confirmation link has been sent to <strong>{email}</strong>.
        Please check your inbox and click the link to complete your sign-up.
      </p>
      <Link to="/signin">Back to Sign In</Link>
    </div>
  );
};

export default CheckEmailPage;