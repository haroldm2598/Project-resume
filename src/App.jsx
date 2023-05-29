import { useState } from 'react';
import { nanoid } from 'nanoid';
import Details from './component/Details';
import Work from './component/Work';
import Post from './component/Post';
import WorkPost from './component/WorkPost';
import { ArrOfObjects } from './data';
import './styles/main.scss';

export default function App() {
	const [form, setForm] = useState(ArrOfObjects || '');
	const [works, setWorks] = useState(setWorkDetails() || '');
	const [testWorks, setTestWorks] = useState(ArrOfObjects[1] || '');
	const [currentWorkId, setCurrentWorkId] = useState('');
	const result = form.map((item) => item);

	function currentWork(arrFind) {
		return arrFind.find((work) => work.id === currentWorkId) || works[0];
	}

	// ORIGIN FOR works and setWorks
	// function deleteToggle(event, id) {
	// 	event.preventDefault();
	// 	setWorks(works.filter((item) => item.id !== id));
	// }

	// BETA TESTING FOR testWorks and setTestWorks
	function deleteToggle(event, id) {
		event.preventDefault();
		const getWorkDetails = testWorks.workDetails;
		console.log('clicked!');
		setTestWorks(getWorkDetails.find((item) => item.id === id));
	}

	function addWork(event) {
		event.preventDefault();
		const work = {
			id: nanoid(),
			companyName: 'Company here',
			workPosition: 'Previous Position',
			dateStart: 'Date start',
			dateEnd: 'Date end',
			workDetails: 'Work details'
		};

		setWorks([...works, work]);
	}

	function setWorkDetails() {
		return [
			{
				id: nanoid(),
				companyName: 'A Software Engineer',
				workPosition: 'Software Engineer',
				dateStart: '2018',
				dateEnd: '2020',
				workDetails: 'france, milan'
			}
		];
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setForm(
			form.map((item) =>
				item.id === currentWork(form).id ? { ...item, [name]: value } : item
			)
		);

		// setWorks(
		// 	works.map((item) =>
		// 		item.id === currentWork(works).id ? { ...item, [name]: value } : item
		// 	)
		// );

		// console.log(form);
		// setWorks(
		// 	form.map((item) =>
		// 		Object.keys(item)[0].includes('workDetails')
		// 			? { ...item, workDetails: { [name]: value } }
		// 			: 'hindi'
		// 	)
		// );
	}

	// console.log(result[0].id === currentWork(form).id);
	// CORRECT AFTER TRUE ACCESS INSIDE ARRAYOFOBJECT UPDATE THE STATE
	// const test = form.map((item) => item);
	// if (Object.keys(test[1])[0] === 'workDetails') {
	// 	console.log('ito na nga mga lods');
	// }

	// function testObject() {
	// 	return form.map((item) =>
	// 		Object.keys(item)[0].includes('workDetails')
	// 			? { ...item, workDetails: 'gege lods' }
	// 			: 'hindi'
	// 	);
	// }
	// console.log(testObject());

	// function addEducation(event) {
	// 	event.preventDefault();
	// 	const school = {
	// 		id: nanoid(),
	// 		schoolName: 'University of Malolos',
	// 		schoolDegree: 'Bachelor of Science in Quamtum ',
	// 		dateStart: '2014',
	// 		dateEnd: '2018'
	// 	};

	// 	setWorks([...schools, school]);
	// }

	// function setEducationDetails() {
	// 	return [
	// 		{
	// 			id: nanoid(),
	// 			schoolName: 'University of Malolos',
	// 			schoolDegree: 'Bachelor of Science in Quamtum ',
	// 			dateStart: '2014',
	// 			dateEnd: '2018'
	// 		}
	// 	];
	// }

	// const workElementPost = works.map((item, index) => (
	// 	<WorkPost
	// 		key={index}
	// 		work1={item.workPosition}
	// 		work2={item.companyName}
	// 		work3={item.dateStart}
	// 		work4={item.dateEnd}
	// 		work5={item.workDetails}
	// 	/>
	// ));

	function testWork() {
		const workPostDetails = testWorks.workDetails;

		const workElementPost = workPostDetails.map((item) => (
			<WorkPost
				key={item?.id}
				work1={item?.workPosition}
				work2={item?.companyName}
				work3={item?.dateStart}
				work4={item?.dateEnd}
				work5={item?.workDetails}
			/>
		));

		return workElementPost;

		// for (let i = 0; i < result.length; i++) {
		// 	const resultTo = (
		// 		<WorkPost
		// 			key={result[i].id}
		// 			work1={result[i].workPosition}
		// 			work2={result[i].companyName}
		// 			work3={result[i].dateStart}
		// 			work4={result[i].dateEnd}
		// 			work5={result[i].workDetails}
		// 		/>
		// 	);
		// 	return resultTo;
		// }
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
						form0={result[0]?.id}
						form1={result[0]?.fullName}
						form2={result[0]?.position}
						form3={result[0]?.phoneNumber}
						form4={result[0]?.emailAddress}
						form5={result[0]?.location}
						form6={result[0]?.comments}
						setCurrentWorkId={setCurrentWorkId}
						handleChange={handleChange}
					/>
					{/* ORIGIN FOR work && setWork */}
					{/* <Work
						formTitle={'Work Experience'}
						works={works}
						setCurrentWorkId={setCurrentWorkId}
						handleChange={handleChange}
						deleteToggle={deleteToggle}
						addWork={addWork}
					/> */}

					{/* BETA TESTING FOR testWork && setTestWork */}
					<Work
						formTitle={'Work Experience'}
						works={testWorks.workDetails}
						setCurrentWorkId={setCurrentWorkId}
						handleChange={handleChange}
						deleteToggle={deleteToggle}
						addWork={addWork}
					/>
				</div>
				<div className='postContainer'>
					<Post
						form1={result[0]?.fullName}
						form2={result[0]?.position}
						form3={result[0]?.phoneNumber}
						form4={result[0]?.emailAddress}
						form5={result[0]?.location}
						form6={result[0]?.comments}
						workTitle={'work experience'}
						education={'education'}
					>
						{testWork()}
					</Post>
				</div>
			</div>
		</>
	);
}
