import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EDITING, ROOT } from "../const/urls";
import { myActions } from "../http/actions/myAction";

const Signup = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [passwordStrength, setPasswordStrength] = useState();
	const [signUpData, setSignupData] = useState(
		{
			fullName: '',
			email: '',
			password: ''
		}
	);
	const loginResponse = useSelector(state => state?.login);

	const handleInputChange = useCallback(event => {
		const id = event.target.name;
		const value = event.target.value;
		setSignupData(prevState => {
			const returnObj = {...prevState};
			returnObj[id] = value;
			return (returnObj);
		});
		if (id === 'password') {
			if (value?.length > 8) {
				setPasswordStrength('Strong');
			} else if (value?.length >= 5 ) {
				setPasswordStrength('Poor');
			} else {
				setPasswordStrength('Error');
			}
		}
	}, []);

	const handleSubmit = useCallback(event => {
		event.preventDefault();
		dispatch(myActions.login(signUpData));
	}, [signUpData]);

	useEffect(() => {
		if (loginResponse?.success) {
			navigate(EDITING);
		}
	}, [loginResponse]);

	return (
		<div className="login-container">
			<div className="login-title">
				<h2>Create an account</h2>
			</div>
			<div className="login-form">
				<form onSubmit={event => handleSubmit(event)}>
				<div className="row">
						<label htmlFor="fullName">Full name</label>
					</div>
					<div className="row">
						<input
							name="fullName"
							id="fullName"
							type="fullName"
							value={signUpData?.fullName}
							onChange={event => handleInputChange(event)}
							required
							maxLength={35}
						/>
					</div>
					<div className="row">
						<label htmlFor="email">Email address</label>
					</div>
					<div className="row">
						<input
							name="email"
							id="email"
							type="email"
							value={signUpData?.email}
							onChange={event => handleInputChange(event)}
							required
						/>
					</div>
					<div className="row">
						<label htmlFor="password">New Password</label><span className={`passStrength ${passwordStrength}`}>{passwordStrength}</span>
					</div>
					<div className="row">
						<input
							name="password"
							id="password"
							type="password"
							value={signUpData?.password}
							onChange={event => handleInputChange(event)}
							required
							minLength={5}
							maxLength={16}
						/>
					</div>
					<div className="row text-center">
						<button className="btn-green" disabled={loginResponse?.isLoading}>
							{
								loginResponse?.isLoading ? 'Loading...' : 'Signup'
							}
						</button>
					</div>
				</form>
			</div>
			<div className="login-signup">
				<label htmlFor="signup">Already user?</label><button id="signup" className="btn-link" onClick={() => navigate(ROOT)}>Login</button>
			</div>
		</div>
	);
}

export default Signup;
