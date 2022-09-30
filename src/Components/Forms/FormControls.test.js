import { render, screen } from '@testing-library/react';
import {
  InputControl,
  TextAreaControl,
  SelectControl,
  CheckboxControl,
  FormButton,
  // RadioButtonControl,
  LabelText,
} from './FormControls.js';
// import userEvent from '@testing-library/user-event';

test('Input Control', async () => {
  render(
    <InputControl
      label="User Name"
      name="username"
      required
      placeholder="Your user name"
    />
  );

  const inputControl = screen.getByLabelText('User Name');
  expect(inputControl.name).toBe('username');
  expect(inputControl.placeholder).toBe('Your user name');
  expect(inputControl.required).toBe(true);
});

test('Input Control', async () => {
  render(
    <TextAreaControl
      label="Here is your time to shine, tell us your pitch"
      name="pitch"
      required
      placeholder="Shoot for the stars..."
    />
  );

  const inputControl = screen.getByLabelText(
    'Here is your time to shine, tell us your pitch'
  );
  expect(inputControl.name).toBe('pitch');
  expect(inputControl.placeholder).toBe('Shoot for the stars...');
  expect(inputControl.required).toBe(true);
});

test('Select Control', async () => {
  render(
    <SelectControl label="What is your role?" name="role" required>
      <option disabled selected value="">
        select an option...
      </option>
      <option>Software Engineering</option>
      <option>UX/UI</option>
      <option>Small Business Owner</option>
      <option>Just Curious</option>
      <option>Student</option>
    </SelectControl>
  );

  const selectControl = screen.getByLabelText('What is your role?');
  expect(selectControl.name).toBe('role');
  expect(selectControl.required).toBe(true);
  expect(selectControl.options.length).toBe(6);
});

test('Checkbox Control', async () => {
  render(
    <CheckboxControl
      legend="Have you worked with us before?"
      label="Yes"
      name="yes"
      required
    />
  );
  const legend = screen.getByText('Have you worked with us before?');
  expect(legend).not.toBeNull();
  const checkboxControl = screen.getByLabelText('Yes');
  expect(checkboxControl.required).toBe(true);
});

test('Submit Button', async () => {
  render(<FormButton>Submit</FormButton>);

  const button = screen.getByRole('button');
  expect(button.textContent).toBe('Submit');
});


test('Label Text', async () => {
  render(<LabelText text="label" />);
  const label = screen.getByText('label');
  expect(label).toBeTruthy();
  expect(label.classList.contains('Required')).toBe(false);
});

// test('RadioButtonControl', async () => {
//   render(
//     <RadioButtonControl
//       legend="Select your favorite language"
//       label="Language"
//       name="language"
//       required
//     />
//   );
//   const legend = screen.getByText('Have you worked with us before?');
//   expect(legend).not.toBeNull();
//   const checkboxControl = screen.getByLabelText('Yes');
//   expect(checkboxControl.required).toBe(true);
// });
