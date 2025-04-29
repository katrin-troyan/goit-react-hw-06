import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ onChange }) {
  const inputId = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={inputId} className={css.labelSearch}>
        Find contacts by name
        <input
          className={css.inputSearch}
          type="text"
          name="filter"
          id={inputId}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
