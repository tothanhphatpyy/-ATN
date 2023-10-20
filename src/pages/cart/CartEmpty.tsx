import React from "react";
import { LazyImage, Text } from "@components/common";
import cartEmpty from "@assets/icons/cart-empty.png";

const CartEmpty = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div>
          <div className="d-flex justify-content-center mb-3">
            <LazyImage src={cartEmpty} height={100} width={120} />
          </div>
          <Text className="text-center">
            Không có sản phẩm nào trong giỏ hàng cả!
          </Text>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
