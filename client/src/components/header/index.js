import React, { Component } from 'react';
import Counter from '../counter';
import './index.css';
//import Axios from 'axios';
//import Configs from '../../config';

class Index extends Component {
  render() {
    return (
      <>
      <header className="header">
        <h1 className="headerTitle">{this.props.title}</h1>
        <div className="counters">
          <Counter title="A fazer" amount={this.props.unfinished}/>
          <Counter title="Resolvidas" amount={this.props.finished}/>
        </div>
        {/* <img src={HeaderImage} /> */}
      </header>
      </>
    );
  }
}

export default Index;