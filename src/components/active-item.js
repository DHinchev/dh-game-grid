import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Close from '../assets/close.svg';
import Spinner from '../assets/spinner.gif';

class ActiveItemView extends Component {

    state = {
        activeGame: localStorage.getItem('currentGame')
    };

    render() {
    const {data} = this.props;
      return (
        <div className='active-item'>
            <div className='active-item-playbox'>
                <Link to={`/`}>
                    <img
                    className='close-icon'
                    width='35px'
                    height='35px'
                    alt='close icon'
                    src={Close}
                    />
                </Link>
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
                src={data.categories[0].games[this.state.activeGame].thumb}
                onClick={this.handleItem}
                />

                <h3 className='active-item-title'>{data.categories[0].games[this.state.activeGame].name}</h3>
                <p className='active-item-description'>{data.categories[0].games[this.state.activeGame].description}</p>
            </div>
        </div>
      );
    }
  }
  
  export default ActiveItemView;