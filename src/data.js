import { nanoid } from 'nanoid';

export const ArrOfObjects = [
	{
		id: nanoid(),
		fullName: 'John Doe',
		position: 'Software Engineer',
		phoneNumber: '1239 982 721',
		emailAddress: 'testing@gmail.com',
		location: 'france, milan',
		comments:
			'Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.'
	},
	{
		workDetails: [
			{
				id: nanoid(),
				companyName: 'A Software Engineer',
				workPosition: 'Software Engineer',
				workDateStart: '2018',
				workDateEnd: '2020',
				workDetails: 'france, milan'
			},
			{
				id: nanoid(),
				companyName: 'Cebu city',
				workPosition: 'Downtown office',
				workDateStart: '2007',
				workDateEnd: '2008',
				workDetails: 'Ilalim ng beach'
			}
		]
	},
	{
		schoolDetail: [
			{
				id: nanoid(),
				schoolName: 'University of the westside',
				schoolDegree: 'Master of 2Pac',
				schoolDateStart: '2007',
				schoolDateEnd: '2008'
			},
			{
				id: nanoid(),
				schoolName: 'University of the eastside',
				schoolDegree: 'Bachelor of Rapping in Big choppie',
				schoolDateStart: '2003',
				schoolDateEnd: '2007'
			}
		]
	}
];
