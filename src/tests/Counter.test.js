// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
// import the Counter component here
import Counter from '../components/App';

beforeEach(() => {
  // Render the Counter component here
  render( <Counter /> );
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText(/0/i)
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increaseButton = screen.getByText("+");
  const result = screen.getByTestId("count");
  fireEvent.click(increaseButton);
  const newCount = screen.getByText("1");
  expect(newCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line 
  const decreaseButton = screen.getByText("-");
  const result = screen.getByTestId("count");
  fireEvent.click(decreaseButton);
  const newCount = screen.getByText("-1");
  expect(newCount).toBeInTheDocument();
});
