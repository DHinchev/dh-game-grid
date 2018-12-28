import React, { Component } from 'react';
import { Link } from 'react-router-dom';

    class GameItem extends Component {
      
        clickEventViewHandler = (e) => {
            e.stopPropagation();
            this.props.handleItem(e);
        }
        
        render() {
            const {image, title, id} = this.props;
            return (
                <div className={`game game-item${id}`} onClick={this.clickEventViewHandler} data-index={id}>
                    <Link to={`/activeGame/${id}`}>
                        <img 
                            className='item game-item-thumbnail'
                            data-index={id}
                            alt='game thumbnail'
                            draggable='false'
                            src={image} />
                    </Link>
                    <Link to={`/activeGame/${id}`}>
                        <h3 className='game-item-name' data-index={id}>{title}</h3>
                    </Link>
                </div>
            );
        }
    }
  
  export default GameItem;