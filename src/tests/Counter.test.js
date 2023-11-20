// import necessary react testing library helpers here
import { render, fireEvent } from "@testing-library/react";
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  //render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  beforeEach;
  const { getByText } = render(<Counter />);
  expect(getByText('Counter')).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByTestId } = render(<Counter />);
  expect(getByTestId('count').textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByTestId, getByText } = render(<Counter />);
  const incrementButton = getByText('+');
  fireEvent.click(incrementButton);
  expect(getByTestId('count').textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByTestId, getByText } = render(<Counter />);
  const decrementButton = getByText('-');
  fireEvent.click(decrementButton);
  expect(getByTestId('count').textContent).toBe('-1');
});
