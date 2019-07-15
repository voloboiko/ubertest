import React from 'react';
import SearchInput from './SearchInput';
import { shallow } from 'enzyme';

describe('<SearchInput /> Tests', () => {
  it('Calls callback on change of an input', () => {
    const onChangeCallbackMock = jest.fn();
    const event = {
      target: {value: 'dogs'}
    };

    const component = shallow(<SearchInput onChangeCallback={onChangeCallbackMock}/>);
    component.find('input').simulate('change', event);
    expect(onChangeCallbackMock).toBeCalledWith('dogs');
  });
});
