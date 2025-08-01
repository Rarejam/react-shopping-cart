import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./assets/index.css";
import routes from "./routers.jsx";
import App from "./App.jsx";

const routers = createBrowserRouter(routes);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
     */}
    <RouterProvider router={routers} />
  </StrictMode>
);
