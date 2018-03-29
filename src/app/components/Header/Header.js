import React from 'react';
import styles from './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div id="bst-wrap">
        <div class="page" id="hvc-wrap">
          <header class="wrap-outer">
            <div id="logo">
              <a href="#">ãƒ­ã‚´</a>
            </div>
            <nav>
              <div id="nav-menu">
                <ul>
                  <li><a href="#">NEWS</a></li>
                  <li><a href="#">SERVICE</a></li>
                  <li><a href="#">COMPANY</a></li>
                  <li><a href="#">CONTACT</a></li>
                  <li><a href="#">BLOG</a></li>
                  <li><a href="#">RECRUIT</a></li>
                  <li class="sns"><a href="#">f</a></li>
                  <li class="sns"><a href="#">t</a></li>
                  <li class="lang en"><a href="#">English</a></li>
                </ul>
              </div>
              <div id="nav-btn">
                <a href="#"><span></span><span></span><span></span></a>
              </div>
            </nav>
          </header>
        </div>
      </div>
    );
  }
}

export default Header
