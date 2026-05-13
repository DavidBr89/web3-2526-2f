import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import ContactPage from "./pages/ContactPage.tsx";
import MoviesPage from "./pages/MoviesPage.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FavoritesProvider from "./contexts/FavoritesContext.tsx";
import FavoritesPage from "./pages/FavoritesPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import AuthProvider from "./contexts/AuthContext.tsx";
import Root from "./components/Root.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <FavoritesProvider>
          <Root />
        </FavoritesProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
