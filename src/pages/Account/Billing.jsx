import { memo, useRef, useState } from "react";
import { billingData } from "./data/billingData";

const Billing = memo(() => {
	const [billingDataArr, setBillingDataArr] = useState(billingData);
	const order = useRef(false);

	const sortBillingData = key => {
		// sorting function with pure J
		order.current = !order.current;
		const newBillingDataArr = [...billingDataArr];
		if (order.current) {
			newBillingDataArr.sort(( a, b ) => {
				if ( a[key] < b[key] ) {
					return -1;
				}
				if ( a[key] > b[key] ) {
					return 1;
				}
				return 0;
			});
		} else {
			newBillingDataArr.reverse(( a, b ) => {
				if ( a[key] < b[key] ) {
					return -1;
				}
				if ( a[key] > b[key] ) {
					return 1;
				}
				return 0;
			});
		}
		setBillingDataArr([...newBillingDataArr]);
	};

	return (
		<div className="billing-container">
			<table>
				<thead>
					<tr>
						<th onClick={() => sortBillingData('refId')}>REFERENCE ID</th>
						<th onClick={() => sortBillingData('date')}>DATE</th>
						<th onClick={() => sortBillingData('amount')}>AMOUNT {order?.current}</th>
						<th>INVOICE</th>
					</tr>
				</thead>
				<tbody>
					{
						billingDataArr?.length > 0
						&& billingDataArr?.map(
							(element, index) => <tr key={'tr_billing_'+index}>
								<td>{element?.refId}</td>
								<td>{element?.date}</td>
								<td>{element?.amount}</td>
								<td className="text-center">
									<button className="btn-link">
										<i className={`generic-icon ${element?.invoice}`} />
										<span className="accessibility-hidden">{element?.invoice}</span>
									</button>
								</td>
							</tr>
						)
					}
				</tbody>
			</table>
		</div>
	);
});

export default Billing;
