import { useState } from 'react';
import { nanoid } from 'nanoid';
import Details from './component/Details';
import Work from './component/Work';
import Post from './component/Post';
import WorkPost from './component/WorkPost';
import './styles/main.scss';

export default function App() {
	const [form, setForm] = useState(setDetails());
	const [works, setWorks] = useState(setWorkDetails() || '');
	const [schools, setSchools] = useState(setEducationDetails() || '');
	const [currentWorkId, setCurrentWorkId] = useState('');

	// const currentWork =
	// 	works.find((work) => work.id === currentWorkId) || works[0];

	function currentWork(arrFind) {
		return arrFind.find((work) => work.id === currentWorkId) || works[0];
	}
	// KAPAG GUSTO KO MAY I ACCESS SA LABAS NG CODE
	// useEffect(() => {
	// 	console.log(works);
	// }, [works]);

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
			workDetails: 'Work details'
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
			comments:
				'Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.'
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
				workDetails: 'france, milan'
			}
		];
	}

	function setEducationDetails() {
		return [
			{
				id: nanoid(),
				schoolName: 'University of Malolos',
				schoolDegree: 'Bachelor of Science in Quamtum ',
				dateStart: '2014',
				dateEnd: '2018'
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

		setWorks(
			works.map((item) =>
				item.id === currentWork(works).id ? { ...item, [name]: value } : item
			)
		);

		setSchools(
			schools.map((item) =>
				item.id === currentWork(schools).id ? { ...item, [name]: value } : item
			)
		);
	}

	const workElementPost = works.map((item, index) => (
		<WorkPost
			key={index}
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
					<Work
						formTitle={'Work Experience'}
						works={works}
						setCurrentWorkId={setCurrentWorkId}
						handleChange={handleChange}
						deleteToggle={deleteToggle}
						addWork={addWork}
					/>

					<Work
						formTitle={'Education'}
						works={works}
						setCurrentWorkId={setCurrentWorkId}
						handleChange={handleChange}
						deleteToggle={deleteToggle}
						addWork={addWork}
					/>
				</div>
				<div className='postContainer'>
					<Post
						form1={form.fullName}
						form2={form.position}
						form3={form.phoneNumber}
						form4={form.emailAddress}
						form5={form.location}
						form6={form.comments}
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
