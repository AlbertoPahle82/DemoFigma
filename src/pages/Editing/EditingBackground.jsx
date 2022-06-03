import { useCallback, memo } from "react";


const EditingBackground = memo(props => {

	const {backgroundArr, setBackgroundArr} = props;

	const handleBgChange = useCallback(elemIndex => {
		const newBackgroundArr = [...backgroundArr];
		if (newBackgroundArr?.length > 0) {
			newBackgroundArr.forEach((elem, index) => {
				// unselect all
				elem.selected = false;
				if (index === elemIndex) {
					elem.selected = true;
				}
			});
		}
		setBackgroundArr([...newBackgroundArr]);
	}, [backgroundArr]);

	const handleUpload = useCallback(event => {
		const file = event?.target?.files?.[0];
		if (file !== undefined) {
			const newBackgroundArr = [...backgroundArr];
			newBackgroundArr.push({
				name: 'custom',
				selected: false,
				backgroundUrl: URL.createObjectURL(file)
			});
			setBackgroundArr([...newBackgroundArr]);
		}
	}, [backgroundArr]);

	console.log('CURRENT BG ARR', backgroundArr);

	return (
		<>
			<ul>
				<li>
					<label
						htmlFor="upload"
						className="background upload"
						onClick={() => handleBgChange(9999)}
					>
						<span>Upload</span>
					</label>
					<input id="upload" type="file" className="uploadInput" onChange={event => handleUpload(event)}/>
				</li>
				{
					backgroundArr?.length > 0 && backgroundArr?.map(
						(bg, index) => <li key={'backgrounds_'+index} className={bg.selected ? 'selected' : ''}>
							<button
								className={`background ${bg.name.toLowerCase()}`}
								onClick={() => handleBgChange(index)}
							>
								{
									bg?.backgroundUrl && <img src={bg?.backgroundUrl} alt={bg?.backgroundUrl} />
								}
								<span>{bg.name}</span>
							</button>
						</li>
					)
				}
			</ul>
		</>
	);
});

export default EditingBackground;
