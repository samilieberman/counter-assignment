import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});

test("clicking + increments the count", async () => {
  expect(screen.getByText(/0/i)).toBeInTheDocument();
  await userEvent.click(screen.getByText(/\+/i));
  expect(screen.getByText(/1/i)).toBeInTheDocument();
});

test("clicking - decrements the count", async () => {
  expect(screen.getByText(/0/i)).toBeInTheDocument();
  await userEvent.click(screen.getByText(/\-/i));
  expect(screen.getByText(/-1/i)).toBeInTheDocument();
});
