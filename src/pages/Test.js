import React, { Component } from 'react';
import MyMenu from '../components/common/MyMenu'

class Test extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="main Test">
        <MyMenu />
				<div className="content">
					<h2>Test page</h2>
				</div>
      </div>
    );
  }
}

export default Test;
