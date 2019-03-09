import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './style/Common.css';

import Header from './header/Header';
import Drawer from './drawer/Drawer';
import Home from './home/Home';
import Overview from './overview/Overview';
import News from './news/News';
import Team from './team/Team';
import Pulication from './publication/Pulication';
import FAQ from './faq/FAQ';

class App extends Component {

  render() {
    return (
      <div className="outer-container-wrapper">
        <Drawer ref={(ref) => this.drawer = ref} />
        <Header onClick={() => this.drawer.showDrawer()} />
        <Switch>
          <Route exact={true} path={'/'} component={Home} />
          <Route exact={true} path={'/overview'} component={Overview} />
          <Route exact={true} path={'/news'} component={News} />
          <Route exact={true} path={'/team'} component={Team} />
          <Route exact={true} path={'/publication'} component={Pulication} />
          <Route exact={true} path={'/faq'} component={FAQ} />
        </Switch>
      </div>
    );
  }
}

export default App;
