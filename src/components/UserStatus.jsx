import PropTypes from 'prop-types';
import CheckCircleIcon from './icons/CheckCircleIcon';
import CrossCircleIcon from './icons/CrossCircleICon';
import style from './UserStatus.module.css';

const UserStatus = ({ active, name }) => {
	const activeClassname = active ? style.active : style.inactive;
	const Icon = active ? CheckCircleIcon : CrossCircleIcon;
	// console.log(`    - UserStatus de ${name} y estoy en ${active}`);
	return (
		<div className={activeClassname}>
			<Icon className={style.icon} />
			<span>{active ? 'Activo' : 'Inactivo'}</span>
		</div>
	);
};

export default UserStatus;

UserStatus.propTypes = {
	active: PropTypes.any,
	name: PropTypes.any
};
