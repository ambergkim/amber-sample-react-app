import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {dataInflate} from '../../actions/shark-actions.js';
import reducers from '../../reducers/';

import HomePage from '../home/home.jsx';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

console.log('fetch url', process.env.REACT_APP_BASE_URL);

fetch(process.env.REACT_APP_BASE_URL + '/api')
.then(res => {
  return res.json();
})
.then(json => {
  console.log('fetched from server', json);
  store.dispatch(dataInflate(json[0]))
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    )
  }
}

export default App;