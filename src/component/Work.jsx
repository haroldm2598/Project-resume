import WorkForm from './WorkForm';

export default function Work(props) {
	return (
		<>
			<h1>{props.formTitle1}</h1>
			{props.works.map((item) => (
				<WorkForm
					key={item.id}
					work0={item.id}
					work1={item.companyName}
					work2={item.workPosition}
					work3={item.workDateStart}
					work4={item.workDateEnd}
					work5={item.workDetails}
					name1='companyName'
					name2='workPosition'
					name3='workDateStart'
					name4='workDateEnd'
					setCurrentTargetId={props.setCurrentTargetId}
					handleChange={props.handleChange}
					deleteToggle={(event) =>
						props.deleteToggle(event, item.id, props.works, props.setWorks)
					}
				/>
			))}

			<button
				className='work__btn'
				onClick={(event) =>
					props.addWork(
						event,
						props.getDetails().work,
						props.works,
						props.setWorks
					)
				}
			>
				Add
			</button>

			<h1>{props.formTitle2}</h1>
			{props.schools.map((item) => (
				<WorkForm
					key={item.id}
					work0={item.id}
					work1={item.schoolName}
					work2={item.schoolDegree}
					work3={item.schoolDateStart}
					work4={item.schoolDateEnd}
					name1='schoolName'
					name2='schoolDegree'
					name3='schoolDateStart'
					name4='schoolDateEnd'
					setCurrentTargetId={props.setCurrentTargetId}
					handleChange={props.handleChange}
					deleteToggle={(event) =>
						props.deleteToggle(event, item.id, props.schools, props.setSchools)
					}
				/>
			))}

			<button
				className='work__btn'
				onClick={(event) =>
					props.addWork(
						event,
						props.getDetails().school,
						props.schools,
						props.setSchools
					)
				}
			>
				Add
			</button>
		</>
	);
}
