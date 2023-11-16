import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

let increment, decrement, countElement, counterMessage;

const renderCounter = () => {
  const utils = render(<Counter />);
  increment = utils.getByText('+');
  decrement = utils.getByText('-');
  countElement = utils.getByText('0');
  counterMessage = utils.getByText('Counter');

  return utils;
};

beforeEach(() => {
  renderCounter();
});

test('renders counter message', () => {
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(countElement).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  fireEvent.click(increment); 
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  fireEvent.click(decrement);
  expect(countElement).toHaveTextContent('-1');
});
