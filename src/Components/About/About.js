import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  FormButton,
  RadioButtonControl,
} from '../Forms/FormControls';

import styles from './About.css';
import { useForm } from '../Forms/useForm.js';

export default function About() {
  const [data, handleChange] = useForm();

  function handleSubmit(event){
    event.preventDefault();
    //create target object

    //create userResponse object

    console.log('you hit submit!');
    //return userResponse object
  }

  return (
    <div className={styles.About}>
      <div>
        <h1>Lets Work Together!</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <InputControl
          label="Name"
          name="name"
          placeholder="your name"
          required
        />

        <RadioButtonControl
          label="name"
          legend="Select your favorite language"

          required
        />

        <CheckboxControl
          legend="Have you worked with us before?"
          label="Yes"
        />

        <SelectControl
          label="What is your role?"
          name="role"
          required
        >
          {' '}
          <option disabled selected value="">
            select an option...
          </option>
          <option>Software Engineering</option>
          <option>UX/UI</option>
          <option>Small Business Owner</option>
          <option>Just Curious</option>
          <option>Student</option>
        </SelectControl>

        <TextAreaControl
          label="Here is your time to shine, tell us your pitch"
          name="pitch"
          required
          placeholder="Shoot for the stars..."
        />
        <FormButton>Submit</FormButton>
      </form>
    </div>
  );
}
