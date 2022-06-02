import { lazy, memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROOT, EDITING, ACCOUNT, VIDEOS, SIGNUP } from './const/urls';
import Navigator from './navigation/Navigator';
import Signup from './pages/Signup';

const Login = lazy(() => import('./pages/Login'));
const Editing = lazy(() => import('./pages/Editing'));
const Account = lazy(() => import('./pages/Account'));
const Videos = lazy(() => import('./pages/Videos'));

const App = memo(() => {
	return (
		<div className="flex-container">
			<div className="col-1">
				<Navigator/>
			</div>
			<div className='col-11'>
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
