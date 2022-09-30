// import styles from './SearchPage.css';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import useSearchResults from '../../hooks/use-search-results';
import { FormButton } from '../Forms/FormControls.js';

export default function Search() {
  const {
    infiniteScrollRef,
    nextPage,
    pokemon,
    setPokemon,
    searchResults,
    searchPokedex,
  } = useSearchResults();
  return (
    <section>
      <SearchForm
        pokemon={pokemon}
        setPokemon={setPokemon}
        onSubmit={searchPokedex}
      />
      <SearchResults
        results={searchResults}
        infiniteScrollRef={infiniteScrollRef}
      />
      <FormButton onClick={nextPage}>more</FormButton>
    </section>
  );
}
