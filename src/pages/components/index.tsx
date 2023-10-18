import React, { useState } from "react";
import PropTypes from "prop-types";
import SimpleBarReact from "simplebar-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Collapse, Form, Image, Card } from "react-bootstrap";
import { slugifyText } from "@helpers/utils";
import Flex from "@components/common/Flex";
import SoftBadge from "@components/common/SoftBadge";
import Text from "@components/text/Text";
import { useNavigate } from "react-router-dom";
const courseFilters = [
  {
    label: "Products",
    options: [
      {
        label: "Grid",
        icon: "file-alt",
        type: "checkbox",
        href: "/components/products/products-grid"
      },
      {
        label: "List",
        icon: "file-invoice-dollar",
        type: "checkbox",
        value: "paid course",
        name: "paid course",
        href: "/components/products/products-list"
      },
      {
        label: "Grid Swiper Slide",
        icon: "tags",
        iconShrink: true,
        type: "checkbox",
        value: "on sale",
        name: "on sale",
        href: "/components/products/products-grid-slide"
      },
      {
        label: "List Swiper Slide",
        icon: "comment-dollar",
        iconShrink: true,
        type: "checkbox",
        value: "on sale",
        name: "on sale",
        href: "/components/products/products-list-slide"
      },
    ],
  },
  {
    label: "Categories",
    options: [
      {
        label: "List Scroll",
        icon: "brush",
        type: "checkbox",
        value: "design",
        name: "design",
        href: "/components/categories/category-list-scroll"
      },
      {
        label: "Web Development",
        icon: "globe",
        type: "checkbox",
        value: "development",
        name: "development",
      },
      {
        label: "List 4",
        icon: "code",
        type: "checkbox",
        value: "software",
        name: "software",
        href: "/components/categories/category-list-4"
      },
      {
        label: "List 8",
        icon: "balance-scale-left",
        type: "checkbox",
        value: "business",
        name: "business",
        href: "/components/categories/category-list-8"
      },
      {
        label: "List 4 Slider",
        icon: "comment-dollar",
        type: "checkbox",
        value: "marketing",
        name: "marketing",
        href: "/components/categories/category-list-4-slider"
      },
      /* {
        label: "Self Help",
        icon: "hand-holding-water",
        type: "checkbox",
        value: "self help",
        name: "self help",
      },
      {
        label: "Photography",
        icon: "camera-retro",
        type: "checkbox",
        value: "photograpy",
        name: "photograpy",
      },
      {
        label: "Music",
        icon: "music",
        type: "checkbox",
        value: "music",
        name: "music",
      },
      {
        label: "Writing",
        icon: "pen-nib",
        type: "checkbox",
        value: "writing",
        name: "writing",
      },
      {
        label: "Painting",
        icon: "palette",
        type: "checkbox",
        value: "painting",
        name: "painting",
      },
      {
        label: "Cooking",
        icon: "utensils",
        type: "checkbox",
        value: "cooking",
        name: "cooking",
      },
      {
        label: "Teaching",
        icon: "book",
        type: "checkbox",
        value: "teaching",
        name: "teaching",
      },
      {
        label: "Miscellaneous",
        icon: "thumbtack",
        type: "checkbox",
        value: "misc",
        name: "misc",
      }, */
    ],
  },
  {
    label: "Slider",
    options: [
      {
        label: "Slider Scroll",
        icon: "star",
        type: "radio",
        name: "rating",
        value: 4.5,
        href: "/components/sliders/slider-scroll"
      },
      {
        label: "4.0 & Up",
        icon: "star",
        type: "radio",
        name: "rating",
        value: 4.0,
      },
      {
        label: "3.5 & Up",
        icon: "star",
        type: "radio",
        name: "rating",
        value: 3.5,
      },
      {
        label: "3.0 & Up",
        icon: "star",
        type: "radio",
        name: "rating",
        value: 3.0,
      },
    ],
  },
  {
    label: "Form Demo",
    options: [
      {
        label: "Form",
        type: "checkbox",
        selected: true,
        value: "english",
        name: "english",
        href: "/demo-form"
      },
    ],
  },
  {
    label: "Enrolled Courses",
    options: [
      {
        label: "Show",
        name: "enrolledCourses",
        type: "radio",
        value: "all courses",
      },
      {
        label: "Dont Show",
        name: "enrolledCourses",
        type: "radio",
        value: "new courses",
      },
    ],
  },
];
const ListComponents = () => {
  return (
    <div className="course-filter">
      <SimpleBarReact style={{ height: "100%" }}>
        <div className="flex-between-center pt-x1 text-4-medium">
          DigiBird Component
        </div>
        <div className="py-2">
          <ul className="list-unstyled">
            {courseFilters.map((filter, index) => (
              <FilterItem
                key={slugifyText(filter.label)}
                index={index}
                filter={filter}
              />
            ))}
          </ul>
        </div>
      </SimpleBarReact>
    </div>
  );
};

ListComponents.propTypes = {
  setShow: PropTypes.func,
  isOffcanvas: PropTypes.bool,
};

const FilterItem = ({ filter, index }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <li>
      <Card className="my-2 px-2">
        <Button
          variant="link"
          onClick={() => setOpen(!open)}
          aria-controls={`${slugifyText(filter.label)}-collapse`}
          aria-expanded={index === 0 ? !open : open}
          className="collapse-indicator-plus w-100 text-start text-decoration-none py-3 px-0 text-5-medium color-base"
        >
          {filter.label}
        </Button>
      </Card>
      <Collapse
        in={index === 0 ? !open : open}
        id={`${slugifyText(filter.label)}-collapse`}
      >
        <div className="ms-2">
          {filter.options &&
            filter.options.map((option) => (
              <div
                key={slugifyText(option.label)}
                onClick={() => navigate(option.href)}
                className="py-1"
              >
                <Card className="p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      {option.icon && (
                        <FontAwesomeIcon
                          icon={option.icon}
                          className={`me-2 fs--3`}
                        />
                      )}
                      <Text className="text-5-medium color-base">
                        {option.label}
                      </Text>
                    </div>

                    <FontAwesomeIcon
                      icon="chevron-right"
                      className="ms-1 fs--2"
                    />
                  </div>
                </Card>
              </div>
            ))}
        </div>
      </Collapse>
    </li>
  );
};

ListComponents.propTypes = {
  index: PropTypes.number,
  filter: PropTypes.shape({
    label: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      })
    ),
  }),
  handleFilterOptions: PropTypes.func,
  filterOptions: PropTypes.array,
};

export default ListComponents;
