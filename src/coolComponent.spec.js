import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

const CoolComponent = ({greeting}) => (
  <div>
    <h1>Greeting</h1>
    <div>{greeting}</div>
  </div>
);

describe('CoolComponent', () => {

  it('it should render the greeting', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CoolComponent greeting='hello world'/>);
    const actual = renderer.getRenderOutput();
    const expected = (
      <div>
        <h1>Greeting</h1>
        <div>hello world</div>
      </div>
    );
    expect(actual).toEqual(expected);
  });

  // Literally the same test but it uses ExpectJSX API
  it('it should render the greeting - with help from ExpectJSX', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CoolComponent greeting='hello world'/>);
    const actual = renderer.getRenderOutput();
    const expected = <div>hello world</div>;
    expect(actual).toIncludeJSX(expected);
  });

});
