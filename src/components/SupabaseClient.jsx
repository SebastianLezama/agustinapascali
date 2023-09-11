import { createClient } from "@supabase/supabase-js";
// import { login } from "../Context/AuthContext";

const SUPABASE_URL = "https://waouznfjhihauptkfimb.supabase.co";
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

// export function signInWithEmail(email) {
//   login(email);
// }

export function userSignUp(email, password) {}

export async function getTableByEmail(tableName, email) {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select("*")
      .eq("email", email);
    if (error) throw error;
    if (data != null) return data;
  } catch (error) {
    alert(error.message);
  }
}

export async function getSessionEmail() {
  try {
    const {
      data: { email },
    } = await supabase.auth.getSession();
    console.log(email);
  } catch (error) {
    alert(error.message);
  }
}
