import styles from './About.css';
import { InputControl, TextAreaControl } from '../Forms/FormControls';

export default function About() {
  return (
    <div className={styles.About}>
      <h1>This is my about me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Neque, odio!
      </p>
      <form>
        <h3>Interested in working together?</h3>

        <InputControl
          label="Name"
          name="name"
          placeholder="your name"
        />
        <legend>have you worked with us before?</legend>
        <label>
          <input type="checkbox" />
          yes
        </label>
        <label>
          <input type="checkbox" />
          no
        </label>
        <SelectControl
          label=""
        />
        <label>
          what do you do?
          <select>
            <option disabled selected value="">
              select an option...
            </option>
            <option>Software Engineering</option>
            <option>UX/UI</option>
            <option>Small Business Owner</option>
            <option>Just Curious</option>
            <option>Student</option>
          </select>
        </label>

        <TextAreaControl
          label="Here is your time to shine, tell us your pitch"
          name="pitch"
          required
          placeholder="Shoot for the stars..."
        />
        <button>submit</button>
      </form>
    </div>
  );
}
