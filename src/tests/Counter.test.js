import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCountElement = screen.getByTestId("count");
  expect(initialCountElement).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByText("+");
  fireEvent.click(increment);

  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen.getByText("-");
  fireEvent.click(decrement);

  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("-1");
});
