import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Details from './component/Details';
import Work from './component/Work';
import Post from './component/Post';
import WorkPost from './component/WorkPost';
import './styles/main.scss';

export default function App() {
	const [form, setForm] = useState(setDetails());
	const [works, setWorks] = useState(setWorkDetails() || '');
	const [currentWorkId, setCurrentWorkId] = useState('');
	// const [deleteWork, setDeleteWork] = useState(works[0].isShow);

	const currentWork =
		works.find((work) => work.id === currentWorkId) || works[0];

	useEffect(() => {
		console.log(works);
	}, [works]);

	function deleteToggle(event, id) {
		event.preventDefault();
		setWorks(works.filter((item) => item.id !== id));
	}

	function addWork(event) {
		event.preventDefault();
		const work = {
			id: nanoid(),
			companyName: 'Company here',
			workPosition: 'Previous Position',
			dateStart: 'Date start',
			dateEnd: 'Date end',
			workDetails: 'Location',
			isShow: true
		};
		setWorks([...works, work]);
	}

	function setDetails() {
		return {
			fullName: 'John Doe',
			position: 'Software Engineer',
			phoneNumber: '1239 982 721',
			emailAddress: 'testing@gmail.com',
			location: 'france, milan',
			comments: 'lorem ipsum'
		};
	}

	function setWorkDetails() {
		return [
			{
				id: nanoid(),
				companyName: 'A Software Engineer',
				workPosition: 'Software Engineer',
				dateStart: '2018',
				dateEnd: '2020',
				workDetails: 'france, milan',
				isShow: true
			},
			{
				id: nanoid(),
				companyName: 'Google Inc',
				workPosition: 'Full stack lead',
				dateStart: '2020',
				dateEnd: 'present',
				workDetails: 'USA, california',
				isShow: true
			}
		];
	}

	function handleChange() {
		const { name, value } = event.target;

		setForm((prevForm) => {
			return {
				...prevForm,
				[name]: value
			};
		});

		// setWorks((oldWorks) => {
		// 	return {
		// 		...oldWorks,
		// 		[name]: value
		// 	};
		// });

		setWorks(
			works.map((item) =>
				item.id === currentWork.id ? { ...item, [name]: value } : item
			)
		);
	}

	// ELEMENT THAT WILL GET AND POST
	const workElement = works.map((item) => (
		<Work
			key={item.id}
			workId={item.id}
			work1={item.companyName}
			work2={item.workPosition}
			work3={item.dateStart}
			work4={item.dateEnd}
			work5={item.workDetails}
			// isShow={deleteWork}
			setCurrentWorkId={setCurrentWorkId}
			deleteToggle={(event) => deleteToggle(event, item.id)}
			addWork={addWork}
			handleChange={handleChange}
		/>
	));

	const workElementPost = works.map((item, index) => (
		<WorkPost
			key={index}
			// workTitle={'work experience'}
			work1={item.workPosition}
			work2={item.companyName}
			work3={item.dateStart}
			work4={item.dateEnd}
			work5={item.workDetails}
		/>
	));

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
					{workElement}
				</div>
				<Post
					form1={form.fullName}
					form2={form.position}
					form3={form.phoneNumber}
					form4={form.emailAddress}
					form5={form.location}
					form6={form.comments}
					workTitle={'work experience'}
				>
					{workElementPost}
				</Post>
			</div>
		</>
	);
}
