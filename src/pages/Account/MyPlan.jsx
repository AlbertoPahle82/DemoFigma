import { memo, useCallback, useState } from "react";
import { myPlanData } from "./data/myPlanData";

const MyPlan = memo(() => {
	const [plan, setPlan] = useState(myPlanData);
	const currentPlanIndex = plan.findIndex(el => el.selected);
	const handleChangePlan = useCallback(index => {
		const newArr = [...plan];
		newArr.forEach((e, i) => {
			e.selected = false;
			if (index === i) {
				e.selected = true;
			}
		});
		setPlan([...newArr]);
	}, [plan]);
	return (
		<div>
			{
				plan?.length && plan?.map(
					(element, index) => <div
						key={'planData_'+index}
						className={`plan-container ${element?.selected ? 'selected' : ''}`}
					>
						<h3>{element?.title}</h3>
						<ul>
							{
								element?.options?.length > 0
								&& element?.options?.map(
									(el, i) => <li key={'planotion_'+i} className="plan-option">
										<i className={`plan-icon ${el?.available ? 'icon-yes' : 'icon-no'}`} />
										<span>{el?.name}</span>
									</li>
								)
							}
						</ul>
						<div>
							<span className="currency">$</span>
							<span className="price">{element?.price}</span>
						</div>
						<div>
							{
								currentPlanIndex === index && 'Current Plan'
							}
							{
								currentPlanIndex !== index && <button
									className="btn-grey blue-text"
									onClick={() => handleChangePlan(index)}
								>
									{
										currentPlanIndex > index && 'Downgrade'
									}
									{
										currentPlanIndex < index && 'Upgrade'
									}
								</button>
							}
						</div>
					</div>
				)
			}
		</div>
	);
});

export default MyPlan;
