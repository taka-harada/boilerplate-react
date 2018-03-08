import React, { Component } from 'react';
import { render } from 'react-dom';

var REQUEST_URL = 'https://dev.hivelocity.co.jp/wp-json/wp/v2/blog?per_page=5';

/* eslint no-unused-vars: 0 */
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount () {
    this.fetchData();
  }

  fetchData () {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          data: responseData
        });
      });
  }

  render () {
    return (
      <ul>
        {this.state.data.map((item) => {
          return (
            <li key={item.id}>
              {item.title.rendered}
            </li>
          );
        })}
      </ul>
    );
  }
}

render(<App/>, document.getElementById('app'));
