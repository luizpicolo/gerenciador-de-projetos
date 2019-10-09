import React, { Component } from 'react';
import Counter from '../counter';
import './index.css';

class Index extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: this.props.title
    }
  }

  render() {
    return (
      <>
      <header className="header">
        <h1 className="headerTitle">{this.state.title}</h1>
        <div className="counters">
          <Counter title="A fazer" amount="22"/>
          <Counter title="Resolvidas" amount="300"/>
        </div>
        {/* <img src={HeaderImage} /> */}
      </header>
      </>
    );
  }
}

export default Index;