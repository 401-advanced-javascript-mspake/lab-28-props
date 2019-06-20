import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './app';
import Message from './message';


Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Message', () => {
  it('renders correctly', () => {
    const message = shallow(<Message />);
    expect(message.find('p')).toBeTruthy();
    expect(message.find('img')).toBeTruthy();
  });
});
