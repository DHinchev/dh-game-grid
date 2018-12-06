import React, { Component } from 'react';
import GameItem from './game-item';

  class GridView extends Component {

  clickEventHandler = (e) => {
    e.stopPropagation();
    this.props.handleItem(e);
  }

    render() {
      const {data} = this.props;
      return (
        <div className='grid-view'>
          {data.categories[0].games.map((game, index) => {
            return (
              <GameItem key={index} image={game.thumb} title={game.name} id={game.id} handleItem={this.clickEventHandler} />
            )
          })}
        </div>
      );
    }
  }
  
  export default GridView;