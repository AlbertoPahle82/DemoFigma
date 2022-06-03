import { Fragment, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROOT } from '../const/urls';
import { menu } from './menu';

const Navigator = memo(() => {
	const navigate = useNavigate();
	const location = useLocation();
	const handleClickMenu = useCallback(url => {
		navigate(url);
	});

	const credentials = useSelector(state => state?.credentials);
	console.info('LOCATION', location);

	return (
		<div className="navigator-container">
			{
				menu?.length > 0 && menu.map(
					(element, index) =>
						{
							if (element.name === 'home' && credentials && Object.keys(credentials)?.length > 0) {
								return <span key={'menu_item_' + index} className="navigator-item">
									<i className={`figma-icon ${element.name}`} />
									<span className="accessibility-hidden">{element.name}</span>
								</span>
							} else {
								return (
									location?.pathname === ROOT && element.visibleAtLogin === false
										? <Fragment key={'menu_item_' + index}></Fragment>
										: <button onClick={() => handleClickMenu(element.url)} key={'menu_item_' + index} className="navigator-item">
											<i className={`figma-icon ${element.name}`} />
											<span className="accessibility-hidden">{element.name}</span>
										</button>
								)
							}
						}
				)
			}
		</div>
	)
});

export default Navigator;
