/*globals COURSES:true */
import React, { Component } from 'react'
import { connect as globalStoreConnect } from 'globalStore/reactBindings'

import { connect } from 'react-redux'

import { increment, decrement } from '../store'
import { increment as incrementGlobal, decrement as decrementGlobal } from 'globalStore'

class App extends Component {
  render() {
    const { count, increment, decrement, countGlobal, incrementGlobal, decrementGlobal } = this.props
    console.log(this.props)
    return (
      <div>
        <h5>Local store</h5>
        count: {count}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <h5>Global store</h5>
        count: {countGlobal}
        <button onClick={incrementGlobal}>increment</button>
        <button onClick={decrementGlobal}>decrement</button>

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

const mapGlobalStateToProps = (state /*, ownProps*/) => {
  return {
    countGlobal: state.count
  }
}
const mapGlobalDispatchToProps = { incrementGlobal, decrementGlobal }

module.exports = globalStoreConnect(
  mapGlobalStateToProps,
  mapGlobalDispatchToProps
)(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
