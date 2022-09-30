import { useState } from 'react';
import styles from './SearchPage.css';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults.jsx';
import { FormButton } from '../Forms/FormControls';
import useSearchResults from '../../hooks/use-search-results.js';

export default function SearchPage() {
  const {
    nextPage,
    pokemon,
    setPokemon,
    searchParams,
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
      />
      <FormButton onClick={nextPage}>more</FormButton>
    </section>
  );
}
