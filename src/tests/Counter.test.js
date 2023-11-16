// import necessary react testing library helpers here
import {getByText, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', async () => {
  // Complete the unit test below based on the objective in the line above
    const counterMessage = screen.getByText(/Counter/i);
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const initialCount = screen.getByTestId(/count/i);
    expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const incrementButton = screen.getByText('+');
    userEvent.click(incrementButton);
    const count = screen.getByTestId(/count/i);
    expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    const decrementButton = screen.getByText('-');
    userEvent.click(decrementButton);
    const count = screen.getByTestId(/count/i);
    expect(count).toHaveTextContent('-1');
});
