import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useSearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const usableSearchParams = Object.fromEntries(
    searchParams.entries()
  );
  const [character, setCharacter] = useState(
    usableSearchParams.character || ''
  );
  return {
    character,
    searchForm: usableSearchParams,
    setCharacter,
    setSearchForm: setSearchParams,
  };
}
