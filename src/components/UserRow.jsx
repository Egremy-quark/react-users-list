import PropTypes from 'prop-types';
import { useContext } from 'react';
import { UsersContext } from '../lib/context/UsersContext';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ id, name, active, role }) => {
	const { toggleUsersActive } = useContext(UsersContext);
	return (
		<div className={style.wrapper}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<UserStatus active={active} name={name} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}>
				<button onClick={() => toggleUsersActive(id)}>
					{active ? 'Desactivar' : 'Activar'}
				</button>
			</div>
		</div>
	);
};

export default UserRow;

UserRow.propTypes = {
	name: PropTypes.any,
	active: PropTypes.any,
	role: PropTypes.any,
	id: PropTypes.any
};
