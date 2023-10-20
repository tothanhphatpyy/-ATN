import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Header } from "zmp-ui";

import { Text, Currency } from "@components/common";

import CartEmpty from "./CartEmpty";
import CustomerInfor from "./CustomerInfor";

function Cart() {
  return (
    <>
      <Header title="Giỏ hàng" />
      <CartEmpty />

      <div
        className="fixed-bottom bg-white border-bottom"
        style={{ marginBottom: 74 }}
      >
        <CustomerInfor />
      </div>

      {/**Buttom Bottom */}
      <div className="fixed-bottom bg-white" style={{ height: 74 }}>
        <Row className="justify-content-between align-items-center px-3 h-100">
          <Col>
            <Text className="body-medium-medium text-gray-700 mb-1">
              Tổng thanh toán
            </Text>
            <Currency
              value={20000000000}
              className="body-large-semibold text-black"
            />
          </Col>
          <Col>
            <Button
              type="button"
              className="btn btn-outline-primary w-100 text-white rounded-pill"
              style={{ height: 48 }}
            >
              <Text className="body-medium-semibold">Đặt hàng</Text>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Cart;
