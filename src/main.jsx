import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./routes/Routing";
import AuthContextProvider from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
     <RouterProvider router={myRoutes} />
  </AuthContextProvider>
 
);