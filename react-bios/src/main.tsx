import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { type UserManagerSettings } from "oidc-client-ts";
import { AuthProvider } from "react-oidc-context";
import Root from "./components/Root.tsx";

const settings: UserManagerSettings = {
  authority: "http://localhost:5001",
  client_id: "react-spa-client",
  client_secret: "react-secret",
  redirect_uri: "http://localhost:5173/",
  post_logout_redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "openid profile roles shipit.pricequotes.api.read",
  monitorSession: true,
};

const onSigninCallback = () => {
  window.history.replaceState({}, document.title, window.location.pathname);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...settings} onSigninCallback={onSigninCallback}>
      <Root />
    </AuthProvider>
  </StrictMode>,
);
