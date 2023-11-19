// import necessary react testing library helpers here
// import the Counter component here
import React from "react";
import {render, fireEvent, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter url="/Counter" />)
})

test('renders counter message', async () => {
  // Complete the unit test below based on the objective in the line above
  await screen.findByRole('heading')
  expect(screen.getByRole('heading')).toHaveTextContent('Counter')
});

test('should render initial count with value of 0', async () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count');
  expect(countElement).toBeInTheDocument();
  expect(countElement).toHaveTextContent('0');

});

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByTestId('count');

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByTestId('count');

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('-1');
});
