import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layouts/RootLayout";
import MoviesPage from "../pages/MoviesPage";
import ContactPage from "../pages/ContactPage";
import FavoritesPage from "../pages/FavoritesPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DetailsPage from "../pages/DetailsPage";
import { useAuth } from "../hooks/useAuth";
import LoadingPage from "../pages/LoadingPage";
import ProtectedRoute from "./ProtectedRoute";

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
        path: "/favorites",
        element: (
          <ProtectedRoute>
            <FavoritesPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
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

const Root = () => {
  const { isAuthLoading } = useAuth();

  if (isAuthLoading) {
    return <LoadingPage />;
  }

  return <RouterProvider router={browserRouter} />;
};

export default Root;
