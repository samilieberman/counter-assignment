import { render, fireEvent, screen, getByTestId } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(/counter/i)).toBeInTheDocument;
});

test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId('count')).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText("+"));
  expect(screen.getByText(/1/));
});

test("clicking - decrements the count", () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText("-"));
  expect(screen.getByText(/-1/));
});
