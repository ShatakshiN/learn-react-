/* import { useReducer, useState } from "react";

interface Task {
    id: number;
    text : string;
    complete : boolean;
}

type Action =
    |{type: 'added', id: number , text : string}
    |{type:'toggled', id:number }
    |{type: 'deleted', id:number}




let nextId = 1;

function TodoList(){
    const[tasks , dispatch ] = useReducer(taskReducer, []);
    const [text, setText] = useState('');

    function handleTextChange(e: React.ChangeEvent<HTMLInputElement>){
        setText(e.target.value)
    }

    function handleTasks(){
        dispatch({type: 'added', id: nextId++, text});
        setText('')
    }

    return (
        <>
            <input type="text" value= {text} onChange={ handleTextChange}  placeholder="enter a task"/>
            <button onClick={handleTasks}> add</button>
            
        </>
    )
} */

import { useReducer, useState } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

type Action =
  | { type: "added"; id: number; text: string }
  | { type: "toggled"; id: number }
  | { type: "deleted"; id: number };

function taskReducer(tasks:Task[], action:Action){

  switch(action.type){
    case 'added':
      return([...tasks,{id:action.id, text:action.text, done:false}])
    
    case 'toggled':
      return(tasks.map((item)=> (item.id === action.id) ? {...item, done: !item.done }: item ))
    
    case 'deleted':
      return (tasks.filter((item)=> (item.id !== action.id)));
    default:
      return tasks;
  }

}

let nextId = 1;

function TaskList(){
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [text , setText] = useState<string>('');

  function handleAdd(){
    dispatch({type:'added', id:nextId++, text});
    setText("")
  }

  return(
    <>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="add text" />
      <button onClick={handleAdd}> add</button> 

      <ul>
        {tasks.map((item)=>(
          <li key={item.id}>
            <span onClick={()=>dispatch({type:'toggled', id:item.id})}>{item.text}</span>
            <button onClick={()=>dispatch({type:'deleted', id:item.id})}>delete task</button>

          </li>
        ))}

      </ul>

    </>
  )

}

export default TaskList;