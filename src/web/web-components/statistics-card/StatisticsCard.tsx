import React from "react";
import { Card } from "react-bootstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import Background from "@shared/Background";
import SoftBadge from "@shared/SoftBadge";

interface StatisticProps {
  stat: {
    title: string;
    value: number;
    decimal?: boolean;
    suffix: string;
    prefix: string;
    valueClassName?: string;
    linkText?: string;
    link?: string;
    badgeText?: string;
    badgeBg?: string;
    image?: string;
    className?: string;
  };
  style?: any;
}

const StatisticsCard: React.FC<StatisticProps> = ({ stat, ...rest }) => {
  const {
    title,
    value,
    decimal,
    suffix,
    prefix,
    valueClassName,
    linkText,
    link,
    badgeText,
    badgeBg,
    image,
    className,
  } = stat;
  return (
    <Card className={classNames(className, "overflow-hidden")} {...rest}>
      <Background image={image as string} className="bg-card" />
      <Card.Body className="position-relative">
        <h6>
          {title}
          {badgeText && (
            <SoftBadge bg={badgeBg as any} pill className="ms-2">
              {badgeText}
            </SoftBadge>
          )}
        </h6>
        <div
          className={classNames(
            valueClassName,
            "display-4 fs-4 mb-2 fw-normal font-sans-serif"
          )}
        >
          <CountUp
            start={0}
            end={value}
            duration={2.75}
            suffix={suffix}
            prefix={prefix}
            separator=","
            decimals={decimal ? 2 : 0}
            decimal="."
          />
        </div>
        <Link to={link as string} className="fw-semi-bold fs--1 text-nowrap">
          {linkText}
          <FontAwesomeIcon
            icon="angle-right"
            className="ms-1"
            transform="down-1"
          />
        </Link>
      </Card.Body>
    </Card>
  );
};

export default StatisticsCard;
