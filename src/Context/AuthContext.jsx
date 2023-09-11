import { createContext, useContext, useEffect, useState } from "react";
import { getTableByEmail, supabase } from "../components/SupabaseClient";
import { getLocalStorage } from "./LogContext";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [admin, setAdmin] = useState(true);
  const [user, setUser] = useState([]);

  const signUp = async (email, password) => {
    try {
      console.log("en el f signup");
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  const login = async (email) => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: "http://127.0.0.1:5173/",
        },
      });
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
  };

  const getLocalStorageSession = () => {
    const session = getLocalStorage("sb-waouznfjhihauptkfimb-auth-token");

    if (session.user) {
      return session.user;
    } else {
      return [];
    }
  };

  const [sessionUser, setSessionUser] = useState(getLocalStorageSession());

  const dbUser = async (email) => {
    const supaUser = await getTableByEmail("Users", email);
    // console.log(supaUser);
    setUser(supaUser);
    if (supaUser[0]?.admin === true) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };

  const checkIsLoggedIn = () => {
    if (sessionUser?.id !== undefined) {
      return true;
    } else {
      return false;
    }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(checkIsLoggedIn());

  useEffect(() => {
    dbUser(sessionUser?.email);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_OUT") {
          setAdmin(false);
          setIsLoggedIn(false);
          setSessionUser([]);
        }
        if (!isLoggedIn) {
          if (event === "SIGNED_IN") {
            await dbUser(session?.user?.email);
            setSessionUser(session?.user);
            // console.log("adentro del signed in");
            if (!isLoggedIn) {
              if (user[0]?.admin === true) {
                console.log("auth admin is:", admin);
                setAdmin(true);
              }
              setIsLoggedIn(true);
            }
          }
        }
        if (event === "SIGNED_OUT") {
          setUser([]);
          setAdmin(false);
          setIsLoggedIn(false);
        }
      }
    );
    if (admin === false && user[0]?.admin === true) {
      console.log("use eff admin is:", admin);
      setAdmin(true);
    }

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [isLoggedIn, admin]);

  return { admin, user, sessionUser, isLoggedIn, login, logout, signUp };
}
