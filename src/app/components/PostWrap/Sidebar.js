import React from 'react'
import styles from './PostWrap.scss'


class Sidebar extends React.Component {
  render() {
    return (
      <div class="side-cal">
        <div class="side-bar">
          <section class="cassette cst-category">
            <h2><span>CATEGORY</span></h2>
            <ul>
              <li><a href="#">NEWS</a></li>
              <li><a href="#">PRESS RELEASE</a></li>
            </ul>
          </section>
          <section class="cassette cst-archive">
            <h2><span>ARCHIVE</span></h2>
            <ul>
              <li><a href="#">2017</a></li>
              <li><a href="#">2016</a></li>
              <li><a href="#">2015</a></li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Sidebar
