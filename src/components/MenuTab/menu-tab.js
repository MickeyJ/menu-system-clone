import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const menuTab = (props) => (
  <div
    className={`menu-tab ${props.className}`}
    onClick={props.handleClick ? props.handleClick.bind(this) : null}>
    <Link to={props.to} className="menu-tab-title">{props.text || ''}</Link>
    {props.children}
  </div>
);

menuTab.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string
};

export default menuTab