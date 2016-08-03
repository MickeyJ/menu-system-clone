import React from 'react'
import {Link} from 'react-router'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import {MenuTab} from '../../src/components'

expect.extend(expectJSX);

describe('MenuTab Component', () =>{

  const renderer = TestUtils.createRenderer();

  it('should render without "props.children"', () =>{
    renderer.render(
      <MenuTab
        to="#overview"
        text="OVERVIEW"
        className="bg-blue txt-white"
      />
    );

    const actual = renderer.getRenderOutput();

    const expected = (
      <div className="menu-tab bg-blue txt-white" onClick={null} >
        <Link className="menu-tab-title" style={{}} to="#overview" >
          OVERVIEW
        </Link>
      </div>
    );

    expect(actual).toIncludeJSX(expected)
  });


  it('should render with "props.children"', () =>{
    renderer.render(
      <MenuTab
        to="#workspace"
        text="WORKSPACE"
        className="bg-orange txt-white dropable">

        <div className="sub-links">
          <p>
            <a href="#workspace#features">FEATURES</a>
          </p>
          <p>
            <a href="#workspace#pricing">PRICING</a>
          </p>
        </div>

      </MenuTab>
    );

    const actual = renderer.getRenderOutput();

    const expected = (
      <div className="menu-tab bg-orange txt-white dropable" onClick={null} >
        <Link className="menu-tab-title" style={{}} to="#workspace" >
          WORKSPACE
        </Link>
        <div className="sub-links">
          <p>
            <a href="#workspace#features"> FEATURES </a>
          </p>
          <p>
            <a href="#workspace#pricing"> PRICING </a>
          </p>
        </div>
      </div>
    );

    expect(actual).toIncludeJSX(expected)
  });

});
