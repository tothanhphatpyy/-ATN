import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Flex from "@components/common/Flex";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Image,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import classNames from "classnames";
import ProductImage from "./components/ProductImage";
import StarRating from "./components/StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalVideoContent from "@components/app/e-learning/ModalVideoContent";
import Hoverbox from "@components/common/Hoverbox";
import playIcon from "@assets/icons/play.svg";

const ProductGridSlide = ({ product, ...rest }) => {
  const {
    name,
    category,
    id,
    price,
    salePrice,
    shippingCost,
    rating,
    totalReview,
    isInStock,
    isNew,
    files,
    video,
    videoPoster,
  } = product;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ModalVideoContent
        show={showModal}
        setShow={setShowModal}
        attachment={{ image: videoPoster, src: video }}
      />
      <Col className="mb-4 gap-3 p-2" md={6} lg={4} xs={12}>
        <Flex direction="column" className="border rounded-1 h-100 pb-3">
          <div className="overflow-hidden">
            {video ? (
              <div>
                <Hoverbox
                  onClick={() => setShowModal(true)}
                  className="text-center"
                >
                  <Button
                    variant="link"
                    onClick={() => setShowModal(true)}
                    className="p-0 border-0"
                  >
                    <Image
                      src={files[0].src}
                      alt=""
                      className="w-100 h-100 fit-cover"
                    />
                  </Button>
                  <div className="d-flex flex-center pe-none bg-holder overlay overlay-2">
                    <Image
                      src={playIcon}
                      width={40}
                      alt=""
                      className="z-index-1"
                    />
                  </div>
                </Hoverbox>
              </div>
            ) : (
              <ProductImage
                name={name}
                id={id}
                isNew={isNew}
                files={files}
                layout="grid"
              />
            )}

            <div className="p-3">
              <h5 className="fs-0">
                <Link
                  className="text-dark"
                  to={`/e-commerce/product/product-details/${id}`}
                >
                  {name}
                </Link>
              </h5>
              <p className="fs--1 mb-3">
                <Link to="#!" className="text-500">
                  {category}
                </Link>
              </p>
              <h5 className="fs-md-2 text-warning mb-0 d-flex align-items-center mb-3">
                {`$${salePrice ? salePrice : price}`}
                {salePrice && (
                  <del className="ms-2 fs--1 text-500">${price}</del>
                )}
              </h5>
              <p className="fs--1 mb-1">
                Shipping Cost: <strong>${shippingCost}</strong>
              </p>
              <p className="fs--1 mb-1">
                Stock:{" "}
                <strong
                  className={classNames({
                    "text-success": isInStock,
                    "text-danger": !isInStock,
                  })}
                >
                  {isInStock ? "Available" : "Sold-Out"}
                </strong>
              </p>
            </div>
          </div>
          <Row className="px-3">
            <Col xs={12} lg={8} md={6}>
              <div className="flex-1">
                <StarRating readonly rating={rating} />
                <span className="ms-1">({totalReview})</span>
              </div>
            </Col>
            <Col className="">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip style={{ position: "fixed" }}>
                    Add to Wish List
                  </Tooltip>
                }
              >
                <Button
                  variant="digibird-default"
                  size="sm"
                  onClick={() => {}}
                  className="me-2"
                >
                  <FontAwesomeIcon
                    icon={
                      /* isInFavouriteItems(id) ? 'heart' : ['far', 'heart'] */ "heart"
                    }
                  />
                </Button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip style={{ position: "fixed" }}>Add to Cart</Tooltip>
                }
              >
                <Button variant="digibird-default" size="sm" onClick={() => {}}>
                  <FontAwesomeIcon icon="cart-plus" />
                </Button>
              </OverlayTrigger>
            </Col>
          </Row>
        </Flex>
      </Col>
    </>
  );
};

ProductGridSlide.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    features: PropTypes.array,
    price: PropTypes.number.isRequired,
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    salePrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    shippingCost: PropTypes.number,
    rating: PropTypes.number,
    totalReview: PropTypes.number,
    isInStock: PropTypes.bool,
    isNew: PropTypes.bool,
    files: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

export default ProductGridSlide;
