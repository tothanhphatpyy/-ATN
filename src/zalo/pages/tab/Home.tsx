import React from "react";
import { Image } from "react-bootstrap";
import logoDigiBird from "@assets/images/logo/logo-bird-250x125 1.png";
import Text from "@shared/text/Text";
import { useUser } from "@atom/user/useUser";

const Home = () => {
  const { userInfo } = useUser();
  console.log(userInfo);
  return (
    <>
      {/* <Flex alignItems={'center'} className='container'>
        <Image src={logo} height={60} width={65} className="object-fit-contain" />
        <span className="heading-4-medium text-color-primary text-primary-cl">Component</span>
      </Flex> */}
      <div className="pt-5 d-flex flex-col justify-content-center align-items-center">
      <Image src={logoDigiBird} height={100} width={100} className="object-fit-contain" />
      <Text className="heading-4-medium text-color-primary text-primary-cl">DigiBird Component</Text>
      </div>
      
    </>
  );
};

export default Home;
