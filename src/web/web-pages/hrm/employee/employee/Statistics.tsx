import React from "react";
import { Col, Row } from "react-bootstrap";

import bg1 from "@assets/images/background/corner-1.png";
import bg2 from "@assets/images/background/corner-2.png";
import StatisticsCard from "@web/web-components/statistics-card/StatisticsCard";

const statsData = [
  {
    title: "Customers",
    value: 58.39,
    decimal: true,
    suffix: "k",
    prefix: "",
    valueClassName: "text-warning",
    badgeBg: "warning",
    badgeText: "-0.23%",
    link: "/e-commerce/customers",
    linkText: "See all",
    image: bg1,
  },
  {
    title: "Orders",
    value: 23.43,
    decimal: true,
    suffix: "k",
    prefix: "",
    valueClassName: "text-info",
    badgeBg: "info",
    badgeText: "0.0%",
    link: "/e-commerce/orders/order-list",
    linkText: "All orders",
    image: bg2,
  },
  {
    title: "Revenue",
    value: 43594,
    decimal: false,
    suffix: "",
    prefix: "$",
    valueClassName: "",
    badgeBg: "success",
    badgeText: "9.54%",
    link: "/",
    linkText: "Statistics",
    image: bg2,
  },
  {
    title: "Customers",
    value: 58.39,
    decimal: true,
    suffix: "k",
    prefix: "",
    valueClassName: "text-warning",
    badgeBg: "warning",
    badgeText: "-0.23%",
    link: "/e-commerce/customers",
    linkText: "See all",
    image: bg1,
  },
];

const Statistics = () => {
  return (
    <Row className="g-3 mb-3">
      {statsData.slice(0, 4).map((stat) => (
        <Col key={stat.title} lg={3} md={6}>
          <StatisticsCard stat={stat} style={{ minWidth: "12rem" }} />
        </Col>
      ))}
    </Row>
  );
};

Statistics.propTypes = {};

export default Statistics;
