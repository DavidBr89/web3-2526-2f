import { useQuery } from "@tanstack/react-query";
import React from "react";
import Axios from "axios";

interface ProfileResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ProfilePage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profile"],
    queryFn: () => {
      return Axios.get<ProfileResponse>("http://localhost:3000/users/profile", {
        withCredentials: true,
      });
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <p>{data?.data.email}</p>
    </div>
  );
};

export default ProfilePage;
