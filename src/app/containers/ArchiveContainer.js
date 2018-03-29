import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import PostWrap from '../components/PostWrap/PostWrap'
import styles from './Base.scss'


class ArchiveList extends React.Component {
  render() {
    return (
      <div id="bst-wrap">
        <div class="page" id="hvc-wrap">
          <Header />
          <PostWrap />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ArchiveList
