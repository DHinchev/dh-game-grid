import React, { Component } from 'react';

class GridTitle extends Component {
    render() {
      const {data} = this.props;
      return (
        <div className='grid-title'>
            <h2>{data.categories[0].title}</h2>
        </div>
      );
    }
  }
  
  export default GridTitle;