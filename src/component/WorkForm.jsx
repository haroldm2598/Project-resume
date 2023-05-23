export default function WorkForm(props) {
	return (
		<>
			<form
				className='workForm'
				onClick={() => props.setCurrentWorkId(props.work0)}
			>
				<input
					type='text'
					placeholder='company name'
					onChange={props.handleChange}
					name='companyName'
					value={props.work1}
				/>

				<input
					type='text'
					placeholder='Position'
					onChange={props.handleChange}
					name='workPosition'
					value={props.work2}
				/>

				<input
					type='text'
					placeholder='Date started'
					onChange={props.handleChange}
					name='dateStart'
					value={props.work3}
				/>

				<input
					type='text'
					placeholder='Date ended'
					onChange={props.handleChange}
					name='dateEnd'
					value={props.work4}
				/>

				<input
					type='text'
					placeholder='Work Details'
					onChange={props.handleChange}
					name='workDetails'
					value={props.work5}
				/>
			</form>

			<button
				className='work__btn'
				onClick={(event) => props.deleteToggle(event, props.work0)}
			>
				Delete
			</button>
		</>
	);
}
