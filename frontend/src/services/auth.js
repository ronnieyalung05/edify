import { supabase } from "../supabase-client";

export const signUpNewUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        emailRedirectTo: 'http://localhost:5173/signin' //TODO: change this to an env file later or wherever it needs to be
      }});

    if (error) {
      if (error.message.includes("already registered")) {
        return {
          success: false,
          error:
            "Email is already in use. Please sign in or reset your password.",
        };
      }
      return { success: false, error: error.message };
    }

    return {
      success: true,
      message: "Sign-up successful! Check your email to confirm your account.",
      data,
    };
    
  } catch (err) {
    console.error("Unexpected sign-up error:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
};

export const signInUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // Handle common auth errors gracefully
      if (error.message.includes("Invalid login credentials")) {
        return {
          success: false,
          error: "Invalid email or password. Please try again.",
        };
      }

      if (error.message.includes("Email not confirmed")) {
        return {
          success: false,
          error: "Please confirm your email before signing in.",
        };
      }

      // Fallback for any other auth-related errors
      return { success: false, error: error.message };
    }

    // If no errors and we have session/user data
    return {
      success: true,
      message: "Sign-in successful!",
      data,
    };
  } catch (err) {
    console.error("Unexpected sign-in error:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}