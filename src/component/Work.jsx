export default function Work(props) {
	// if (props.itemLength <= 1) {
	// 	return (
	// 		<button className='work__btn' onClick={props.addWork}>
	// 			Add
	// 		</button>
	// 	);
	// }
	return (
		<>
			<h1>Work Experience</h1>
			{/* {props.workArr && !!props.workArr.length && (
				<> */}
			{props.works.map((item, index) => (
				<>
					<form
						className='workForm'
						key={index}
						onClick={() => props.setCurrentWorkId(props.works.id)}
					>
						<input
							type='text'
							placeholder='company name'
							onChange={props.handleChange}
							name='companyName'
							value={item.companyName}
						/>

						<input
							type='text'
							placeholder='Position'
							onChange={props.handleChange}
							name='workPosition'
							value={item.workPosition}
						/>

						<input
							type='text'
							placeholder='Date started'
							onChange={props.handleChange}
							name='dateStart'
							value={item.dateStart}
						/>

						<input
							type='text'
							placeholder='Date ended'
							onChange={props.handleChange}
							name='dateEnd'
							value={item.dateEnd}
						/>

						<input
							type='text'
							placeholder='Work Details'
							onChange={props.handleChange}
							name='workDetails'
							value={item.workDetails}
						/>
					</form>

					<button className='work__btn' onClick={props.deleteToggle}>
						Delete
					</button>
				</>
			))}
			{/* </>
			)} */}

			<button className='work__btn' onClick={props.addWork}>
				Add
			</button>
		</>
	);
}
