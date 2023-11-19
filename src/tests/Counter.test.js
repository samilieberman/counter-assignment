import { render, screen, fireEvent} from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterInitial = screen.getByTestId('count');
  expect(counterInitial).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const counterInitial = screen.getByTestId('count');
  const incrementOne = screen.getByText('+');
  //const decrementOne = screen.getByText('-');
  //fireEvent.click(decrementOne)
  //fireEvent.click(incrementOne)
  fireEvent.click(incrementOne)
  expect(counterInitial).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const counterInitial = screen.getByTestId('count');
  const decrementOne = screen.getByText('-');
  fireEvent.click(decrementOne)
  expect(counterInitial).toHaveTextContent('-1');
});


