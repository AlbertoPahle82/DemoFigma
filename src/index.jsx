import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './configuration/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ADDED REDUX and REACT ROUTER PROVIDERS / WRAPPERS

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
