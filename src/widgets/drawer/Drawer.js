import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Drawer.css';

const drawClose = {
  transform: 'translateX(100%)'
};

const drawOpen = {
  transform: 'translateX(0%)'
}

class Drawer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      navItem: [
        {id: 1, name: 'Overview', link: '/overview'},
        {id: 2, name: 'News', link: '/news'},
        {id: 3, name: 'Team', link: '/team'},
        {id: 4, name: 'Publications', link: '/publications'},
        {id: 5, name: 'FAQ', link: '/faq'}
      ]
    }
    this.showDrawer = this.showDrawer.bind(this);
    this.hideDrawer = this.hideDrawer.bind(this);
  }

  showDrawer() { this.setState({ drawerOpen: true }); }
  hideDrawer() { this.setState({ drawerOpen: false }); }

  
  render() {
    let drawerStyle = drawClose;

    const navItems = this.state.navItem.map((item, key) =>
      <li key={item.id} className="drawer-button">
        <NavLink onClick={this.hideDrawer} to={item.link} className="border-none width-100 text-decoration-none color-white font-medium text-right curspr-pointer">
          <div className="p-2">
            {item.name}
          </div>
        </NavLink>
      </li>
    );

    if (this.state.drawerOpen) {
      drawerStyle = drawOpen;
    }
    return (
      <div style={drawerStyle} className="drawer-wrapper fixed d-sm-none d-block height-100 top-0 right-0">
        <ul className="drawer m-0 p-0 d-block">
        
          <li className="transition-all-300">
            <button onClick={this.hideDrawer} className="width-100 height-100 drawer-button-close p-0 border-none cursor-pointer color-white">
              <i className="fas fa-arrow-right pl-1h"></i>
            </button>
          </li>
          
          {navItems}
        </ul>
      </div>
    );
  }
}

export default Drawer;
