import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

import Data from './Data';

class Home extends Component {
  constructor(prop) {
    super(prop);
    this.prop = prop;

    this.state = {
      dat: Data
    };

    this.bgImage = null;
    this.bgImagePlacerholder = require('../../static/img/' + this.state.dat.bgImagePlaceholder);
  }

  componentDidMount() {
    document.title = Data.title;

    const imageLoader = new Image();
    
    imageLoader.src = require('../../static/img/' + this.state.dat.bgImage);

    imageLoader.onload = () => {
      this.bgImage.setAttribute(
        'style',
        `background-image: url(${require('../../static/img/' + this.state.dat.bgImage)})`
      );
      this.bgImage.classList.add('bg-fade-in');
    };
  }

  render() {

    return (
      <div className="inner-container-wrapper">
        <div className="navbar-spam"></div>
        <div className="home-title container text-center font-bold transition-all-200">
          <div className="row m-0">
            <span className="col-1 px-0"></span>
            <div className="col-10">{this.state.dat.pageTitle}</div>
            <span className="col-1 px-0"></span>
          </div>
        </div>
        <div className="home-subtitle container text-center pt-2 transition-all-200">
          <div className="row m-0">
            <span className="col-1 px-0"></span>
            <div className="col-10">{ReactHtmlParser(this.state.dat.pageSubtitle)}</div>
            <span className="col-1 px-0"></span>
          </div>
        </div>
        <div className="absolute top-0 all-100 home-bg" ref={bgImage => this.bgImage = bgImage}></div>
        <div className="absolute top-0 all-100 home-bg-placeholder" style={{backgroundImage: `url(${this.bgImagePlacerholder})`}}></div>
      </div>
    );
  }
}

export default Home;
