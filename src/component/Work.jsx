import WorkForm from './WorkForm';

export default function Work(props) {
	return (
		<>
			<h1>{props.formTitle}</h1>
			{/* ORIGIN FOR work and setWork */}
			{/* {props.works.map((item) => (
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
			))} */}

			{/* BETA TESTING FOR testWork and setTestWork */}
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
					test={console.log(item.id)}
				/>
			))}

			<button className='work__btn' onClick={props.addWork}>
				Add
			</button>
		</>
	);
}
