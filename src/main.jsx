import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RecipeProvider } from "./Context/RecipeContext.jsx";

createRoot(document.getElementById("root")).render(
  <RecipeProvider>
    <BrowserRouter>
      <App />
      <ToastContainer autoClose={2000} theme="dark" hideProgressBar pauseOnHover closeOnClick  position="bottom-right" />
    </BrowserRouter>
  </RecipeProvider>
);
