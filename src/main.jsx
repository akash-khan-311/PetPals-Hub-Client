import React from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Toaster } from "react-hot-toast";

import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/PublicRoute.jsx";
import AuthProvider from "./Context/Provider/AuthProvider.jsx";
AOS.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={Router} />
        <Toaster position="top-center" reverseOrder={false} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
