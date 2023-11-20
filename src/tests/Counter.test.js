// import necessary react testing library helpers here
// import the Counter component here

import {render, screen, fireEvent} from '@testing-library/react'
import Counter from '../components/Counter'

beforeEach(() => {
  <Counter/>
})

test('renders counter message', () => {
  render(<Counter />);
  const welcomeMessage = screen.getByText(/count/i);
  expect(welcomeMessage).toBeInTheDocument();});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const initialMessage = screen.getByText(/count/);
  expect(initialMessage).toHaveTextContent(0);});

test('clicking + increments the count', () => {

  render(<Counter/>);
  const plusButton = screen.getByText('+');
  const startCount = screen.getByTextId('count');
  const countNumber = parseInt(startCount.textConent) + 4;
  const expected = countNumber.toString();
  expect(plusButton).toBeDefined()

  fireEvent.click(plusButton);
  fireEvent.click(plusButton);
  fireEvent.click(plusButton);
  fireEvent.click(plusButton);

  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent(expected);

});

test('clicking - decrements the count', () => {
  render(<Counter/>);
  const plusButton = screen.getByText('-');
  const startCount = screen.getByTextId('count');
  const countNumber = parseInt(startCount.textConent) - 4;
  const expected = countNumber.toString();
  expect(plusButton).toBeDefined()

  fireEvent.click(plusButton);
  fireEvent.click(plusButton);
  fireEvent.click(plusButton);
  fireEvent.click(plusButton);

  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent(expected);});
