import { lazy, memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROOT, EDITING, ACCOUNT, VIDEOS, SIGNUP } from './const/urls';
import Navigator from './navigation/Navigator';
import Signup from './pages/Signup';

const Login = lazy(() => import('./pages/Login'));
const Editing = lazy(() => import('./pages/Editing'));
const Account = lazy(() => import('./pages/Account'));
const Videos = lazy(() => import('./pages/Videos'));

// SECTIONS ARE DIVIDED BY ROUTES - IMPORTING COMPONENTS WITH LAZY FOR BETTER PERFORMANCE
// Memoizing most of components for better performances with memo()
// Navigator component stays outside the routes to "orchestrate" all the navigation

const App = memo(() => {
	return (
		<div className="flex-container">
			<div className="col-nav">
				<Navigator/>
			</div>
			<div className='col-content main-container'>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path={ROOT} element={<Login />} />
						<Route path={SIGNUP} element={<Signup />} />
						<Route path={EDITING} element={<Editing />} />
						<Route path={ACCOUNT} element={<Account />} />
						<Route path={VIDEOS} element={<Videos />} />
					</Routes>
				</Suspense> 
			</div>
		</div>
		
	);
});

export default App;
