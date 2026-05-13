import React from "react";
import { useAuth } from "react-oidc-context";
import MyButton from "../components/MyButton";

const IISProfilePage = () => {
  const auth = useAuth();

  return (
    <div>
      <p> {JSON.stringify(auth.user?.profile)}</p>
      <MyButton
        onClick={() => {
          auth.signoutRedirect();
        }}>
        Loguit
      </MyButton>
    </div>
  );
};

export default IISProfilePage;
