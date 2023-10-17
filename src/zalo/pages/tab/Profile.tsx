import React from "react";
import NavbarTop from "@components/navbar/top/NavbarTop";
import ListComponents from "../components";
import { useUser } from "@atom/user/useUser";

const Profile = () => {
  const { token } = useUser();
  return (
    <div className="px-3">
      <NavbarTop />
      <ListComponents />
    </div>
  );
};

export default Profile;
