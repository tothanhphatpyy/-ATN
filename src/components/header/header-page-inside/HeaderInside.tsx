import React from "react";
import { Form, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function HeaderInside() {
  const navigate = useNavigate();
  return (
    <div className="d-flex py-2 align-items-center">
      <div className="d-flex align-items-center p-1_5 rounded-4 border">
        <div className="ps-2 pe-3 border-end" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon="chevron-left" size="sm" className="text-gray-700" />
        </div>
        <div className="ps-3 pe-2" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faHouse} size="sm" className="text-gray-700" />
        </div>
      </div>
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

export default HeaderInside;
