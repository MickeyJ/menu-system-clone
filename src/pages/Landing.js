import React, {PropTypes} from 'react'

const Landing = (props) => (
  <h1>{props.routeHash || 'home'}</h1>
);

Landing.propTypes = {
  routeHash: PropTypes.string
};

export default Landing