import PropTypes from 'prop-types';
import { useState } from 'react';
import style from './UserList.module.css';
import UsersListFilter from './UsersListFilter';
import UserListRows from './UsersListRows';

const UserList = ({ initialUsers }) => {
	//* Custom Hook
	const { search, onlyActive, onlyInactive, sortBy, ...setFiltersFunctions } =
		useFilters();

	const { users } = useUsers(initialUsers);

	//! Recibiremos el useState, ya que este será el encargado de gestionar los atributos de los usuarios

	let usersFiltered = filterUsersByName(users, search);
	usersFiltered = filterUsersByActive(usersFiltered, onlyActive);
	usersFiltered = filterUsersByInactive(usersFiltered, onlyInactive);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className={style.wrapper}>
			<h1>Listado de usuarios</h1>
			<UsersListFilter
				search={search}
				sortBy={sortBy}
				onlyActive={onlyActive}
				onlyInactive={onlyInactive}
				{...setFiltersFunctions}
			/>
			<UserListRows users={usersFiltered} />
		</div>
	);
};

export default UserList;

const useUsers = initialUsers => {
	const [users /* setUsers */] = useState(initialUsers);

	return { users };
};

const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		onlyInactive: false,
		sortBy: 0
	});

	const setSearch = search => {
		console.log('Esta es la búsqueda', search);
		setFilters({
			...filters,
			search
		});
		
	};

	const setSortBy = sortBy => {
		setFilters({
			...filters,
			sortBy
		});
	};

	const setOnlyActive = onlyActive => {
		if (onlyActive && filters.sortBy === 3) {
			setFilters({
				...filters,
				sortBy: 0,
				onlyActive
			});
		} else {
			setFilters({
				...filters,
				onlyActive
			});
		}
	};

	const setOnlyInactive = onlyInactive => {
		setFilters({
			...filters,
			onlyInactive
		});
	};
	return {
		...filters,
		setSearch,
		setSortBy,
		setOnlyActive,
		setOnlyInactive
	};
};

const filterUsersByName = (users, search) => {
	if (!search) return [...users];

	const lowerCasedSearch = search.toLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().includes(lowerCasedSearch)
	);
};

const filterUsersByInactive = (users, active) => {
	if (!active) return [...users];
	return users.filter(user => user.active === false);
};

const filterUsersByActive = (users, active) => {
	if (!active) return [...users];
	return users.filter(user => user.active);
};

const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];

	switch (sortBy) {
		case 1:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		case 2:
			return sortedUsers.sort((a, b) => {
				if (a.role === b.role) return -1;
				if (a.role === 'teacher') return -1;
				if (a.role === 'student' && b.role === 'other') return -1;
				return 1;
			});
		case 3:
			return sortedUsers.sort((a, b) => {
				if (a.active === b.active) return 0;
				if (a.active && !b.active) return -1;
				return 1;
			});
		default:
			return sortedUsers;
	}
};

UserList.propTypes = {
	initialUsers: PropTypes.any
};
