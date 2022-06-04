import { useCallback, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tabs from "../components/Tabs";
import { ROOT } from "../const/urls";
import { BILLING, MYPLAN, PROFILE } from "../const/tabSections";
import { myActions } from "../http/actions/myAction";
import Billing from "./Account/Billing";
import MyPlan from "./Account/MyPlan";
import Profile from "./Account/Profile";

// Same as Editing, Tab manages the internal navigation
// Logout clears the login data, so you can logon again

const Account = memo(() => {
	const tabs = [PROFILE, MYPLAN, BILLING];
	const [currentTab, setCurrentTab] = useState(tabs[0]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = useCallback(() => {
		dispatch(myActions.logout());
		navigate(ROOT);
	});
	return (
		<div className="editing-container">
			<div className="editing-header flex-container">
				<div className="col-8">
					<h2>My Account</h2>
				</div>
				<div className="col-4 text-right">
					<button className="btn-link btn-red" onClick={() => handleLogout()}>Logout</button>
				</div>
			</div>
			<div className="editing-core accounts">
				<Tabs tabArray={tabs} current={currentTab} setCurrent={setCurrentTab} />
				<div className="editing-core-section-container">
					{
						currentTab === PROFILE && <Profile />
					}
					{
						currentTab === MYPLAN && <MyPlan />
					}
					{
						currentTab === BILLING && <Billing />
					}
				</div>
			</div>
		</div>
	);
});

export default Account;
