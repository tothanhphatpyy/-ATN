import React, { forwardRef } from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import avt from "@assets/images/background/avt-default.png";
import flag from "@assets/images/background/flag.png";
import { Link } from "react-router-dom";
import Avatar from "@shared/Avatar";
import Flex from "@shared/Flex";

const ProfileUser = forwardRef((props, ref) => {
  return (
    <Card className="mb-3" id="profile" ref={ref}>
      <Card.Header>
        <Row>
          <Col lg={6}>
            <h5 className="">Hồ sơ</h5>
            <div className="border-solid border-bottom my-2 d-none d-lg-block" />
            <div className="d-flex items-content-center mt-3">
              <Image
                src={avt}
                alt=""
                className=""
                style={{ width: 120, height: 128 }}
              />
              <div className="ms-3">
                <div className="d-flex items-content-center">
                  <div className="text-4-medium">John Doe</div>
                  <Image
                    src={flag}
                    alt=""
                    className="ms-2"
                    style={{ width: 24, height: 16 }}
                  />
                </div>

                <div className="text-6-regular mt-2">John Doe</div>
                <div className="text-6-regular-gray">John Doe</div>
              </div>
            </div>
          </Col>
          <div className="border-solid border-bottom my-4 d-lg-none" />
          <Col lg={6}>
            <h5 className="mb-0">Báo cáo</h5>
            <div className="border-solid border-bottom my-2 d-none d-lg-block" />
            <Row>
              <Col lg={6}>
                <div className="text-5-medium">Báo cáo cho</div>
                <div className="d-flex align-items-center"></div>
                <div>
                <Flex alignItems="center" className="position-relative">
                  <Avatar
                    className=""
                    size="2xl"
                    src={avt}
                    width="60"
                    /* alt={name} */
                  />
                  <div className="flex-1 ms-3">
                    <h6 className="mb-0 fw-semi-bold">
                      <Link className="text-dark stretched-link" to="#!">
                        To Phat
                      </Link>
                    </h6>
                    <p className="fs--2 mb-0 text-500">Developer</p>
                  </div>
                </Flex>
                </div>
              </Col>
              <Col lg={6}>
                <div className="text-5-medium">Nhóm báo cáo</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Header>
    </Card>
  );
});

export default ProfileUser;
