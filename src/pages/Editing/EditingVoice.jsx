import { useCallback, memo } from "react";


const EditingVoice = memo(props => {

	const {voicesArr, setVoicesArr} = props;

	const handleVoiceChange = useCallback(elemIndex => {
		const newvoiceArr = [...voicesArr];
		if (newvoiceArr?.length > 0) {
			newvoiceArr.forEach((elem, index) => {
				// unselect all
				elem.selected = false;
				if (index === elemIndex) {
					elem.selected = true;
				}
			});
		}
		setVoicesArr([...newvoiceArr]);
	}, [voicesArr]);

	console.log('CURRENT VOICE ARR', voicesArr);

	return (
		<>
			<ul>
				{
					voicesArr?.length > 0 && voicesArr?.map(
						(voice, index) => <li key={'voices_'+index} className={`full-width ${voice.selected ? 'selected' : ''}`}>
							<button
								className={`voice ${voice.name.toLowerCase()}`}
								onClick={() => handleVoiceChange(index)}
							>
								<span className="accessibility-hidden">{voice.name}</span>
							</button>
						</li>
					)
				}
			</ul>
		</>
	);
});

export default EditingVoice;
