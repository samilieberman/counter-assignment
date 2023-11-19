// import necessary react testing library helpers here
// import the Counter component here

import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../../src/components/Counter';

beforeEach(() => {
	render(<Counter />)
})

test('renders counter message', () => {
	expect(screen.getByText(/counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
	const zeroCount = screen.getByTestId('count')
	expect(zeroCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
	fireEvent.click(screen.getByText('+'));
	expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
	fireEvent.click(screen.getByText('-'));
	expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
