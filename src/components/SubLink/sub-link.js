import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const subLink = (props) => (
  <Link
    to={props.to}
    className={`app-link hoverable`}>
    <span>{props.text}</span>
  </Link>
);

subLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default subLink