import { memo, useCallback } from 'react';

const Tabs = memo(props => {
	const {tabArray, current, setCurrent} = props;

	const changeCurrentTab = useCallback(tabName => {
		setCurrent(tabName);
	}, [current]);

	return (
		<div className="editing-tabs">
			{
				tabArray?.length > 0 && tabArray.map(
					(tab, index) => <button
						key={'tab_'+tab+index}
						className={`btn ${tab === current ? 'selected' : ''}`}
						onClick={() => changeCurrentTab(tab)}
					>
						{tab}
					</button>
				)
			}
		</div>
	);
});

export default Tabs;
