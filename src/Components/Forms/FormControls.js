import styles from './FormControls.css';
/* eslint-disable react/prop-types */

function FormControl({ label, children }) {
 
  return (
    <label className={styles.Labels}>
      {label}
      {children}
    </label>
  );
}

export function InputControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <input {...rest}/>
    </FormControl>
  );
}

export function TextAreaControl({ label, ...rest }){
  return(
    <FormControl label={label}> 
      <textarea {...rest}/>
    </FormControl>
  );
}

export function SelectControl({ 
  label, 
  children, 
  placeholder,
  ...rest }){
  return(
    <FormControl label={label}>
      <select {...rest}>
        {placeholder && <option disabled>{placeholder}</option>}
        {children}
      </select>
    </FormControl>
  );
}
