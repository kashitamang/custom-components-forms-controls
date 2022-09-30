/* eslint-disable react/prop-types */
import styles from './Search.css';

export default function SearchResultCard({
  pokemon,
}) {
  return (
    <li className={styles.SearchResultCard}>
      {pokemon.pokemon}
    </li>
  );
}
