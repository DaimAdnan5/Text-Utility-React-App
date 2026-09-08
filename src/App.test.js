import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the main navigation tabs', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument();
});

test('capitalizes every word in the entered text', () => {
  render(<App />);

  const textInput = screen.getByRole('textbox');
  fireEvent.change(textInput, { target: { value: 'hello WORLD again' } });
  fireEvent.click(screen.getByRole('button', { name: 'Capitalize' }));

  expect(textInput).toHaveValue('Hello World Again');
});

test('provides case conversion, counts, and clear actions', () => {
  render(<App />);

  const textInput = screen.getByRole('textbox');
  fireEvent.change(textInput, { target: { value: 'Hello TWO words' } });

  expect(screen.getByText('15 characters')).toBeInTheDocument();
  expect(screen.getByText('3 words')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'lowercase' }));
  expect(textInput).toHaveValue('hello two words');

  fireEvent.click(screen.getByRole('button', { name: 'UPPERCASE' }));
  expect(textInput).toHaveValue('HELLO TWO WORDS');

  fireEvent.click(screen.getByRole('button', { name: 'Clear' }));
  expect(textInput).toHaveValue('');
});
