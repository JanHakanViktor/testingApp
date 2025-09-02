import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  it("renders input and button", () => {
    render(<TodoForm onAdd={() => {}} />);
    expect(screen.getByLabelText(/new task/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });
});

it("calls onAdd with trimmed value and clears input", () => {
  const onAdd = vi.fn();
  render(<TodoForm onAdd={onAdd} />);
  const input = screen.getByLabelText(/new task/i);
  const button = screen.getByRole("button", { name: /add/i });

  fireEvent.change(input, { target: { value: "  My Task  " } });
  fireEvent.click(button);

  expect(onAdd).toHaveBeenCalledWith("My Task");
  expect(input).toHaveValue("");
});

it("does not call onAdd for empty input", () => {
  const onAdd = vi.fn();
  render(<TodoForm onAdd={onAdd} />);
  const input = screen.getByLabelText(/new task/i);
  const button = screen.getByRole("button", { name: /add/i });

  fireEvent.change(input, { target: { value: "   " } });
  fireEvent.click(button);

  expect(onAdd).not.toHaveBeenCalled();
  expect(input).toHaveValue("   "); // stays the same
});
