import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../components/SupabaseClient";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../Context/AuthContext";

const LogIn = () => {
  const navigate = useNavigate();
  const { isLoggedIn, admin } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      console.log("user");
      if (admin) {
        console.log("admin");
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [isLoggedIn]);

  return (
    <div className="main">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
        view="sign_in"
        // redirectTo="http://127.0.0.1:5173/"
      />
    </div>
  );
};

export default LogIn;
