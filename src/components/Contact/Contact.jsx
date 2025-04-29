import css from './Contact.module.css';

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li key={id} className={css.contactBox}>
      <div className={css.contactBoxIcon}>
        <p className={css.contactText}>{name}</p>
        <p className={css.contactText}>{number}</p>
      </div>
      <button
        className={css.contactBoxBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}
