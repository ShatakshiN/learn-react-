import { useState } from "react";

function RenderList() {
  function createList() {
    const tasks: string[] = [];
    const getData = localStorage.getItem("todoTasks");
    if (getData) {
      return JSON.parse(getData) as string[];
    } else {
      localStorage.setItem("todoTasks", JSON.stringify(tasks));
      return tasks;
    }
  }

  const [todo, setTodo] = useState<string>("");
  const [arrEle, setArrEle] = useState<string[]>(createList);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  function HandleClick() {
    if (todo.trim() === "") return;

    const newTask = [...arrEle, todo];
    setArrEle(newTask);

    localStorage.setItem("todoTasks", JSON.stringify(newTask));

    setTodo(""); // clear input after add
  }

  return (
    <>
      <input type="text" value={todo} onChange={handleChange} />
      <button onClick={HandleClick}>add</button>

      <ul>
        {arrEle.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </>
  );
}

export default RenderList;
