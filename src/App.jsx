import { useState } from 'react';
import Editor from './component/Editor';
import Post from './component/Post';
import './styles/main.scss';

export default function App() {
	const [form, setForm] = useState(setDetails());

	function setDetails() {
		const details = {
			fullName: 'John Doe',
			position: 'Software Engineer',
			phoneNumber: '1239 982 721',
			emailAddress: 'testing@gmail.com',
			location: 'france, milan',
			comments: 'lorem ipsum'
		};

		return details;
	}

	function handleChange(event) {
		const { name, value } = event.target;

		setForm((prevForm) => {
			return {
				...prevForm,
				[name]: value
			};
		});
	}
	return (
		<>
			<div className='container'>
				<Editor
					title={'Personal Details'}
					detail1={'full name'}
					detail2={'position'}
					detail3={'phone number'}
					detail4={'email address'}
					detail5={'location'}
					detail6={'comments'}
					name1={'fullName'}
					name2={'position'}
					name3={'phoneNumber'}
					name4={'emailAddress'}
					name5={'location'}
					name6={'comments'}
					form1={form.fullName}
					form2={form.position}
					form3={form.phoneNumber}
					form4={form.emailAddress}
					form5={form.location}
					form6={form.comments}
					handleChange={handleChange}
				/>
				<Post
					form1={form.fullName}
					form2={form.position}
					form3={form.phoneNumber}
					form4={form.emailAddress}
					form5={form.location}
					form6={form.comments}
				/>
			</div>
		</>
	);
}
