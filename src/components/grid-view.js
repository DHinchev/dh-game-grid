import React, { Component } from 'react';
import GameItem from './game-item';
import GridTitle from './grid-title';

  class GridView extends Component {

  clickEventHandler = (e) => {
    e.stopPropagation();
    this.props.handleItem(e);
  }

    render() {
      const {data} = this.props;
      return (
        <div>
          <GridTitle data={data} />
            {data.categories.map(section => {
              return (
                <div className='grid-view'>
                  {section.games.map((game, index) => {
                    return (
                      <GameItem key={index} image={game.thumb} title={game.name} id={game.id} handleItem={this.clickEventHandler} />
                    )
                  })}
                </div>
              )
            })}
        </div>
      );
    }
  }
  
  export default GridView;