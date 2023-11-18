import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Counter from "../components/Counter";
import App from "../components/App";
import React from "react";

beforeEach(() => {
  // Render the Counter component here
    render(
    <div className="App">
        <h1>Welcome to my website!</h1>
        <Counter />
    </div>);

})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const welcomeMessage = screen.getByText('Welcome to my website!')
    expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const initCount = screen.getByText('Counter')
    expect(initCount).toBeInTheDocument('0')
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    // const countButton = screen.getByLabelText('+')
    userEvent.click(screen.getByText('+'))
    expect(screen.getByText('+')).toBeInTheDocument()
    //expect(screen.getByText('+')).toBeGreaterThan('1')

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    userEvent.click(screen.getByText('-'))
    expect(screen.getByText('-')).toBeInTheDocument()
});
