import React from "react";
import NavbarTop from "@components/navbar/top/NavbarTop";
import { useUser } from "@atom/user/useUser";
import ListComponents from "@pages/components";

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
