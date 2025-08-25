import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);

  function addTodo(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [trimmed, ...prev]);
  }

  function deleteTodo(index: number) {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tasks</h1>
      <TodoForm onAdd={addTodo} />

      <TodoItems items={todos} onDelete={deleteTodo} />
    </div>
  );
}
