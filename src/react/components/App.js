/*globals COURSES:true */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../store'

class App extends Component {
  render() {
    const { count, increment, decrement } = this.props
    console.log(this.props)
    return (
      <div>
        <h5>Local store</h5>
        count: {count}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>

      </div>
    )
  }
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = { increment, decrement }

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
