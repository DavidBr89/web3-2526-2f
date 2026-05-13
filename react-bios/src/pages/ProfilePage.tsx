import { useQuery } from "@tanstack/react-query";
// import React from "react";
import Axios from "axios";
import MyButton from "../components/MyButton";
import { useAuth } from "react-oidc-context";
// import { useAuth } from "../hooks/useAuth";

interface ProfileResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ProfilePage = () => {
  // const { logout } = useAuth();

  const { user, signoutRedirect } = useAuth();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profile"],
    queryFn: () => {
      return Axios.get<ProfileResponse>("http://localhost:3000/users/profile", {
        headers: {
          Authorization: `Bearer ${user?.access_token}`,
        },
        withCredentials: true,
      });
    },
    enabled: false,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {/* <p>{data?.data.email}</p> */}

      {/* <MyButton onClick={logout}>Logout</MyButton> */}

      <p>{JSON.stringify(user)}</p>
      <MyButton onClick={() => signoutRedirect()}>Logout</MyButton>
    </div>
  );
};

export default ProfilePage;
