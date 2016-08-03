import React from 'react'
import {Link} from 'react-router'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import {Button} from '../../src/components'

expect.extend(expectJSX);


describe('Button Component', () =>{

  const renderer = TestUtils.createRenderer();

  it('should render as Link if "props.to" is preset', () =>{
    renderer.render(
      <Button
        to="#signup"
        text="Signup"
        className="bg-yellow txt-white clickable shadow"
      />
    );

    const actual = renderer.getRenderOutput();

    const expected = (
      <Link
        className="app-btn hoverable bg-yellow txt-white clickable shadow"
        style={{}}
        to="#signup">
        <span> Signup </span>
      </Link>
    );
    
    expect(actual).toIncludeJSX(expected)
  });


  it('should render as div if "props.to" is not preset', () =>{
    renderer.render(
      <Button
        text="Menu"
        className="txt-blue border-dark"
      />
    );

    const actual = renderer.getRenderOutput();

    const expected = (
      <div className="app-btn hoverable txt-blue border-dark" onClick={null} >
        <span> Menu </span>
      </div>
    );

    expect(actual).toIncludeJSX(expected)
  });
  
});
