// import necessary react testing library helpers here
import React from 'react'
// import the Counter component here
import { render, fireEvent } from '@testing-library/react';
import Counter from '../../src/components/Counter';



let component;
let counter = 0;
beforeEach(() => {
  // Render the Counter component here
    component = render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const { getByText } = component;
    const counterMessage = getByText('Counter');
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const { getByTestId } = component;
    const initialCount = getByTestId('count'); 
    expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const { getByTestId, getByText } = component;
    const incrementButton = getByText('+');
    const count = getByTestId('count');

    fireEvent.click(incrementButton);
    counter += 1;

    expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    const { getByTestId, getByText } = component;
    const decrementButton = getByText('-');
    const count = getByTestId('count');

    fireEvent.click(decrementButton);
    counter -= 1;

    expect(count).toHaveTextContent('-1');
});
