import React from "react";

import PageHeader from "@web/web-components/page-header";
import IconButton from "@shared/buttons/IconButton";
import { Col, Row } from "react-bootstrap";

import "./styles.scss";
import Statistics from "./Statistics";

const Employees = () => {
  const breadcrumb = [
    { title: "HR", url: "/account/employees" },
    { title: "Nhân viên", url: "" },
  ];

  return (
    <>
      {/* <PageHeader
        className="mb-3"
        header="Nhân viên"
        breadcrumb={breadcrumb}
        rightItem={
          <div className="d-flex justify-content-end">
            <IconButton
              variant="primary"
              className="d-flex align-items-center ms-3 px-3"
              icon="plus"
            >
              <span className="button-title">Thêm</span>
            </IconButton>
            <IconButton
              variant="outline-secondary"
              className="d-flex align-items-center ms-3 px-3"
              icon="plus"
            >
              <span className="button-title">Mời</span>
            </IconButton>
            <IconButton
              variant="outline-secondary"
              className="d-flex align-items-center ms-3 px-3"
              icon="file-upload"
            >
              <span className="button-title ml-2">Nhập Excel</span>
            </IconButton>
            <IconButton
              variant="outline-secondary"
              className="d-flex align-items-center ms-3 px-3"
              icon="file-import"
            >
              <span className="no-wrap-text button-title">Xuất Excel</span>
            </IconButton>
          </div>
        }
      />
      
      <Statistics /> */}
    </>
  );
};

export default Employees;
