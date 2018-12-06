import React, { Component } from 'react';
import GridView from './components/grid-view';
import GridTitle from './components/grid-title';
import ActiveItemView from './components/active-item';
import './styles/games-grid.css';
import Data from './assets/games-data.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      openActiveItem: false,
      activeItemIndex: null
    };
} 

  handleItemClick = (e) => {
    this.setState({
      openActiveItem: true,
      activeItemIndex: e.target.dataset.index - 1
    });
  }

  closeActiveView = () => {
    this.setState({
      openActiveItem: false,
      activeItemIndex: null
    });
  }

  render() {
    const {openActiveItem} = this.state;

    if (openActiveItem === false) {
      return (
        <div className='app'>
          <GridTitle data={Data} />
          <GridView data={Data} handleItem={this.handleItemClick}/>
        </div>
      );
    }

    if (openActiveItem) {
      return (
        <div className='app'>
          <ActiveItemView data={Data} activeItemIndex={this.state.activeItemIndex} handleItemClick={this.closeActiveView} />
        </div>
      );
    }
  }
}

export default App;
