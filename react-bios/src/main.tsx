import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import ContactPage from "./pages/ContactPage.tsx";
import MoviesPage from "./pages/MoviesPage.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MoviesPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/movies/:id",
    element: <DetailsPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>,
);
