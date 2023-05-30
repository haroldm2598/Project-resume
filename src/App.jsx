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
	const [works, setWorks] = useState(ArrOfObjects[1].workDetails || '');
	const [schools, setSchools] = useState(ArrOfObjects[2].schoolDetail || '');
	const [currentTargetId, setCurrentTargetId] = useState('');
	const result = form.map((item) => item);

	console.log(works);
	function currentTarget(arrFind) {
		return arrFind.find((work) => work.id === currentTargetId) || arrFind[0];
	}

	function deleteToggle(event, id, arr) {
		event.preventDefault();
		setWorks(arr.filter((item) => item.id !== id));
	}

	// ADD AN PARAMETER WHERE MEETS THE TARGET OBJECT FOR PUSHING NEW DETAILS
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

		const school = {
			id: nanoid(),
			schoolName: 'Education attainment',
			schoolDegree: 'Education level',
			dateStart: 'Date start',
			dateEnd: 'Date end'
		};

		setWorks([...works, work]);
		setSchools([...schools, school]);
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setForm(
			form.map((item) =>
				item.id === currentTarget(form).id ? { ...item, [name]: value } : item
			)
		);

		setWorks(
			works.map((item) =>
				item.id === currentTarget(works).id ? { ...item, [name]: value } : item
			)
		);
	}

	const workElementPost = works.map((item) => (
		<WorkPost
			key={item?.id}
			work1={item?.workPosition}
			work2={item?.companyName}
			work3={item?.dateStart}
			work4={item?.dateEnd}
			work5={item?.workDetails}
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
						form0={result[0]?.id}
						form1={result[0]?.fullName}
						form2={result[0]?.position}
						form3={result[0]?.phoneNumber}
						form4={result[0]?.emailAddress}
						form5={result[0]?.location}
						form6={result[0]?.comments}
						setCurrentTargetId={setCurrentTargetId}
						handleChange={handleChange}
					/>

					<Work
						formTitle={'Work Experience'}
						works={works}
						setCurrentTargetId={setCurrentTargetId}
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
						{workElementPost}
					</Post>
				</div>
			</div>
		</>
	);
}
