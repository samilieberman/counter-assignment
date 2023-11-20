import {render, fireEvent, screen} from '@testing-library/react'

import Counter from '../components/Counter';
beforeEach(() => {

  render(<Counter />);
})

test('renders counter message', () => {
  const counter = screen.getByText(/Counter/i);
  expect(counter).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  const pTag = screen.getByTestId("count")
  expect(pTag).toHaveTextContent("0")
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'))
  const pTag = screen.getByTestId("count")
  expect(pTag).toHaveTextContent("1")
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'))
  const pTag = screen.getByTestId("count")
  expect(pTag).toHaveTextContent("-1")
  // Complete the unit test below based on the objective in the line above
});
