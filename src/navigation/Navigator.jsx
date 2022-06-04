import { Fragment, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROOT, SIGNUP } from '../const/urls';
import { menu } from './menu';

const Navigator = memo(() => {
	const navigate = useNavigate();
	const location = useLocation();
	const handleClickMenu = useCallback(url => {
		navigate(url);
	});

	const credentials = useSelector(state => state?.credentials);

	// innerheight - margin top and other stylistic margins
	const navHeight = window.innerHeight - 80;

	return (
		<div className="navigator-container" style={{height: navHeight+'px'}}>
			{
				menu?.length > 0 && menu.map(
					(element, index) =>
						{
							if (element.name === 'home' && credentials && Object.keys(credentials)?.length > 0) {
								return <span key={'menu_item_' + index} className="navigator-item home">
									<i className={`figma-icon ${element.name}`} />
									<span className="accessibility-hidden">{element.name}</span>
								</span>
							} else {
								return (
									(location?.pathname === ROOT || location?.pathname === SIGNUP) && element.visibleAtLogin === false
										? <Fragment key={'menu_item_' + index}></Fragment>
										: <button
											onClick={() => handleClickMenu(element.url)} key={'menu_item_' + index}
											className={`navigator-item ${element.name} ${element.url === location.pathname ? ' selected' : ''}`}
										>
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
