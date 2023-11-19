// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument;
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const zeroCount = screen.getByText('p');
  expect(zeroCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const beforeUp = screen.getByRole('p');
  fireEvent.click(screen.getByText('+'));
  const afterUp = screen.getByText('p');
  expect(afterUp).toHaveTextContent(beforeUp + 1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const beforeDown = screen.getByRole('p');
  fireEvent.click(screen.getByText('-'));
  const afterDown = screen.getByText('p');
  expect(afterDown).toHaveTextContent(beforeDown - 1);
});
