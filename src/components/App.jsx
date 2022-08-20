import UserList from './UserList';

const USERS = [
	{
		username: '@Fred',
		name: 'Alfred Elias',
		active: true,
		role: 'teacher'
	},
	{
		username: '@Peponche',
		name: 'José Fernandez',
		active: true,
		role: 'teacher'
	},
	{
		username: '@Alejandro',
		name: 'Alexander Hacha',
		active: false,
		role: 'student'
	},
	{
		username: '@Beto',
		name: 'Roberto Fernandez',
		active: false,
		role: 'other'
	},
	{
		username: '@Tumama',
		name: 'Julian Perez',
		active: false,
		role: 'other'
	},
	{
		username: '@Pancho',
		name: 'Fracisco Lubo',
		active: false,
		role: 'other'
	}
];

const App = () => {
	return <UserList initialUsers={USERS} />;
};

export default App;
