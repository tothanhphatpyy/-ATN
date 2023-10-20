import React, { useRef } from "react";
import { Card, Col, Nav, Row } from "react-bootstrap";
import useScrollSpy from "react-use-scrollspy";
import { useTranslation } from "react-i18next";
import ProfileUser from "@web/web-pages/hrm/employee/employee-detail/ProfileUser";
import Projects from "@web/web-pages/hrm/employee/employee-detail/Projects";
import './styles.scss'
import PageHeader from "@components/common/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const EmployeeDetail = () => {
  const { t } = useTranslation();

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const listTabEmployees = [
    {
      name: t("tab_employees.profile"),
      href: "#profile",
    },
    {
      name: t("tab_employees.projects"),
      href: "#projects",
    },
    {
      name: t("tab_employees.shift-roster"),
      href: "#task",
    },
    {
      name: t("tab_employees.leaves"),
      href: "#shift-roster",
    },
    {
      name: t("tab_employees.emergency-contacts"),
      href: "#leaves",
    },
    {
      name: t("tab_employees.appreciation"),
      href: "#documents",
    },
    {
      name: t("tab_employees.permissions"),
      href: "#emergency-contacts",
    },
    {
      name: t("tab_employees.projects"),
      href: "#appreciation",
    },
    {
      name: t("tab_employees.projects"),
      href: "#permissions",
    },
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -150,
  });
  return (
    <div className="container-content">
      <Row className="g-3">
        <Col lg={3} className="ps-lg-2 mb-3 col-w-20">
        <div className="sticky-sidebar h-100">
            <Card className="sticky-top h-100">
              <Card.Body>
                <div
                  id="terms-sidebar"
                  className="terms-sidebar nav flex-column fs--1 mt-n2"
                >
                  {listTabEmployees.map((tab, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link
                        href={tab.href}
                        className="nav-link px-0 py-1"
                        active={activeSection === index}
                      >
                        {tab.name}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col lg={9} className="pe-lg-2 order-1 order-lg-0">
          <ProfileUser ref={sectionRefs[0]}/>
          <Projects ref={sectionRefs[1]}/>
        </Col>
      </Row>
    </div>
 
    
  );
};

export default EmployeeDetail;
