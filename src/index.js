import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducers from './reducers';
import middleware from './middleware';
import App from './components/App';

const store = createStore(reducers, middleware);

localStorage.setItem('user', null);
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

