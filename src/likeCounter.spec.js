import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

const LikeCounter = () => (
  <a>click on me</a>
);

describe('LikeCounter', () => {

  it('it should type "a"', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter />);
    const actual = renderer.getRenderOutput().type;
    const expected = 'a';
    expect(actual).toEqual(expected);
  });

});
