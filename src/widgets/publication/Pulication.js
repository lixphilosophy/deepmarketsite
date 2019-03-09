import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

import {HeadTitle, PageTitle, ImageIndex, Data} from './Data';

class Pulication extends Component {

  constructor(prop) {
    super(prop);
    this.prop = prop;

    this.state = {
      title: PageTitle,
      dat: Data,
      imageIndex: ImageIndex
    };
  }

  componentDidMount() {
    document.title = HeadTitle
  }

  render() {

    const article = this.state.dat.map((elem, index) => {
      var uniIndex = 'elem'+index;
      if (this.state.imageIndex.includes(index)) {
        var imageSrc = require('../../static/img/' + elem[0]);
        return(<div className="text-center" key={uniIndex}><img src={imageSrc} className={elem[1]} alt=""/></div>);
      } else {
        return (<div key={uniIndex} className={elem[1]}>{ReactHtmlParser(elem[0])}</div>);
      }
    });

    return (
      <div className="inner-container-wrapper">
        <div className="navbar-spam"></div>
        <div className="container pt-2 pb-1 text-center article-title font-bold">{this.state.title}</div>
        <div className="container article p-0">
          <div className="row m-0 pb-3">
            <span className="col-1 px-0"></span>
            <div className="col-10 px-0">
              {article}
            </div>
            <span className="col-1 px-0"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Pulication;
