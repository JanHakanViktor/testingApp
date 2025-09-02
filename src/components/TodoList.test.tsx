import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TodoList from "./TodoList";
import "@testing-library/jest-dom";

describe("TodoList", () => {
  it("renders correctly", () => {
    render(<TodoList />);
    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument();
  });
});

it("adds a todo", () => {
  render(<TodoList />);
  const input = screen.getByLabelText(/new task/i);
  const addButton = screen.getByRole("button", { name: /add/i });

  fireEvent.change(input, { target: { value: "Test Task" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Test Task")).toBeInTheDocument();
});
