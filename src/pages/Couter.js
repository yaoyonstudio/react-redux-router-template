// import React from 'react';
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyMenu from '../components/common/MyMenu'

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../modules/counter';

class Couter extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
	
	componentDidMount () {
	}
	
  render() {
    return (
      <div className="main Couter">
				<MyMenu />
				<div className="content">
					<h2>Couter Page</h2>
					<p>Count: {this.props.count}</p>
					<p>
						<button onClick={this.props.increment} disabled={this.props.isIncrementing}>
							Increment
						</button>
						<button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>
							Increment Async
						</button>
					</p>

					<p>
						<button onClick={this.props.decrement} disabled={this.props.isDecrementing}>
							Decrement
						</button>
						<button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>
							Decrement Async
						</button>
					</p>

					<p>
						<button onClick={() => this.props.changePage()}>
							Go to home page via redux
						</button>
					</p>
				</div>
			</div>
    );
  }
}

// const Couter = props => (
	// <div className="main Couter">
		// <MyMenu />
		// <div className="content">
			// <h2>Couter Page</h2>
			// <p>Count: {props.count}</p>
			// <p>
				// <button onClick={props.increment} disabled={props.isIncrementing}>
					// Increment
				// </button>
				// <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
					// Increment Async
				// </button>
			// </p>

			// <p>
				// <button onClick={props.decrement} disabled={props.isDecrementing}>
					// Decrement
				// </button>
				// <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
					// Decrement Async
				// </button>
			// </p>

			// <p>
				// <button onClick={() => props.changePage()}>
					// Go to home page via redux
				// </button>
			// </p>
		// </div>
	// </div>
// );


const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/test')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Couter);
