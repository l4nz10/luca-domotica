import React from 'react';

// Redux stuff
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import socketMiddleware from './redux/middleware/socketMiddleware';

import Home from './Home';

import './App.css';

const store = createStore(reducers, applyMiddleware(socketMiddleware));

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
