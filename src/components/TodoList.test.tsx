import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TodoList from "./TodoList";

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

it("deletes a todo", () => {
  render(<TodoList />);
  const input = screen.getByLabelText(/new task/i);
  const addButton = screen.getByRole("button", { name: /add/i });

  fireEvent.change(input, { target: { value: "Task to be deleted" } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByRole("button", {
    name: /delete task to be deleted/i,
  });
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Task to be deleted")).not.toBeInTheDocument();
});
