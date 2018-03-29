import React from 'react'
import CardList from './CardList'
import Sidebar from './Sidebar'
import styles from './PostWrap.scss'


class PostWrap extends React.Component {
  render() {
    return (
      <div id="post-wrap">
        <section class="wrap-outer" id="contents">
          <div class="wrap-inner">
            <div class="content col-double">
              <CardList />
              <Sidebar />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PostWrap
