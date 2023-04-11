//Code encourage by Youtube PedroTech
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe(Counter, () => {
  it("should render initial count with value of 0", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("clicking + increments the count", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const increment = getByRole("button", { name: "+" });
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
    fireEvent.click(increment);
    const Value = Number(getByTestId("count").textContent);
    expect(Value).toEqual(1);
  });

  it("clicking - decrements the count", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrement = getByRole("button", { name: "-" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);

    fireEvent.click(decrement);

    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  });

});