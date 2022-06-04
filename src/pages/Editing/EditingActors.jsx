import { useCallback, memo } from "react";


const EditingActors = memo(props => {
	const {actorArr, setActorArr} = props;

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
		setActorArr([...newActorArr]);
	}, [actorArr]);

	console.info('CURR ACTOBJ', actorArr);

	return (
		<>
			<ul>
				{
					actorArr?.length > 0 && actorArr?.map(
						(actor, index) => <li key={'actors_'+index} className={actor.selected ? 'selected' : ''}>
							<button
								id={'actor-'+actor.name.toLowerCase()}
								className={`actor ${actor.name.toLowerCase()}`}
								onClick={() => handleActorChange(index)}
							>
								<span className="accessibility-hidden">{actor.name}</span>
							</button>
							<label
								className="gallery-label"
								htmlFor={'actor-'+actor.name.toLowerCase()}
							>
								{actor.name}
							</label>
						</li>
					)
				}
			</ul>
		</>
	);
});

export default EditingActors;
