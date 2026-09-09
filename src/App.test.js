import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

const renderWithRouter = (ui, initialEntries = ['/home']) =>
  render(<MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>);

test('renders the main navigation tabs', () => {
  renderWithRouter(<App />);

  expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument();
});

test('toggles dark mode for the whole page', () => {
  renderWithRouter(<App />);

  const page = screen.getByRole('main');
  const toggle = screen.getByRole('switch', { name: 'Dark mode' });

  expect(page).not.toHaveClass('App-dark');
  fireEvent.click(toggle);
  expect(page).toHaveClass('App-dark');
  expect(toggle).toBeChecked();
});

test('capitalizes every word in the entered text', () => {
  renderWithRouter(<App />);

  const textInput = screen.getByRole('textbox');
  fireEvent.change(textInput, { target: { value: 'hello WORLD again' } });
  fireEvent.click(screen.getByRole('button', { name: 'Capitalize' }));

  expect(textInput).toHaveValue('Hello World Again');
  expect(screen.getByRole('alert')).toHaveTextContent('Text capitalized successfully.');
});

test('dismisses a successful action alert', () => {
  renderWithRouter(<App />);

  const textInput = screen.getByRole('textbox');
  fireEvent.change(textInput, { target: { value: 'hello' } });
  fireEvent.click(screen.getByRole('button', { name: 'UPPERCASE' }));

  fireEvent.click(screen.getByRole('button', { name: 'Dismiss alert' }));

  expect(screen.queryByRole('alert')).not.toBeInTheDocument();
});

test('provides case conversion, counts, and clear actions', () => {
  renderWithRouter(<App />);

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

test('renders the about page from its route', () => {
  renderWithRouter(<App />, ['/about']);

  expect(screen.getByRole('heading', { name: 'Make every word work harder.' })).toBeInTheDocument();
  expect(screen.getByText('Simple by design')).toBeInTheDocument();
});

test('renders the contact page from its route', () => {
  renderWithRouter(<App />, ['/contact']);

  expect(screen.getByRole('heading', { name: 'Tell us what would make writing easier.' })).toBeInTheDocument();
  expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email');
});
