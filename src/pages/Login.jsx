import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EDITING, SIGNUP } from "../const/urls";
import { myActions } from "../http/actions/myAction";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loginData, setLoginData] = useState(
		{
			email: '',
			password: ''
		}
	);
	const loginResponse = useSelector(state => state?.login);

	const handleInputChange = useCallback(event => {
		const id = event.target.name;
		const value = event.target.value;
		setLoginData(prevState => {
			const returnObj = {...prevState};
			returnObj[id] = value;
			return (returnObj);
		});
	}, []);

	const handleSubmit = useCallback(event => {
		event.preventDefault();
		dispatch(myActions.login(loginData));
	}, [loginData]);

	useEffect(() => {
		if (loginResponse?.success) {
			navigate(EDITING);
		}
	}, [loginResponse]);

	return (
		<div className="login-container">
			<div className="login-title">
				<h2>Sign In</h2>
			</div>
			<div className="login-form">
				<form onSubmit={event => handleSubmit(event)}>
					<div className="row">
						<label htmlFor="email">Email address</label>
					</div>
					<div className="row">
						<input
							name="email"
							id="email"
							type="email"
							value={loginData?.email}
							onChange={event => handleInputChange(event)}
							required
						/>
					</div>
					<div className="row align-content-between mt-20">
						<label htmlFor="password">Password</label><button type="button" className="btn-link">Forgot?</button>
					</div>
					<div className="row">
						<input
							name="password"
							id="password"
							type="password"
							value={loginData?.password}
							onChange={event => handleInputChange(event)}
							required
						/>
					</div>
					<div className="row text-center mt-30">
						<button type="submit" className="btn-green" disabled={loginResponse?.isLoading}>
							{
								loginResponse?.isLoading ? 'Loading...' : 'Login'
							}
						</button>
					</div>
				</form>
			</div>
			<div className="login-signup">
				<label htmlFor="signup">New here? </label><button id="signup" className="btn-link" onClick={() => navigate(SIGNUP)}>Signup</button>
			</div>
		</div>
	);
}

export default Login;
