import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./context/Login";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { RegisterProvider } from "./context/Register";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AnimatePresence>
      <BrowserRouter>
        <RegisterProvider>
          <LoginProvider>
            <App />
            <Toaster position="top-right" reverseOrder={false} />
          </LoginProvider>
        </RegisterProvider>
      </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>
);
