import React from 'react'
import styles from './Card.scss'

class Card extends React.Component {
  render() {
    return (
      <div class="list-news-bloc">
        <a href="#">
          <div class="img-box"></div>
          <div class="txt-box">
            <div class="txt-box-inner">
              <p class="date">2017.08.01</p>
              <p class="txt">引っ越しました。</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Card
