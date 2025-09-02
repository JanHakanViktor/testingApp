import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  it("renders input and button", () => {
    render(<TodoForm onAdd={() => {}} />);
    expect(screen.getByLabelText(/new task/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });
});
