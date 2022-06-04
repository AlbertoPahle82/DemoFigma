import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EDITING } from "../const/urls";

const Videos = () => {
	const navigate = useNavigate();
	const list = useSelector(state => state?.videos?.list);
	return (
		<div className="editing-container">
			<div className="editing-header flex-container">
				<div className="col-8">
					<h2>Saved Videos</h2>
				</div>
				<div className="col-4 text-right">
					<button className="btn-green" onClick={() => {navigate(EDITING)}}>Create New</button>
				</div>
			</div>
			<div className="video-gallery-container">
				{
					list?.length > 0 && list.map(
						(element, index) => <div className="video-preview-container" key={'video_el_'+index}>
							<div className={`video-gallery actor ${element?.actor.toLowerCase()}`}>
								<span className="accessibility-hidden">{element?.actor}</span>
							</div>
							<p className="text-center">{element?.title}</p>
							<p className="tags">
								<span className="tag small">Email</span>
								<span className="tag small">Marketing</span>
								<span className="tag small">Greeting</span>
							</p>
							<button className="edit-video">...</button>
						</div>
					)
				}
			</div>
		</div>
	);
}

export default Videos;
