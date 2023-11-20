// import necessary react testing library helpers here
// import the Counter component here

import Counter from "../components/Counter";
import {fireEvent, render, screen} from '@testing-library/react'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByRole('heading')).toHaveTextContent('Counter');
  
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const plusSign = screen.getByText('+');
  fireEvent.click(plusSign);
  expect(screen.getByTestId('count')).toHaveTextContent('1');

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const minusSign = screen.getByText('-');
  fireEvent.click(minusSign);
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
