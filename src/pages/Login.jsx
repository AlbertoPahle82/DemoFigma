import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myActions } from "../http/actions/myAction";

const Login = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(myActions.myAction());
	}, [dispatch]);

	const response = useSelector(state => state?.myData || []);
	console.info('RESPONSE', response);

	return (
		<div>
			<h2>My react demo app</h2>
			{
				response?.length > 0 && !response.isLoading && response?.map(
					(item, index) => <div key={'id' + index}>ITEM {item}</div>
				)
			}
		</div>
	);
}

export default Login;
