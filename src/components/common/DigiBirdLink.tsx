import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DigiBirdLink = ({
  to = '#!',
  icon = 'chevron-right',
  title,
  className
}) => {
  return (
    <Button variant="link" size="sm" as={Link} to={to} className={className}>
      {title}
      <FontAwesomeIcon icon={icon} className="ms-1 fs--2" />
    </Button>
  );
};

DigiBirdLink.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default DigiBirdLink;
