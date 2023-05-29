import {
	BsFillTelephoneFill,
	BsFillEnvelopeFill,
	BsFillPinFill
} from 'react-icons/bs';

export default function Post(props) {
	return (
		<>
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
			<div className='listComments'>{props.form6}</div>

			<h1 className='workTitle'>{props.workTitle}</h1>
			{props.children}

			{/* <h1 className='workTitle'>{props.education}</h1>
			{props.children} */}
		</>
	);
}
