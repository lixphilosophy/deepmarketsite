import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  constructor(prop) {
    super(prop);
    this.prop = prop;

    this.state = {
      navItem: [
        {name: 'Overview', link: '/overview' },
        {name: 'News', link: '/news' },
        {name: 'Team', link: '/team' },
        {name: 'Publication', link: '/publication' },
        {name: 'FAQ', link: '/faq' }
      ]
    };
  }

  render() {

    const navItems = this.state.navItem.map((item, key) =>
      <li key={'header'+key} className=" d-inline-block my-auto font-bold">
        <NavLink to={item.link} className="nav-item px-1 py-1h mx-1 text-decoration-none color-white">
          {item.name}
        </NavLink>
      </li>
    );

    return (
      <header className="navbar-fixed-top fixed top-0 width-100 transition-all-200">
        <div className="row m-0 height-100">
          <span className="col-1 px-0"></span>
          <div className="col-10 px-0">
            <div className="height-100 d-inline-flex">
              <Link to={'/'} className="logo my-auto transition-all-200" />
            </div>

            <div className="height-100 float-right d-block d-sm-none">
              <button onClick={this.prop.onClick} className="navbar-drawer-button cursor-pointer color-white bg-color-transparent border-none height-100 px-2">
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div className="height-100 float-right d-none d-sm-block">
              <ul className="height-100 px-0 m-0 d-flex">
                {navItems}
              </ul>
            </div>

          </div>
          <span className="col-1 px-0"></span>
        </div>
      </header>
    );
  }
}

export default Header;
