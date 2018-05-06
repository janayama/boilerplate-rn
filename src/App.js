import * as React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// $FlowFixMe
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import Home from './app/home/HomeContainer'
import rootReducer from './reducers'

const middleware = applyMiddleware(thunk, logger)
const store = createStore(rootReducer, middleware)

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}
