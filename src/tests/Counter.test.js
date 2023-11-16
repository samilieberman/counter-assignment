// import necessary react testing library helpers here
// import the Counter component here
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByText(/0/i);
  expect(count).toBeInTheDocument();
});

test('clicking + increments the count', async () => {
  await fireEvent.click(screen.getByText('+'))
  const count = screen.getByText(/1/i);
  expect(count).toBeInTheDocument();
});

test('clicking - decrements the count', async () => {
  await fireEvent.click(screen.getByText('-'))
  const count = screen.getByText(/-1/i);
  expect(count).toBeInTheDocument();
});
