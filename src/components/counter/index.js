import React, { Component } from 'react';
import './index.css';

class Index extends Component {
  render() {
    return (
      <div className="counter">
        <div className="counterAmount">{this.props.amount}</div> 
        <div className="counterTitle">{this.props.title}</div> 
      </div>
    );
  }
}

export default Index;