import styles from './SearchPage.css';

import SearchForm from './SearchForm';

export default function SearchPage() {
  return (
    <section>
      <SearchForm/>
      <ul>
        Search Results: 
        <li></li>
      </ul>
    </section>
  );
}
