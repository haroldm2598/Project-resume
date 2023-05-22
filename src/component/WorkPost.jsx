export default function WorkPost(props) {
	return (
		<>
			<h1 className='workTitle'>{props.workTitle}</h1>
			<div className='work'>
				<h3 className='work__job'>{props.work1}</h3>
				<div className='work__end'>
					<h3 className='work__end--company'>{props.work2} | </h3>
					<h3 className='work__end--date'>
						{props.work3} - {props.work4}
					</h3>
				</div>
			</div>
			<p className='workDetails'>{props.work5}</p>
		</>
	);
}
