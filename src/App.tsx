import React, { useEffect, useState } from "react";

import is from "is_js";    // sử dụng khi phát triển 2 nền tảng

import ZaloRoot from "@zalo/Root";
/* import WebRoot from "@web/Root";  // sử dụng khi phát triển 2 nền tảng */

import Main from "./Main";

const App = () => {
  const [platform, setPlatform] = useState("zalo");     // sử dụng khi phát triển 2 nền tảng
  const [loading, setloading] = useState(true); // sử dụng khi phát triển 2 nền tảng
  const HTMLClassList = document.getElementsByTagName("html")[0].classList;  // sử dụng khi phát triển 2 nền tảng

  // sử dụng dụng khi phát triển 2 nền tảng
  /* useEffect(() => {
    const checkPlatform = async () => {
      const port = await location.port; // zmp start chạy trên port 3000 -> zaloweb: 2999
      const isZalo = (await navigator.userAgent.indexOf("Zalo")) !== -1; // chạy trên thiết bị thật
      if (!isZalo && port !== "2999") {
        // phát triển web
        setPlatform("web");
      }
      setloading(false);
    };

    checkPlatform();
  }, []); */

  // sử dụng khi phát triển 2 nền tảng
  useEffect(() => {
    if (is.windows()) {
      HTMLClassList.add("windows");
    }
    if (is.chrome()) {
      HTMLClassList.add("chrome");
    }
    if (is.firefox()) {
      HTMLClassList.add("firefox");
    }
    if (is.safari()) {
      HTMLClassList.add("safari");
    }
  }, [HTMLClassList]); 

  // sử dụng dụng khi phát triển 2 nền tảng
  /* if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(204,204,204,0.4)",
        }}
      />
    );
  } */

  return (
    <Main>
      {/* //sử dụng khi phát triển 2 nền tảng */}
      {/* {platform === "zalo" ? <ZaloRoot /> : <WebRoot />}  */}
      <ZaloRoot />
    </Main>
  );
};

export default App;
