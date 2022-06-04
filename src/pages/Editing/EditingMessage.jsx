import { memo, useCallback, useState } from 'react';

const EditingMessage = memo(props => {
	const {userMessage, setUserMessage, userTitle, setUserTitle, setEditMessageMode} = props;
	const [internalUserMessage, setInternalUserMessage] = useState(userMessage);
	const [internalUserTitle, setInternalUserTitle] = useState(userTitle);

	const handleChangeTitle = useCallback(event => {
		setInternalUserTitle(event.target.value)
	}, [userTitle]);

	const handleChangeMessage = useCallback(event => {
		setInternalUserMessage(event.target.value)
	}, [userMessage]);

	const handleSubmit = event => {
		event.preventDefault();
		setEditMessageMode(false);
		setUserMessage(internalUserMessage);
		setUserTitle(internalUserTitle);
	}

	return (
		<div className="overlay">
			<div className="message-editing-content">
				<form onSubmit={event => handleSubmit(event)}>
					<div className='message-editing-header'>
						<input
							type="text" value={internalUserTitle}
							onChange={event => handleChangeTitle(event)}
							className="message-editing-header-input"
							required
							minLength={3}
							maxLength={28}
						/>
					</div>
					<div className='message-editing mt-20'>
						<textarea
							type="text" value={internalUserMessage} onChange={event => handleChangeMessage(event)} className="message-editing-input"
							required
							minLength={5}
						/>
					</div>
					<div className='message-editing tags'>
						<span>Email</span><span>Marketing</span><span>Greeting</span><span>Email</span><span>Marketing</span><span>Greeting</span>
					</div>
					<div className='message-submit'>
						<button type="submit" className="btn-green">Save</button>
					</div>
				</form>
			</div>
		</div>
	);
});

export default EditingMessage;
