import styles from './About.css';

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

        <label>
          name
          <input type="text" placeholder="name" />
        </label>
        <legend>have you worked with us before?</legend>
        <label>
          <input type="checkbox"/>
          yes
        </label>
        <label>
          <input type="checkbox"/>
          no
        </label>

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

        <label>
          what are you thinking?
          <textarea></textarea>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}
