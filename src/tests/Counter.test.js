// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {});

test("renders counter message", () => {
    // Complete the unit test below based on the objective in the line above
    render(<Counter />);
    const counterMessage = screen.getByText(/counter/i);
    expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
    // Complete the unit test below based on the objective in the line above
    render(<Counter />);
    const initialCount = screen.getByText(/0/i);
    expect(initialCount).toBeInTheDocument();
});

test("clicking + increments the count", () => {
    // Complete the unit test below based on the objective in the line above
    render(<Counter />);
    //get the button with id of increment
    fireEvent.click(screen.getByText("+"));

    const incrementedCount = screen.getByText(/1/i);
    //expect count to be 1
    expect(incrementedCount).toBeInTheDocument();
});

test("clicking - decrements the count", () => {
    // Complete the unit test below based on the objective in the line above
    render(<Counter />);
    //get the button with id of increment
    fireEvent.click(screen.getByText("-"));

    const incrementedCount = screen.getByText(/-1/i);
    //expect count to be 1
    expect(incrementedCount).toBeInTheDocument();
});
