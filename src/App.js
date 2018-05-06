import * as React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// $FlowFixMe
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { Main } from './app/router'

const middleware = applyMiddleware(thunk, logger)
const store = createStore(rootReducer, middleware)

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
