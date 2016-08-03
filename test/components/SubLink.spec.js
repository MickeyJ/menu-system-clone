import React from 'react'
import {Link} from 'react-router'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import {SubLink} from '../../src/components'

expect.extend(expectJSX);

describe('SubLink Component', () =>{

  const renderer = TestUtils.createRenderer();

  it('should render correctly', () =>{

    renderer.render( <SubLink to="#workspace#pricing" text="PRICING" /> );

    const actual = renderer.getRenderOutput();

    const expected = (
      <Link className="app-link hoverable" style={{}} to="#workspace#pricing" >
        <span> PRICING </span>
      </Link>
    );

    expect(actual).toIncludeJSX(expected)

  });

});
