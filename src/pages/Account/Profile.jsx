import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myActions } from "../../http/actions/myAction";

const Profile = memo(() => {
	const accountData = useSelector(state => state?.accountData);
	const accountResponse = useSelector(state => state?.account);
	const [signUpData, setSignupData] = useState(accountData);
	const [showSavedMsg, setShowSavedMsg] = useState(false);

	const dispatch = useDispatch();

	const handleInputChange = useCallback(event => {
		const id = event.target.name;
		const value = event.target.value;
		setSignupData(prevState => {
			const returnObj = {...prevState};
			returnObj[id] = value;
			return (returnObj);
		});
	}, []);

	const handleSubmit = useCallback(event => {
		event.preventDefault();
		dispatch(myActions.editAccount(signUpData));
	}, [signUpData]);

	useEffect(() => {
		if (accountResponse?.success) {
			setShowSavedMsg(true);
			// disappear after 2 seconds
			setTimeout(() => {setShowSavedMsg(false)}, 2000);
		}
	}, [accountResponse]);

	return (
		<form onSubmit={event => handleSubmit(event)} className="profile-edit">
			<div className="portrait-container">
				<div className="portrait"></div>
				<button type="button" className="generic-icon edit">
					<span className="accessibility-hidden">edit portrait</span>
				</button>
			</div>
			<div className="row align-content-between">
				<div className="col-6">
					<div className="row mr-30">
						<label htmlFor="firstName">First Name</label>
					</div>
					<div className="row mr-30">
						<input
							name="firstName"
							id="firstName"
							type="text"
							value={signUpData?.firstName}
							onChange={event => handleInputChange(event)}
							required
							maxLength={35}
						/>
					</div>
				</div>
				<div className="col-6">
					<div className="row mr-30">
						<label htmlFor="lastName">Last Name</label>
					</div>
					<div className="row mr-30">
						<input
							name="lastName"
							id="lastName"
							type="text"
							value={signUpData?.lastName}
							onChange={event => handleInputChange(event)}
							required
							minLength={5}
							maxLength={16}
						/>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<div className="row mr-30">
					<label htmlFor="email">Email</label>
				</div>
				<div className="row mr-30">
					<input
						name="email"
						id="email"
						type="email"
						value={signUpData?.email}
						onChange={event => handleInputChange(event)}
						required
					/>
				</div>
				</div>
			</div>
			<div className="row mt-40">
				<button type="submit" className="btn-green" disabled={accountResponse?.isLoading}>
					{
						accountResponse?.isLoading ? 'Loading...' : 'Save Changes'
					}
				</button>
			</div>
			{
				showSavedMsg && <div className="row text-center alert">Account data successfully saved!</div>
			}
		</form>
	);
});

export default Profile;
