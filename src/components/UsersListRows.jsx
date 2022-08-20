import PropTypes from 'prop-types';
import UserRow from './UserRow';

const UserListRows = ({ users }) => {
	if (!users.length) return <p>No hay usuarios</p>;

	return users.map(user => <UserRow key={user.username} {...user} />);
};

export default UserListRows;

UserListRows.propTypes = {
	users: PropTypes.any
};
