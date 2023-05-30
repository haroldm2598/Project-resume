export default function WorkForm(props) {
	return (
		<>
			<form
				className='workForm'
				onClick={() => props.setCurrentTargetId(props.work0)}
			>
				<input
					type='text'
					placeholder='company name'
					onChange={props.handleChange}
					name={props.name1}
					// name='companyName'
					value={props.work1}
				/>

				<input
					type='text'
					placeholder='Position'
					onChange={props.handleChange}
					name={props.name2}
					// name='workPosition'
					value={props.work2}
				/>

				<input
					type='text'
					placeholder='Date started'
					onChange={props.handleChange}
					name={props.name3}
					// name='dateStart'
					value={props.work3}
				/>

				<input
					type='text'
					placeholder='Date ended'
					onChange={props.handleChange}
					name={props.name4}
					// name='dateEnd'
					value={props.work4}
				/>

				{props.work5 && (
					<input
						type='text'
						placeholder='Work Details'
						onChange={props.handleChange}
						name='workDetails'
						value={props.work5}
					/>
				)}
			</form>

			<button className='work__btn' onClick={props.deleteToggle}>
				Delete
			</button>
		</>
	);
}
