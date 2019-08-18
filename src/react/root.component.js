import React from 'react';
import { Provider } from 'react-redux'
import { Provider as GlobalStoreProvider } from 'globalStore/reactBindings'
import App from './components/App'
import './stubs/COURSES';

import { store } from './store'



export default class Root extends React.Component {
  render() {

    return (
      <GlobalStoreProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </GlobalStoreProvider>
    );
  }
}
