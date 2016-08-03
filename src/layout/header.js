import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {Button} from '../components'

const Header = (props) => (
  <div id="app-header">

    <div id="app-logo">
      <Link to="/">
        <img src="images/logo.png" alt="Logo" />
      </Link>
    </div>

    <nav id="app-nav">

      <Button
        to="#signup"
        text="Signup"
        className="bg-yellow txt-white clickable shadow"
      />

      <Button
        to="#login"
        text="Login"
        className="clickable shadow"
      />

      <Button
        text={props.menuActive ? "X" : "Menu"}
        className="txt-blue border-dark"
        handleClick={props.toggleMenu.bind(this)}
      />

    </nav>

  </div>
);

Header.propTypes = {
  menuActive: PropTypes.bool.isRequired
};

export default Header