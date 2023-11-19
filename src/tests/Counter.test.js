// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  render(<Counter />);
  // Render the Counter component here
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const countMessage = screen.getByText(/count/i);
  expect(countMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
const countValue = screen.getByText(/0/i);
expect(countValue).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const count = screen.getByTestId('count');
  const button = screen.getByText('+');

  userEvent.click(button);

  expect(screen.getByTestId('count')).toHaveTextContent(1);
});

test('clicking - decrements the count', () => {
  const count = screen.getByTestId('count');
  const button = screen.getByText('-');

  userEvent.click(button);

  expect(screen.getByTestId('count')).toHaveTextContent(-1);

});
