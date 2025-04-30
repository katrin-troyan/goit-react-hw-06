import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const inputId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);
  const handleChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor={inputId} className={css.labelSearch}>
        Find contacts by name
        <input
          className={css.inputSearch}
          type="text"
          name="filter"
          id={inputId}
          value={filter}
          onChange={handleChangeFilter}
        />
      </label>
    </div>
  );
}
