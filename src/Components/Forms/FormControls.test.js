import { render, screen } from '@testing-library/react';
import { InputControl, TextAreaControl } from './FormControls.js';

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

  const inputControl = screen
    .getByLabelText('Here is your time to shine, tell us your pitch');
  expect(inputControl.name).toBe('pitch');
  expect(inputControl.placeholder).toBe('Shoot for the stars...');
  expect(inputControl.required).toBe(true);
});
