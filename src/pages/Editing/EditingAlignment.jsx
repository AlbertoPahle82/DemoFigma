import { useCallback, memo } from "react";


const EditingAlignment = memo(props => {

	const {alignmentArr, setAlignmentArr} = props;

	const handleAlignmentChange = useCallback(elemIndex => {
		const newalignmentArr = [...alignmentArr];
		if (newalignmentArr?.length > 0) {
			newalignmentArr.forEach((elem, index) => {
				// unselect all
				elem.selected = false;
				if (index === elemIndex) {
					elem.selected = true;
				}
			});
		}
		setAlignmentArr([...newalignmentArr]);
	}, [alignmentArr]);

	console.log('CURRENT ALIGNMENT ARR', alignmentArr);

	return (
		<>
			<ul>
				{
					alignmentArr?.length > 0 && alignmentArr?.map(
						(alignment, index) => <li key={'alignments_'+index} className={alignment.selected ? 'selected' : ''}>
							<button
								className="btn-grey btn-big alignment"
								onClick={() => handleAlignmentChange(index)}
							>
								{alignment.name}
							</button>
						</li>
					)
				}
			</ul>
		</>
	);
});

export default EditingAlignment;
