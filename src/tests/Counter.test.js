// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
    render(<Counter />);
  // Render the Counter component here
})

test('renders counter message', () => {
    const counterMessage = screen.getByText(/Counter/i);
    expect(counterMessage).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
    const initialCount = screen.getByText(/0/i);
    expect(initialCount).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
    const incButton = screen.getByText('+');
    fireEvent.click(incButton);
    const updatedCount = screen.getByText(/1/i);
    expect(updatedCount).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
    const decButton = screen.getByText('-');
    fireEvent.click(decButton);
    const updatedCount = screen.getByText(/-1/i);
    expect(updatedCount).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});
