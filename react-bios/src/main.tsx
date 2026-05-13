import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FavoritesProvider from "./contexts/FavoritesContext.tsx";
// import AuthProvider from "./contexts/AuthContext.tsx";
import Root from "./components/Root.tsx";

import { type UserManagerSettings } from "oidc-client-ts";
import { AuthProvider } from "react-oidc-context";

const queryClient = new QueryClient();

const settings: UserManagerSettings = {
  authority: "http://localhost:5001",
  client_id: "react-spa-client",
  client_secret: import.meta.env.VITE_CLIENT_SECRET,
  redirect_uri: "http://localhost:5173/",
  post_logout_redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "openid profile roles shipit.pricequotes.api.read",
  monitorSession: true,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
      <AuthProvider {...settings}>
        <FavoritesProvider>
          <Root />
        </FavoritesProvider>
      </AuthProvider>
      {/* </AuthProvider> */}
    </QueryClientProvider>
  </StrictMode>,
);
