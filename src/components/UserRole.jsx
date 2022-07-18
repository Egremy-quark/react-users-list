import PropTypes from 'prop-types';
import style from './UserRole.module.css';

const UserRole = ({ role }) => {
	const ROLE_STYLES = {
		teacher: ['Profesor', style.teacher],
		student: ['Alumno', style.student],
		other: ['Otro', style.other]
	};

	const [roleName, roleClassname] = ROLE_STYLES[role] || ROLE_STYLES.other;
	// console.log('    - UserRole');
	return <span className={`${style.role} ${roleClassname}`}>{roleName}</span>;
};

export default UserRole;

UserRole.propTypes = {
	role: PropTypes.any
};
