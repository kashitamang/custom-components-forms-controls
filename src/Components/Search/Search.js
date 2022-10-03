import styles from './Search.css';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import useSearchResults from '../../hooks/use-search-results';
import { FormButton } from '../Forms/FormControls.js';

export default function Search() {
  const {
    infiniteScrollRef,
    nextPage,
    character,
    setCharacter,
    searchResults,
    //pass the new prop
    searchZeldexWithParam,
  } = useSearchResults();
  return (
    <section className={styles.Search}>
      <SearchForm
        character={character}
        setCharacter={setCharacter}
        //here call a different search function
        onSubmit={searchZeldexWithParam}
      />
      <SearchResults
        data={searchResults}
        infiniteScrollRef={infiniteScrollRef}
      />
      <FormButton onClick={nextPage}>more</FormButton>
    </section>
  );
}
