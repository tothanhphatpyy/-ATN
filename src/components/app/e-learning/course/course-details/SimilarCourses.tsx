import React from 'react';
import { Card } from 'react-bootstrap';
import DigiBirdCardHeader from 'components/common/DigiBirdCardHeader';
import DigiBirdLink from 'components/common/DigiBirdLink';
import { courseData } from '@data/elearning/courseData';
import Slider from 'react-slick';
import CourseGrid from '../CourseGrid';

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1540,
      settings: {
        slidesToShow: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const SimilarCourses = () => {
  return (
    <Card className="mb-3 mb-lg-0">
      <DigiBirdCardHeader title="Similar Courses" titleTag="h6" />
      <Card.Body className="bg-light py-0">
        <Slider
          {...sliderSettings}
          className="full-height-slider slick-slider-arrow-inner similar-courses-slider"
        >
          {courseData.map(course => (
            <CourseGrid course={course} key={course.id} />
          ))}
        </Slider>
      </Card.Body>
      <Card.Footer className="text-end py-2">
        <DigiBirdLink
          title="All courses"
          to="/e-learning/course/course-grid"
          icon="external-link-alt"
          className="fw-medium"
        />
      </Card.Footer>
    </Card>
  );
};

export default SimilarCourses;
