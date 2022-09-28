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
