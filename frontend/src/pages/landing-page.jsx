import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase-client";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const session = supabase.auth.session(); // get current session
    if (session) {
      navigate("/home"); // already logged in -> dashboard
    } else {
      navigate("/signin"); // not logged in -> sign-in page
    }
  }, []);

  return null; // optional: show a loading spinner while redirecting
};

export default LandingPage;