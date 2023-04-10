import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter Component", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  test("renders counter message", () => {
    const messageElement = document.querySelector("h2");
    expect(messageElement).toBeInTheDocument();
    expect(messageElement.textContent).toBe("Counter");
  });

  test("should render initial count with value of 0", () => {
    const countElement = document.querySelector('[data-testid="count"]');
    expect(countElement.textContent).toBe("0");
  });

  test("clicking + increments the count", () => {
    const countElement = document.querySelector('[data-testid="count"]');
    const incrementButton = document.querySelector('button:nth-of-type(1)');
    fireEvent.click(incrementButton);
    expect(countElement.textContent).toBe("1");
  });

  test("clicking - decrements the count", () => {
    const countElement = document.querySelector('[data-testid="count"]');
    const decrementButton = document.querySelector('button:nth-of-type(2)');
    fireEvent.click(decrementButton);
    expect(countElement.textContent).toBe("-1");
  });
});
