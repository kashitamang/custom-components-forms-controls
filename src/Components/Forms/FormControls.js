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
      <input {...rest} />
    </FormControl>
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <textarea {...rest} />
    </FormControl>
  );
}

export function SelectControl({ label, children, ...rest }) {
  return (
    <FormControl label={label}>
      <select {...rest}>{children}</select>
    </FormControl>
  );
}

export function CheckboxControl({ label, legend, ...rest }) {
  return (
    <fieldset className={styles.CheckboxControl}>
      <legend className={styles.LabelText}>{legend}</legend>
      <label>
        <input type="checkbox" {...rest} />
        {label}
      </label>
    </fieldset>
  );
}

export function FormButton({ text }) {
  return <button>{text}</button>;
}

export function RadioButtonControl({ label, legend, children, ...rest }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <FormControl label={label}>
        {children}
      </FormControl>
    </fieldset>
  );
}
