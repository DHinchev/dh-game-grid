import React, { Component } from 'react';
import Close from '../assets/close.svg';
import Spinner from '../assets/spinner.gif';

class ActiveItemView extends Component {

    closeActiveView = (e) => {
        e.stopPropagation();
        this.props.handleItemClick(e);
    }

    render() {
    const {data, activeItemIndex} = this.props;
      return (
        <div className='active-item'>
            <div className='active-item-playbox'>
                <img
                className='close-icon'
                width='35px'
                height='35px'
                alt='close icon'
                src={Close}
                onClick={this.closeActiveView}
                />

                <img
                className='spin-icon'
                alt='spinner icon'
                src={Spinner}
                />
            </div>
            <div className='active-item-details'>
                <img
                className='active-item-icon'
                alt='active game icon'
                src={data.categories[0].games[activeItemIndex].thumb}
                onClick={this.handleItem}
                />

                <h3 className='active-item-title'>{data.categories[0].games[activeItemIndex].name}</h3>
                <p className='active-item-description'>{data.categories[0].games[activeItemIndex].description}</p>
            </div>
        </div>
      );
    }
  }
  
  export default ActiveItemView;