import WorkForm from './WorkForm';

export default function Work(props) {
	/* <>
					<form
						className='workForm'
						onClick={() => props.setCurrentWorkId(item.id)}
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

					<button
						className='work__btn'
						onClick={(event) => props.deleteToggle(event, item.id)}
					>
						Delete
					</button>
				</> */
	return (
		<>
			<h1>Work Experience</h1>
			{props.works.map((item) => (
				<WorkForm
					key={item.id}
					work0={item.id}
					work1={item.companyName}
					work2={item.workPosition}
					work3={item.dateStart}
					work4={item.dateEnd}
					work5={item.workDetails}
					setCurrentWorkId={props.setCurrentWorkId}
					handleChange={props.handleChange}
					deleteToggle={props.deleteToggle}
				/>
			))}

			<button className='work__btn' onClick={props.addWork}>
				Add
			</button>
		</>
	);
}
