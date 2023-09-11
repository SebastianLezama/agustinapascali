import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./Context/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";
import { LogDataProvider } from "./Context/LogContext";
import { AdminProvider } from "./Context/AdminContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AuthProvider>
          <LogDataProvider>
            <AdminProvider>
              <Routes>
                <Route path="/*" element={<App />} />
              </Routes>
            </AdminProvider>
          </LogDataProvider>
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
