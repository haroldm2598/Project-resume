import {
	BsFillTelephoneFill,
	BsFillEnvelopeFill,
	BsFillPinFill
} from 'react-icons/bs';

export default function Post(props) {
	return (
		<>
			<div className='postContainer'>
				<ul className='list'>
					<div className='list__first'>
						<li className='list__first--name'>{props.form1}</li>
						<li className='list__first--position'>{props.form2}</li>
					</div>

					<div className='list__second'>
						<li className='list__second--number'>
							<BsFillTelephoneFill /> {props.form3}
						</li>
						<li className='list__second--address'>
							<BsFillEnvelopeFill /> {props.form4}
						</li>
						<li className='list__second--location'>
							<BsFillPinFill /> {props.form5}
						</li>
					</div>
				</ul>
				<hr />
				<div className='list__comments'>{props.form6}</div>
				{/* <h1 className='workTitle'>{props.workTitle}</h1>
				<div className='work'>
					<h3 className='work__job'>{props.work1}</h3>
					<div className='work__end'>
						<h3 className='work__end--company'>{props.work2} | </h3>
						<h3 className='work__end--date'>
							{props.work3} - {props.work4}
						</h3>
					</div>
				</div>
				<p className='workDetails'>{props.work5}</p> */}
				<h1 className='workTitle'>{props.workTitle}</h1>
				{props.children}
			</div>
		</>
	);
}
