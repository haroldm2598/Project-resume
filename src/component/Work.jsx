import WorkForm from './WorkForm';

export default function Work(props) {
	return (
		<>
			<h1>{props.formTitle}</h1>
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

			{/* {props.schools.map((item) => (
				<WorkForm
					key={item.id}
					work0={item.id}
					work1={item.schoolName}
					work2={item.schoolDegree}
					work3={item.dateStart}
					work4={item.dateEnd}
					setCurrentWorkId={props.setCurrentWorkId}
					handleChange={props.handleChange}
					deleteToggle={props.deleteToggle}
				/>
			))} */}

			<button className='work__btn' onClick={props.addWork}>
				Add
			</button>
		</>
	);
}
