import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layouts/RootLayout";
import MoviesPage from "../pages/MoviesPage";
import ContactPage from "../pages/ContactPage";
import FavoritesPage from "../pages/FavoritesPage";
// import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DetailsPage from "../pages/DetailsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FavoritesProvider from "../contexts/FavoritesContext";
import { useAuth } from "react-oidc-context";
import IISProfilePage from "../pages/IISProfilePage";
import IISLoginPage from "../pages/IISLoginPage";

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
        element: <FavoritesPage />,
      },
      {
        path: "/profile",
        element: <IISProfilePage />,
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

const queryClient = new QueryClient();

const Root = () => {
  const auth = useAuth();

  if (auth.isLoading) {
    return <p>Loading....</p>;
  }

  return auth.isAuthenticated ? (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <RouterProvider router={browserRouter} />
      </FavoritesProvider>
    </QueryClientProvider>
  ) : (
    <IISLoginPage />
  );
};

export default Root;
