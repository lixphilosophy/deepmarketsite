import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

import Data from './Data';

class Page404 extends Component {

  constructor(prop) {
    super(prop);
    this.prop = prop;

    this.state = {
      title: Data.pageTitle,
      dat: Data.article,
      others: Data.others
    };
  }

  componentDidMount() {
    document.title = Data.title
  }

  render() {

    const article = this.state.dat.map((elem, index) => {
      var uniIndex = 'elem'+index;
      return (<div key={uniIndex} className={elem[1]}>{ReactHtmlParser(elem[0])}</div>);
    });

    return (
      <div className="inner-container-wrapper">
        <div className="navbar-spam"></div>
        <div className="container pt-2 pb-1 text-center article-title font-bold">{this.state.title}</div>
        <div className="article width-100">
          <div className="container article-content p-0">
            <div className="row m-0 pb-3">
              <span className="col-1 px-0"></span>
              <div className="col-10 px-0">
                {article}
                <div className={this.state.others[3]}>
                  {this.state.others[0] + " "}
                  <b>{this.props.location.pathname}</b>
                  {" " + this.state.others[1]}
                </div>
                <div className={this.state.others[3]}>
                  {this.state.others[2]}
                </div>
              </div>
              <span className="col-1 px-0"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page404;
