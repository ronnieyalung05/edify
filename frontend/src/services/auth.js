import { supabase } from "./supabase-client";

export const signUpNewUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });

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