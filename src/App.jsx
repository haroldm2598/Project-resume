import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Details from './component/Details';
import Work from './component/Work';
import Post from './component/Post';
import './styles/main.scss';

export default function App() {
	const [form, setForm] = useState(setDetails());
	const [works, setWorks] = useState(setWorkDetails());
	const [deleteWork, setDeleteWork] = useState(works[0].isShow);

	useEffect(() => {
		console.log('Add new work');
	}, [works]);

	function deleteToggle(event) {
		event.preventDefault();
		setDeleteWork((prevShown) => !prevShown);
	}

	// function addWork(event) {
	// 	event.preventDefault();
	// 	const work = {}
	// 	setWorks(prevWork => [work, ...prevWork]);
	// }

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

		// Not like the setForm way but looks like create new array will be the way
		/*
			- Find the whole id for the value then
			- if (oldWork.id === currentTargetId) array.push(updated text value)
		*/
		setWorks((oldWorks) => {
			return {
				...oldWorks,
				[name]: value
			};

			// const newArr = [];
			// for (let i = 0; i < oldWorks.length; i++) {
			// 	const oldWork = oldWorks[i];
			// 	if (oldWork.id) {
			// 		newArr.push({
			// 			...oldWorks,
			// 			[name]: value
			// 		});
			// 	} else {
			// 		newArr.push(oldWork);
			// 	}
			// }
			// return newArr;
		});

		console.log(setWorks((oldWorks) => console.log({ oldWorks })));
	}

	// <POST/> will be the target not the <Work/>
	// const workElement = work.map((item) => (
	// 	<Work
	// 		key={item.id}
	// 		work1={item.companyName}
	// 		work2={item.workPosition}
	// 		work3={item.dateStart}
	// 		work4={item.dateEnd}
	// 		work5={item.workDetails}
	// 		isShow={deleteWork}
	// 		deleteToggle={deleteToggle}
	// 		handleChange={handleChange}
	// 	/>
	// ));

	// console.log(workElement);

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
						work1={works[0].companyName}
						work2={works[0].workPosition}
						work3={works[0].dateStart}
						work4={works[0].dateEnd}
						work5={works[0].workDetails}
						isShow={deleteWork}
						deleteToggle={deleteToggle}
						// addWork={addWork}
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
					work1={works[0].workPosition}
					work2={works[0].companyName}
					work3={works[0].dateStart}
					work4={works[0].dateEnd}
					work5={works[0].workDetails}
				/>
			</div>
		</>
	);
}
