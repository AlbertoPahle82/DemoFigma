import { useCallback, useState } from "react";
import { actors } from "./Editing/Actors";

const Editing = () => {
	const [actorArr, setActorArr] = useState(actors);

	const handleActorChange = useCallback(actorIndex => {
		const newActorArr = [...actorArr];
		if (newActorArr?.length > 0) {
			newActorArr.forEach((actor, index) => {
				// unselect all
				actor.selected = false;
				if (index === actorIndex) {
					actor.selected = true;
				}
			});
		}
		console.info('NEW ACTOR OBJ', newActorArr);
		setActorArr([...newActorArr]);
	}, [actorArr]);

	const currentSelectedActor = useCallback(() => {
		const selectedActor = actorArr.find(actor => actor.selected);
		return selectedActor.name.toLowerCase();
	}, [actorArr]);

	console.info('CURR ACTOBJ', actorArr);

	return (
		<div className="editing-container">
			<div className="editing-header flex-container">
				<div className="col-8">
					<h2>Saying Hi to my customers</h2>
				</div>
				<div className="col-4 text-right">
					<button color="btn-grey">Cancel</button>
					<button color="btn-green">Save</button>
				</div>
			</div>
			<div className="editing-core flex-container">
				<div className="col-7">
					<div className={`actor big-picture ${currentSelectedActor()}`}></div>
				</div>
				<div className="col-5 selection">
					<ul>
						{
							actorArr?.length > 0 && actorArr?.map(
								(actor, index) => <li key={'actors_'+index} className={actor.selected ? 'selected' : ''}>
									<button
										className={`actor ${actor.name.toLowerCase()}`}
										onClick={() => handleActorChange(index)}
									>
										<span className="accessibility-hidden">{actor.name}</span>
									</button>
								</li>
							)
						}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Editing;
