import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { menu } from './menu';

const Navigator = memo(() => {
	const navigate = useNavigate();
	const handleClickMenu = useCallback(url => {
		navigate(url);
	});

	return (
		<div className="navigator-container">
			{
				menu?.length > 0 && menu.map(
					(element, index) =>
						<button onClick={() => handleClickMenu(element.url)} key={'menu_item_' + index} className="navigator-item">
							<i className={`figma-icon ${element.name}`} />
							<span className="accessibility-hidden">{element.name}</span>
						</button>
				)
			}
		</div>
	)
});

export default Navigator;
