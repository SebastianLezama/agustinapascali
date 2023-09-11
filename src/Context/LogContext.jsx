import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { getTableByEmail } from "../components/SupabaseClient";

const logContext = createContext();

export const LogDataProvider = ({ children }) => {
  const log = useProvideLog();
  return <logContext.Provider value={log}>{children}</logContext.Provider>;
};

export const useLogData = () => {
  return useContext(logContext);
};
export const getLocalStorage = (name) => {
  // localStorage.setItem("userLog", JSON.stringify([]));

  const localData = localStorage.getItem(name);
  return localData ? JSON.parse(localData) : [];
};

function useProvideLog() {
  const [logData, setLogData] = useState(getLocalStorage("userLog"));
  const auth = useAuth();

  const getLog = async (email) => {
    // console.log("email: ", email);
    if (email !== undefined) {
      await getTableByEmail("Log", email).then((res) => {
        // console.log("supabaseLog", res);
        if (res !== undefined) {
          localStorage.setItem("userLog", JSON.stringify(res));
          setLogData(res);
        }
      });
    }
  };

  const sessionEmail = () => {
    getLocalStorage("sb-waouznfjhihauptkfimb-auth-token");
  };

  useEffect(() => {
    getLog(auth?.sessionUser?.email);
    // sessionEmail() && getLog("2", sessionEmail());
    // getLog("sebastian.lezama@gmail.com");
    // return () => {
    //   ;
    // };
  }, [auth?.userSession?.user?.email]);

  return { logData, setLogData, getLog };
}
