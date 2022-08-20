import PropTypes from 'prop-types';
import UserDisplay from './UserDisplay';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ username, name, active, role }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.name}>
				<UserDisplay name={name} username={username} />
			</div>
			<div className={style.status}>
				<UserStatus active={active} name={name} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}></div>
		</div>
	);
};

export default UserRow;

UserRow.propTypes = {
	name: PropTypes.any,
	active: PropTypes.any,
	role: PropTypes.any,
	username: PropTypes.any
};
