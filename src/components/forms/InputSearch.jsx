import style from './InputSearch.module.css';

const InputSearch = props => (
	<input {...props} type='text' className={style.input}></input>
);
export default InputSearch;
