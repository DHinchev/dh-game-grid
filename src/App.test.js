import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import App from './app';
import GridView from './components/grid-view';
import GameItem from './components/game-item';
import ActiveItemView from './components/active-item';
import Data from './assets/games-data.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  it('start with openActiveItem as false', () => {
    const container = shallow(<App />);
    const activeItemState = container.state().openActiveItem;
    expect(activeItemState).toEqual(false);
  });

  it('start with activeItemIndex as null', () => {
    const container = shallow(<App />);
    const activeItemIndexState = container.state().activeItemIndex;
    expect(activeItemIndexState).toEqual(null);
  });
