import { FormButton, SelectControl } from '../Forms/FormControls.js';

export default function SearchForm({ type }) {
  return (
    <form>
      <SelectControl label="Select Type" name="type" value={type}>

      </SelectControl>
      <FormButton>Search</FormButton>
    </form>
  );
}
