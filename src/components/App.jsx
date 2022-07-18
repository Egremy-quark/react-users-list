import UserList from './UserList';

const USERS = [
	{
		id: 1,
		name: 'Alfred',
		active: true,
		role: 'teacher'
	},
	{
		id: 2,
		name: 'Pepe',
		active: true,
		role: 'teacher'
	},
	{
		id: 3,
		name: 'Alex',
		active: false,
		role: 'student'
	},
	{
		id: 4,
		name: 'Roberto',
		active: false,
		role: 'suente'
	},
	{
		id: 5,
		name: 'Jaider',
		active: false,
		role: 'studente'
	},
	{
		id: 6,
		name: 'Pancho',
		active: false,
		role: 'studente'
	}
];

const App = () => {
	return <UserList initialUsers={USERS} />;
};

export default App;
