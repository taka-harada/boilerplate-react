import React from 'react'
import styles from './Footer.scss'


class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <ul class="foot-menu">
          <li><a href="#">個人情報保護方針</a></li>
          <li><a href="#">個人情報の取り扱いについて</a></li>
          <li><a href="#">電子公告</a></li>
        </ul>
        <div class="foot-logo"></div>
        <address>© Hivelocity inc.</address>
      </footer>
    );
  }
}

export default Footer
