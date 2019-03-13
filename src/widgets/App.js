import React, { Component } from 'react';
import { Router } from '@reach/router';

import './style/Common.css';

import Header from './header/Header';
import Drawer from './drawer/Drawer';
import Home from './home/Home';
import Overview from './overview/Overview';
import News from './news/News';
import Team from './team/Team';
import Publications from './publications/Publications';
import FAQ from './faq/FAQ';
import Page404 from './page404/page404';

class App extends Component {

  render() {
    return (
      <div className="outer-container-wrapper">
        <Drawer ref={(ref) => this.drawer = ref} />
        <Header onClick={() => this.drawer.showDrawer()} />
        <Router>
          <Home path='/' />
          <Overview path='/overview' />
          <News path='/news' />
          <Team path='/team' />
          <Publications path='/publications'  />
          <FAQ path='/faq' />
          <Page404 path='*' exact />
        </Router>
      </div>
    );
  }
}

export default App;
