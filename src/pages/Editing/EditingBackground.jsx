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
			<div className="accordion-container accordion-selected first">
				<div className="accordion-head">
					<h4>Images</h4>
					<button className="generic-icon icon-arrow-open">
						<span className="accessibility-hidden">close accordion</span>
					</button>
				</div>
				<ul>
					<li>
						<label
							htmlFor="upload"
							className="background upload"
							onClick={() => handleBgChange(9999)}
						>
						</label>
						<input id="upload" type="file" className="uploadInput" onChange={event => handleUpload(event)}/>
						<label
							className="gallery-label"
							htmlFor="upload"
						>
							Upload
						</label>
					</li>
					{
						backgroundArr?.length > 0 && backgroundArr?.map(
							(bg, index) => <li key={'backgrounds_'+index} className={bg.selected ? 'selected' : ''}>
								<button
									id={'background-'+bg.name.toLowerCase()}
									className={`background ${bg.name.toLowerCase()}`}
									onClick={() => handleBgChange(index)}
								>
									{
										bg?.backgroundUrl && <img src={bg?.backgroundUrl} alt={bg?.backgroundUrl} />
									}
								</button>
								<label
									className="gallery-label"
									htmlFor={'background-'+bg.name.toLowerCase()}
								>
									{bg.name}
								</label>
							</li>
						)
					}
				</ul>
			</div>
			<div className="accordion-container">
				<div className="accordion-head">
					<h4>Solid Colours</h4>
					<button className="generic-icon icon-arrow-closed">
						<span className="accessibility-hidden">open accordion</span>
					</button>
				</div>
			</div>
			<div className="accordion-container">
				<div className="accordion-head">
					<h4>Videos</h4>
					<button className="generic-icon icon-arrow-closed">
						<span className="accessibility-hidden">open accordion</span>
					</button>
				</div>
			</div>
		</>
	);
});

export default EditingBackground;
