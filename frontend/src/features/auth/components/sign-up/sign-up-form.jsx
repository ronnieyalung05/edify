import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
import { signUpNewUser } from "../../../../services/auth";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // for sign-up button
  const [errorMessage, setErrorMessage] = useState(""); // for showing users messages

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    // Simple frontend validation
    if (!email || !password) {
      setErrorMessage("Please provide both email and password.");
      setLoading(false);
      return;
    }

    const result = await signUpNewUser(email, password);

    if (result.success) {
      navigate("/checkemail", { state: { email } }); // NAVIGATION
    } else {
      setErrorMessage(result.error);
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        { errorMessage && (<p> {errorMessage}</p>) }
      </form>
    </div>
  );
}

export default SignUpForm;