import styles from './About.css';
import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  FormButton,
} from '../Forms/FormControls';

export default function About() {
  return (
    <div className={styles.About}>
      <h1>Contact Us</h1>

      <form>
        <h3>Interested in working together?</h3>

        <InputControl
          label="Name"
          name="name"
          placeholder="your name"
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
        <FormButton text="submit"/>
      </form>
    </div>
  );
}
