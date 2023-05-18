import { useState } from 'react';
import Details from './component/Details';
import Work from './component/Work';
import Post from './component/Post';
import './styles/main.scss';

export default function App() {
	const [form, setForm] = useState(setDetails());
	const [work, setWork] = useState(setWorkDetails());
	const [deleteWork, setDeleteWork] = useState(work[0].isShow);

	function deleteToggle(event) {
		event.preventDefault();
		setDeleteWork((prevShown) => !prevShown);
	}

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

	function setWorkDetails() {
		const details = [
			{
				companyName: 'A Software Engineer',
				workPosition: 'Software Engineer',
				dateStart: '2018',
				dateEnd: '2020',
				workDetails: 'france, milan',
				isShow: true
			}
		];

		return details;
	}

	function handleChange() {
		const { name, value } = event.target;

		setForm((prevForm) => {
			return {
				...prevForm,
				[name]: value
			};
		});

		setWork((prevForm) => {
			return {
				...prevForm,
				[name]: value
			};
		});

		console.log(work);
	}

	return (
		<>
			<div className='container'>
				<div className='detailsContainer'>
					<Details
						title={'Personal Details'}
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

					<Work
						work1={work.companyName}
						work2={work.workPosition}
						work3={work.dateStart}
						work4={work.dateEnd}
						work5={work.workDetails}
						isShow={deleteWork}
						deleteToggle={deleteToggle}
						handleChange={handleChange}
					/>
				</div>
				<Post
					form1={form.fullName}
					form2={form.position}
					form3={form.phoneNumber}
					form4={form.emailAddress}
					form5={form.location}
					form6={form.comments}
					workTitle={'work experience'}
					work1={work[0].workPosition}
					work2={work[0].companyName}
					work3={work[0].dateStart}
					work4={work[0].dateEnd}
					work5={work[0].workDetails}
				/>
			</div>
		</>
	);
}
