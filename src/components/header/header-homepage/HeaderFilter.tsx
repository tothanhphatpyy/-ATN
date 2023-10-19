import React from "react";
import { Form, Image } from "react-bootstrap";
import logoDigiBird from "@assets/images/logo/Logo-DigiBird.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderFilter() {
  return (
    <div className="d-flex py-2 align-items-center">
      <Image
        src={logoDigiBird}
        height={35}
        width={30}
        className="object-fit-contain"
      />
      <Form className="position-relative ms-3">
        <Form.Control
          type="search"
          placeholder="Tìm kiếm gì đó..."
          size="sm"
          aria-label="Search"
          className="rounded-pill search-input ps-4"
          onChange={({ target }) => {console.log(target)}}
        />
        <FontAwesomeIcon
          icon="search"
          className="fs--1 text-4-medium position-absolute start-0 top-50 translate-middle-y ms-2"
        />
      </Form>
    </div>
  );
}

export default HeaderFilter;
