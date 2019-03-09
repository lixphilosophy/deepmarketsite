import React, { Component } from 'react';

import Data from './Data';

class Home extends Component {
  constructor(prop) {
    super(prop);
    this.prop = prop;

    
    this.state = {
      dat: Data,
      bgStyle: {

      }
    };
  }

  componentDidMount() {
    document.title = "DeepMarket | Home"
  }

  render() {

    return (
      <div className="inner-container-wrapper">
        <div className="navbar-spam"></div>
        <div className="home-title container text-center font-bold transition-all-200">
          <div className="row m-0">
            <span className="col-1 px-0"></span>
            <div className="col-10">{this.state.dat[0]}</div>
            <span className="col-1 px-0"></span>
          </div>
        </div>
        <div className="home-subtitle container text-center pt-2 transition-all-200">
          <div className="row m-0">
            <span className="col-1 px-0"></span>
            <div className="col-10">{this.state.dat[1]}</div>
            <span className="col-1 px-0"></span>
          </div>
        </div>
        <div className="absolute top-0 all-100 home-bg" style={{backgroundImage: `url(${require('../../static/img/' + this.state.dat[2])})`}}></div>
      </div>
    );
  }
}

export default Home;
