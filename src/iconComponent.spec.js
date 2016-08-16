import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

const Icon = ({name}) => (
  <i className={name}></i>
);

describe('Icon', () => {

  it('it should render the icon', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Icon name='fa fa-facebook' />);
    const actual = renderer.getRenderOutput().props.className.includes('fa-facebook');
    const expected = true;
    expect(actual).toEqual(expected);
  });

});
