import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import ContactPage from "./pages/ContactPage.tsx";
import MoviesPage from "./pages/MoviesPage.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";
import RootLayout from "./layouts/RootLayout.tsx";

const browserRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MoviesPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/movies/:movieId",
        element: <DetailsPage />,
      },
    ],
  },
  // {
  //   path: "/admin",
  //   element: <AdminLayout />,
  //   children: [],
  // },
  // {
  //   path: "/auth",
  // },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>,
);
