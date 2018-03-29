import React from 'react'
import Card from './Card'
import styles from './CardList.scss'

class CardList extends React.Component {
  render() {
    return (
      <div class="list-news-cal">
        <div class="inner">
          <Card />
        </div>
      </div>
    );
  }
}

export default CardList
