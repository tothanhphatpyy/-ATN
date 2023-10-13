import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

interface PageHeaderProps {
  header: string;
  breadcrumb: any;
  rightItem: React.ReactNode;
  className: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  header,
  breadcrumb,
  rightItem,
  ...rest
}) => {
  if (breadcrumb.length > 0) {
    const lastIndex = breadcrumb.length - 1;

    breadcrumb = breadcrumb.map((item, index) => {
      let link;

      if (lastIndex === index) {
        link = (
          <li key={index} className="header" aria-current="page">
            {item.title}
          </li>
        );
      } else {
        link = (
          <li key={index} className="breadcrumb">
            <Link to={item.url} className="header active">
              {item.title}
            </Link>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="2xs"
              className="mx-2"
            />
          </li>
        );
      }

      return link;
    });

    breadcrumb = (
      <div className="page-header__breadcrumb mb-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">{breadcrumb}</ol>
        </nav>
      </div>
    );
  }

  return (
    <Card {...rest}>
      <Card.Body className="position-relative">
        {breadcrumb}
        <Row>
          <Col md={3} lg={6}>{header && <h6 className="title">{header}</h6>}</Col>
          <Col md={9} lg={6}>{rightItem}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PageHeader;
