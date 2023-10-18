import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import logoDigiBird from "@assets/images/logo/logo-bird-250x125 1.png";
import Text from "@shared/text/Text";
import { useUser } from "@atom/user/useUser";
import { WelcomeUser } from "@zalo/components/header/header-homepage/WelcomeUser";
import { useFollow } from "@atom/follow/useFollow";
import Dashboard from "@components/dashboard/default";

const Home = () => {
  const OA_TYPE = import.meta.env.VITE_OA_TYPE;
  const { userInfo } = useUser();
  const { visibleFollow, setVisibleFollow, handleFollowOA } = useFollow();

  useEffect(() => {
    if (visibleFollow && userInfo && OA_TYPE == "oa") {
      handleFollowOA("/");
      setVisibleFollow(false);
    }
  }, [userInfo]);

  return (
    <>
      <WelcomeUser />
      <Dashboard />
      <div className="pt-5 d-flex flex-col justify-content-center align-items-center">
        <Image
          src={logoDigiBird}
          height={100}
          width={100}
          className="object-fit-contain"
        />
        <Text className="heading-4-medium text-color-primary text-primary-cl">
          DigiBird Component
        </Text>
      </div>
    </>
  );
};

export default Home;
