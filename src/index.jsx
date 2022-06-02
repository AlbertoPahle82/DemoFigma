import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROOT, EDITING, ACCOUNT, VIDEOS } from './const/urls';
import { Provider } from 'react-redux';
import store from './configuration/store';

const Login = React.lazy(() => import('./pages/Login'));
const Editing = React.lazy(() => import('./pages/Editing'));
const Account = React.lazy(() => import('./pages/Account'));
const Videos = React.lazy(() => import('./pages/Videos'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={ROOT} element={<Login />} />
					<Route path={EDITING} element={<Editing />} />
					<Route path={ACCOUNT} element={<Account />} />
					<Route path={VIDEOS} element={<Videos />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	</Provider>
);
