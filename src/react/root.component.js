import React from 'react';
import { Provider } from 'react-redux'
import App from './components/App'
import './stubs/COURSES';

import { store } from './store'



export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
