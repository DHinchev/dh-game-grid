import React, { Component } from 'react';

    class GameItem extends Component {
      
        clickEventViewHandler = (e) => {
            e.stopPropagation();
            this.props.handleItem(e);
        }
        
        render() {
            const {image, title, id} = this.props;
            return (
                <div className={`game-item${id}`} onClick={this.clickEventViewHandler} data-index={id}>
                    <img 
                        className='item game-item-thumnnail'
                        data-index={id}
                        alt='game thumbnail'
                        draggable='false'
                        src={image} />
                    <h3 className='game-item-name' data-index={id}>{title}</h3>
                </div>
            );
        }
    }
  
  export default GameItem;