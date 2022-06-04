import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VIDEOS } from "../const/urls";
import { useDispatch, useSelector } from "react-redux";
import { myActions } from "../http/actions/myAction";
import Tabs from "../components/Tabs";
import { actors } from "./Editing/dataStructure/Actors";
import { voices } from "./Editing/dataStructure/Voices";
import { backgrounds } from "./Editing/dataStructure/Backgrounds";
import { alignments } from "./Editing/dataStructure/Alignments";
import EditingActors from "./Editing/EditingActors";
import EditingVoice from "./Editing/EditingVoice";
import EditingAlignment from "./Editing/EditingAlignment";
import EditingBackground from "./Editing/EditingBackground";
import EditingMessage from "./Editing/EditingMessage";
import { ACTOR, ALIGNMENT, BACKGROUND, VOICE } from "../const/tabSections";

const Editing = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const tabs = [ACTOR, VOICE, ALIGNMENT, BACKGROUND];
	const [currentTab, setCurrentTab] = useState(tabs[0]);
	// I COULD HANDLE WITH AN UNIQUE BIG STATE OBJECT INCLUDING ALL THE 4 EDITING TABS DATA
	// but thinking about a "real app", I preferred to split to manage better every single page
	// I could also have made an unique editing component with more dynamic params but I thinked in a "real app"
	// Actor editing tab could have way more internal behaviours compared to others or vice versa (ex. Background have upload function)
	const [actorArr, setActorArr] = useState(actors);
	const [voicesArr, setVoicesArr] = useState(voices);
	const [alignmentArr, setAlignmentArr] = useState(alignments);
	const [backgroundArr, setBackgroundArr] = useState(backgrounds);
	const [userMessage, setUserMessage]  = useState('Fusce quis magna vel ex pellentesque consequat sed et turpis. Vivamus bibendum rutrum euismod. Sed non sagittis est, semper');
	const [userTitle, setUserTitle]  = useState('Saying Hi to my customers');
	const [editMessageMode, setEditMessageMode] = useState(false);

	const saveResponse = useSelector(state => state?.save);

	useEffect(() => {
		if(saveResponse) {
			navigate(VIDEOS);
			dispatch(myActions.cleanSave());
		}		
	}, [saveResponse]);

	const currentSelectedActor = useCallback(() => {
		const selectedActor = actorArr.find(actor => actor.selected);
		return selectedActor.name.toLowerCase();
	}, [actorArr]);

	const handleSave = () => {
		const saveData = {
			actor: actorArr.find(el => el.selected)?.name,
			voice: voicesArr.find(el => el.selected)?.name,
			alignment: alignmentArr.find(el => el.selected)?.name,
			background: backgroundArr.find(el => el.selected)?.name,
			title: userTitle,
			message: userMessage
		};
		dispatch(myActions.save(saveData));
	};

	return (
		<div className="editing-container">
			<div className="editing-header flex-container">
				<div className="col-8">
					<h2>{userTitle}</h2>
					<button className="generic-icon changeMessage" onClick={() => {setEditMessageMode(true)}}>
						<span className="accessibility-hidden">Change</span>
					</button>
				</div>
				<div className="col-4 text-right">
					<button className="btn-grey mr-20" onClick={() => {navigate(VIDEOS)}}>Cancel</button>
					<button className="btn-green mr-5" onClick={() => handleSave()}>Save</button>
				</div>
			</div>
			
			<div className="editing-core flex-container">
				<div className="edit-profile-col-60">
					<div className="big-picture-container">
						<div className={`actor big-picture ${currentSelectedActor()}`}>
							<button className="btn-grey btn-text-blue preview-button">Preview</button>
						</div>
						<div className="listen-videoscript">
							<textarea id="listen" defaultValue="Type or paste your videoscript here. You can also request a translation of 
								an English script to any of 27 other languages" />
							<button className="btn-grey mt-10">Listen</button>
						</div>
					</div>
				</div>
				<div className="edit-profile-col-40 selection">
					<Tabs tabArray={tabs} current={currentTab} setCurrent={setCurrentTab} />
					{
						currentTab === ACTOR
							&& <EditingActors actorArr={actorArr} setActorArr={setActorArr}/>
					}
					{
						currentTab === VOICE
							&& <EditingVoice voicesArr={voicesArr} setVoicesArr={setVoicesArr}/>
					}
					{
						currentTab === ALIGNMENT
							&& <EditingAlignment alignmentArr={alignmentArr} setAlignmentArr={setAlignmentArr}/>
					}
					{
						currentTab === BACKGROUND
							&& <EditingBackground backgroundArr={backgroundArr} setBackgroundArr={setBackgroundArr}/>
					}
				</div>
			</div>
			{
				editMessageMode && <EditingMessage
					userMessage={userMessage}
					setUserMessage={setUserMessage}
					userTitle={userTitle}
					setUserTitle={setUserTitle}
					setEditMessageMode={setEditMessageMode}
				/>
			}
		</div>
	);
}

export default Editing;
