import { useState } from "react";
import styles from "./TodoForm.module.css";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    onAdd(value);
    setText("");
  }

  return (
    <form className={styles.row} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="New task"
      />
      <button className={styles.button} type="submit" aria-label="Add task">
        Add
      </button>
    </form>
  );
}
