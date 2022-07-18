import PropTypes from 'prop-types';
import style from './UserStatus.module.css';

const UserStatus = ({ active, name }) => {
	const activeClassname = active ? style.active : style.inactive;

	// console.log(`    - UserStatus de ${name} y estoy en ${active}`);
	return (
		<span className={activeClassname}>{active ? 'Activo' : 'Inactivo'}</span>
	);
};

export default UserStatus;

UserStatus.propTypes = {
	active: PropTypes.any,
	name: PropTypes.any
};
