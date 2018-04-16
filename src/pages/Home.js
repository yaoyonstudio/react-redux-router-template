import React, { Component } from 'react';
import MyMenu from '../components/common/MyMenu'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="main Home">
        <MyMenu />
        <div className="content">
          <h2>Home Page</h2>
        </div>
      </div>
    );
  }
}

export default Home;
