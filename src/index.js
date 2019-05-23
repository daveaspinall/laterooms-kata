import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import App from './components/App'

const store = createStore(
  rootReducer,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const hotels = [
  {
    name: 'hotelone',
    starRating: 5,
    facilities: ['car park', 'pool'],
  },
  {
    name: 'hoteltwo',
    starRating: 3,
    facilities: ['car park', 'gym'],
  },
  {
    name: 'hotelthree',
    starRating: 3,
    facilities: [],
  },
]

render(
  <Provider store={store}>
    <App hotels={hotels} />
  </Provider>,
  document.getElementById('root')
)
