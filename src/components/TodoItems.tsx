import styles from "./TodoItems.module.css";

interface TodoItemsProps {
  items: string[];
  onDelete: (index: number) => void;
}

export default function TodoItems({ items, onDelete }: TodoItemsProps) {
  if (items.length === 0) {
    return <div className={styles.empty}>No tasks yet</div>;
  }

  return (
    <ul className={styles.list}>
      {items.map((text, index) => (
        <li key={index} className={styles.item}>
          <span className={styles.text}>{text}</span>
          <button
            className={styles.delete}
            onClick={() => onDelete(index)}
            aria-label={`Delete ${text}`}
          ></button>
        </li>
      ))}
    </ul>
  );
}
