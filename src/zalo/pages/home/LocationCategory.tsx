import { useCategory, useLocation } from "@atom/category/useCategory";
import Avatar from "@shared/Avatar";
import Flex from "@shared/Flex";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import Text from "@shared/text/Text";

const LocationCategory = () => {
  const { category } = useCategory();
  return (
   
    <div className="scrollbar px-3 d-flex">
      {category?.map((item, index) => (
        <Col className={index === (category?.length -1) ? '' : 'mr-4'} key={index}>
          <div className="list-category">
            <Avatar src={item.image_url} className="img-category ms-2" />
            <Text className="text-5-medium mt-1">{item.name.length > 9 ? `${item.name.slice(0, 9)}..` : item.name}</Text>
          </div>
        </Col>
      ))}
    </div>
  );
};

export default LocationCategory;


