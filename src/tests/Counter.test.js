import { render, screen, fireEvent } from '@testing-library/react'
import Counter from '../components/Counter';

beforeEach(() => {
    render(<Counter />)
})

test('renders counter message', () => {
    const counterMessage = screen.getByText(/Counter/i)
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    const initialValue = screen.getByText(/0/i)
    expect(initialValue).toBeInTheDocument();
});

test('clicking + increments the count', () => {
    const button = screen.getByText('+')

    fireEvent.click(button)
    expect(screen.getByText(/1/i)).toBeInTheDocument();

    fireEvent.click(button)
    expect(screen.getByText(/2/i)).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
    const button = screen.getByText('-')

    fireEvent.click(button)
    expect(screen.getByText(/-1/i)).toBeInTheDocument();

    fireEvent.click(button)
    expect(screen.getByText(/-2/i)).toBeInTheDocument();
});
