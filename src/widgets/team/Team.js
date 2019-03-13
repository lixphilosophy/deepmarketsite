import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

import {HeadTitle, PageTitle, Data} from './Data';

class Team extends Component {

  constructor(prop) {
    super(prop);
    this.prop = prop;

    this.state = {
      title: PageTitle,
      dat: Data,
    };
  }

  componentDidMount() {
    document.title = HeadTitle
  }

  render() {

    const gridItems = this.state.dat.map((item, index) => {
      var imageSrc = require('../../static/img/head-img/' + item.img);
      return (
        <div key={index} className="grid-item float-left transition-all-200">
            <div className="row m-0 height-100">
              <div className="col-5 height-100 d-flex">
                <img src={imageSrc} className="width-100 my-auto border-r-50" alt="" />
              </div>
              <div className="col-7 d-flex-column justify-center">
                <div className="grid-item-name font-bold pb-0h">{ReactHtmlParser(item.name)}</div>
                <div className="grid-item-desc">{item.position}</div>
                <div className="grid-item-desc">{item.desc}</div>
              </div>
            </div>
          </div>
      );
    })

    return (
      <div className="inner-container-wrapper">
        <div className="navbar-spam"></div>
        <div className="container pt-2 pb-1 text-center article-title font-bold">{this.state.title}</div>
        <div className="article width-100">
          <div className="container article-content p-0">
            <div className="row m-0 py-3 px-1">
              {gridItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
