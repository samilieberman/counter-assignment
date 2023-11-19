import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Counter from '../components/Counter'

beforeEach(() => {
    render(<Counter />);
})

test('renders counter message', () => {
    const heading_element = screen.getByText(/counter/i);
    expect(heading_element).toBeInTheDocument();});

test('should render initial count with value of 0', () => {
    const count_element = screen.getByTestId('count');
    expect(count_element).toHaveTextContent('0');});

test('clicking + increments the count', () => {
    const increment_button = screen.getByText('+');
    fireEvent.click(increment_button);
    fireEvent.click(increment_button);
    const count_element= screen.getByTestId('count');
    expect(count_element).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
    const decrement_button = screen.getByText('-');
    fireEvent.click(decrement_button);
    fireEvent.click(decrement_button);
    const count_element = screen.getByTestId('count');
    expect(count_element).toHaveTextContent('-2');
});
