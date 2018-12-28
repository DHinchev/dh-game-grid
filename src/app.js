import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GridView from './components/grid-view';
import ActiveItemView from './components/active-item';
import './styles/games-grid.min.css';
import Data from './assets/games-data.json';

class App extends Component {

  handleItemClick = (e) => {
    localStorage.setItem('currentGame',  (e.target.dataset.index - 1));
  }

  render() {
      return (
        <Router>
          <div className='app'>
            <Switch>
              <Route exact path="/" render={props => <GridView data={Data} handleItem={this.handleItemClick} {...props} />} />
              <Route path="/activeGame/:id" render={props => <ActiveItemView data={Data}  handleItemClick={this.closeActiveView} {...props} />} />
            </Switch>
          </div>
        </Router>
      );
  }
}

export default App;
