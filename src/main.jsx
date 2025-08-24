import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./routes/Routing";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={myRoutes} />
);