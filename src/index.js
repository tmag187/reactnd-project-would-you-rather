import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducers from './reducers';
import middleware from './middleware';
import App from './components/App';

const store = createStore(reducers, compose(middleware,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

localStorage.setItem('user', null);
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

