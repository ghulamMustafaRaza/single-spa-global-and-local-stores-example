import React from 'react';
import { Provider, connect } from 'react-redux'
import { store } from './index'

const globalStoreContext = React.createContext(null);


const ProviderExtended = (props) => <Provider store={store} context={globalStoreContext} {...props} />

function connectExtended(mapStateToProps, mapDispatchToProps, mergeProps, options = {}) {
    return connect(mapStateToProps, mapDispatchToProps, mergeProps, { ...options, context: globalStoreContext })
}

export { connectExtended as connect, ProviderExtended as Provider }