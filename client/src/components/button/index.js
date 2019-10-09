import React, { Component } from 'react';
import './index.css';

class Buttom extends Component {
  constructor(props){
    super(props)

    this.state = {
      value: this.props.value,
      title: this.props.title
    }
  }

  render() {
    return (
      <div className="button">
        <button 
          onClick={this.props.onClick} 
          title={this.state.title}>
          {this.state.value}
        </button>
      </div>
    );
  }
}

export default Buttom;