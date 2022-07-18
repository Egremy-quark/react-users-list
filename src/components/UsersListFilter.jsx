import PropTypes from 'prop-types';
import style from './UserList.module.css';

const UsersListFilter = ({
	setSearch,
	search,
	setOnlyActive,
	onlyActive,
	setSortBy,
	sortBy,
	onlyInactive,
	setOnlyInactive
}) => {
	return (
		<div className={style.searchBar}>
			<form className={style.form}>
				<input
					type='text'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				<div className={style.active}>
					<div>
						<input
							type='checkbox'
							checked={onlyActive}
							onChange={e => setOnlyActive(e.target.checked)}
						></input>
						<span>activos</span>
					</div>
					<div>
						<input
							type='checkbox'
							checked={onlyInactive}
							onChange={e => setOnlyInactive(e.target.checked)}
						></input>
						<span>inactivos</span>
					</div>
				</div>
				<select
					className={style.select}
					value={sortBy}
					onChange={e => setSortBy(Number(e.target.value))}
				>
					<option value={0}>Por defecto</option>
					<option value={1}>Por nombre</option>
				</select>
			</form>
		</div>
	);
};

export default UsersListFilter;

UsersListFilter.propTypes = {
	setSortBy: PropTypes.any,
	setSearch: PropTypes.any,
	setOnlyActive: PropTypes.any,
	sortBy: PropTypes.any,
	search: PropTypes.any,
	onlyActive: PropTypes.any,
	setOnlyInactive: PropTypes.any,
	onlyInactive: PropTypes.any
};
