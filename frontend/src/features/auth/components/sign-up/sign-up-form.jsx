import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

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
            <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button type="submit"> Sign Up </button>
        </form>
      </div>
    );
}

export default SignUpForm;