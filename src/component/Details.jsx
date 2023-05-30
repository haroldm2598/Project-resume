export default function Details(props) {
	return (
		<>
			<h1>{props.title}</h1>
			<form onClick={() => props.setCurrentTargetId(props.form0)}>
				<input
					type='text'
					placeholder='full name'
					onChange={props.handleChange}
					name={props.name1}
					value={props.form1}
				></input>
				<input
					type='text'
					placeholder='position'
					onChange={props.handleChange}
					name={props.name2}
					value={props.form2}
				></input>
				<input
					type='text'
					placeholder='phone number'
					onChange={props.handleChange}
					name={props.name3}
					value={props.form3}
				></input>
				<input
					type='email'
					placeholder='email address'
					onChange={props.handleChange}
					name={props.name4}
					value={props.form4}
				></input>
				<input
					type='text'
					placeholder='location'
					onChange={props.handleChange}
					name={props.name5}
					value={props.form5}
				></input>
				<textarea
					className='textArea'
					placeholder='comments'
					onChange={props.handleChange}
					name={props.name6}
					value={props.form6}
				></textarea>
			</form>
		</>
	);
}
