import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { signInUser } from "../../services/auth";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // for sign-up button
  const [errorMessage, setErrorMessage] = useState(""); // for showing users messages

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const result = await signInUser(email, password);

    if (result.success) {
      navigate("/home"); // NAVIGATION
    } else {
      setErrorMessage(result.error);
    }

    setLoading(false);
  };

  return (
    <div>
    <button type="button" onClick={() => navigate("/signup")}>To Sign Up</button>
      <form onSubmit={handleSignIn}>
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

        <button type="submit" disabled={loading || !email || !password}>
          {" "}
          {/* disabled if loading, or a field isn't filled out*/}
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        {errorMessage && <p> {errorMessage}</p>}
      </form>
    </div>
  );
};

export default SignInForm;
