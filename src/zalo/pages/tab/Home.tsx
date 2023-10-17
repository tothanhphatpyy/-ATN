import React from "react";
import { Image } from "react-bootstrap";
import logoDigiBird from "@assets/images/logo/logo-bird-250x125 1.png";
import Text from "@shared/text/Text";
import { useUser } from "@atom/user/useUser";
import { HeaderHomePage } from "@layouts/header/HeaderHomePage";

const Home = () => {
  const { userInfo } = useUser();
  console.log(userInfo);
  return (
    <>
      <HeaderHomePage />
      <div className="pt-5 d-flex flex-col justify-content-center align-items-center">
      <Image src={logoDigiBird} height={100} width={100} className="object-fit-contain" />
      <Text className="heading-4-medium text-color-primary text-primary-cl">DigiBird Component</Text>
      </div>
      
    </>
  );
};

export default Home;
