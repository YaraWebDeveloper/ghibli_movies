// import dependencies
import React from 'react';

// import seacher
import Searcher from './search/Searcher.react'

// class
class Header extends React.Component {
  constructor() {
    super();
  }

  // render
  render() {
    // _return
    return (<header id="main-header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={global.conf.mediaApi + "img/test/logo_img.png"} className="__img-logo"/>
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start __only-item">
            <div className="navbar-item">
              <Searcher/>
            </div>
          </div>

          <div className="navbar-end">
            <div className="_in-logo-right">
              <img src="https://ghibliapi.herokuapp.com/images/logo.svg"/>
            </div>
          </div>
        </div>
      </nav>
    </header>)
  }
}

// export
export default Header;
