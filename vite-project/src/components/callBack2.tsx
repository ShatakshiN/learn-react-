import { useCallback, useReducer, useState } from "react";

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

type Action =
  | { type: "added"; id: number; task: string }
  | { type: "toggled"; id: number }
  | { type: "deleted"; id: number };

function reducerFunction(todoList: Task[], action: Action): Task[] {
  switch (action.type) {
    case "added": {
      const newTask: Task = {
        id: action.id,
        task: action.task,
        completed: false,
      };
      return [...todoList, newTask];
    }
    case "toggled": {
      return todoList.map((t) =>
        t.id === action.id ? { ...t, completed: !t.completed } : t
      );
    }
    case "deleted": {
      return todoList.filter((t) => t.id !== action.id);
    }
    default:
      return todoList;
  }
}

let nextId = 1; // outside so it’s stable across renders

export default function TodoList() {
  const [taskText, setTaskText] = useState("");
  const [todoList, dispatch] = useReducer(reducerFunction, []);

  // Correct useCallback usage
  const handleTaskText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTaskText(e.target.value);
    },
    []
  );

  const handleAddClick = useCallback(() => {
    if (taskText.trim() === "") return;
    dispatch({ type: "added", id: nextId++, task: taskText });
    setTaskText("");
  }, [taskText]); // depends on taskText

  const handleToggle = useCallback((id: number) => {
    dispatch({ type: "toggled", id });
  }, []);

  const handleDelete = useCallback((id: number) => {
    dispatch({ type: "deleted", id });
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddClick();
        }}
      >
        <input
          type="text"
          value={taskText}
          onChange={handleTaskText}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul classNameName="list-group">
        {todoList.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
            {task.task}
            <button onClick={() => handleDelete(task.id)}>remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

