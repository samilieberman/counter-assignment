import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  const counterMessage = screen.getByText("Counter");
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  const initialCount = screen.getByTestId("count");
  expect(initialCount).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  const addButton = screen.getByText("+");
  const countDisplay = screen.getByTestId("count");

  fireEvent.click(addButton);
  expect(countDisplay).toHaveTextContent("1");

  fireEvent.click(addButton);
  expect(countDisplay).toHaveTextContent("2");
});

test("clicking - decrements the count", () => {
  const subtractButton = screen.getByText("-");
  const countDisplay = screen.getByTestId("count");

  fireEvent.click(subtractButton);
  expect(countDisplay).toHaveTextContent("-1");

  fireEvent.click(subtractButton);
  expect(countDisplay).toHaveTextContent("-2");
});