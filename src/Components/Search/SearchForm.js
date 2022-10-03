/* eslint-disable react/prop-types */
import { InputControl, FormButton } from '../Forms/FormControls.js';
import useSearchForm from '../../hooks/use-search-form.js';

export default function SearchForm({ onSubmit }) {
  const { 
    name, 
    setName, 
  } = useSearchForm();
  
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    onSubmit(formDataObject);
    // console.log('formData', formDataObject);
  };
  return (
    <form onSubmit={formSubmit}>
      <InputControl
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormButton type="submit">Search</FormButton>
    </form>
  );
}
