export default function Work(props) {
	// if (!props.isShow) {
	// 	return (
	// 		<button className='work__btn' onClick={props.deleteToggle}>
	// 			Add
	// 		</button>
	// 	);
	// }
	return (
		<>
			<h1>Work Experience</h1>
			<form onClick={() => props.setCurrentWorkId(props.workId)}>
				{/* {props.isShow && (
					<> */}
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
				{/* </>
				)} */}
			</form>

			<button className='work__btn' onClick={props.deleteToggle}>
				Delete
			</button>

			<button className='work__btn' onClick={props.addWork}>
				Add
			</button>
		</>
	);
}
