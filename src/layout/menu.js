import React, {PropTypes} from 'react'

import {Button, MenuTab, SubLink} from '../components'

const Menu = (props) => (
  <div id="drop-menu" ref={(ref) => props.getSelf(ref)}>

    <MenuTab
      to="#overview"
      text="OVERVIEW"
      className="bg-blue txt-white"
    />

    <MenuTab
      to="#styleguide"
      text="STYLE GUIDE"
      className="bg-yellow txt-white dropable">

      <div className="sub-links">
        <p>
          <SubLink to="#styleguide#features" text="FEATURES" />
        </p>
        <p>
          <SubLink to="#styleguide#pricing" text="PRICING" />
        </p>
        <p>
          <SubLink to="#styleguide#examples" text="EXAMPLES" />
        </p>

        <Button
          to="#start_for_free"
          text="START FOR FREE"
          className="border-light txt-white"
        />
      </div>

    </MenuTab>

    <MenuTab
      to="#workspace"
      text="WORKSPACE"
      className="bg-orange txt-white dropable">

      <div className="sub-links">
        <p>
          <SubLink to="#workspace#features" text="FEATURES" />
        </p>
        <p>
          <SubLink to="#workspace#pricing" text="PRICING" />
        </p>

        <Button
          to="#start_for_free"
          text="START FOR FREE"
          className="border-light txt-white"
        />
      </div>

    </MenuTab>

    <MenuTab
      to="#enterprise"
      text="ENTERPRISE"
      className="bg-blue-light txt-white dropable">

      <div className="sub-links">
        <p>
          <SubLink to="#enterprise#overview" text="OVERVIEW" />
        </p>
        <p>
          <SubLink to="#enterprise#features" text="FEATURES" />
        </p>

        <Button
          to="#enterprise#contact_us"
          text="CONTACT US"
          className="border-light txt-white"
        />
      </div>

    </MenuTab>

    <MenuTab
      to="#company"
      text="COMPANY"
      className="bg-blue txt-white dropable">

      <div className="sub-links">
        <p>
          <SubLink to="#company#blog" text="BLOG" />
        </p>
        <p>
          <SubLink to="#company#about" text="ABOUT" />
        </p>
        <p>
          <SubLink to="#company#team" text="TEAM" />
        </p>
        <p>
          <SubLink to="#company#jobs" text="JOBS" />
        </p>
      </div>

    </MenuTab>

  </div>
);

Menu.propTypes = {
  getSelf: PropTypes.func.isRequired
};

export default Menu