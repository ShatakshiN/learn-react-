import { useCallback, useReducer, useRef, useState } from "react";

interface Task{
    id:number;
    task:string;
    status: boolean;
}

type Action= {type:'added', id:number, task:string, status:false}
            |{type:'edited', id:number, task:string, status:boolean} |{type:'deleted', id:number}| {type:'toggled', id:number, status:boolean}


function taskReducer(taskList:Task[], action:Action){
    switch (action.type){
        case 'added':
            const nextTask ={
                id: action.id,
                task:action.task,
                status: action.status
            }
            return[...taskList, nextTask];
        
        case 'deleted':
            return taskList.filter((task)=>{task.id !== action.id })
            
        
        case 'toggled':

        default:
            return taskList;
    }

}

function TaskComponent(){
    const [text, setText] = useState<string>('');
    const nextId = useRef<number>(1);
    const [taskList, dispatch] = useReducer(taskReducer, []);

    const handleText = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setText(e.target.value);
    },[]);

    const handleAddClick = useCallback((e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        dispatch({type:'added', id:nextId.current, task:text, status:false});
        nextId.current++;
    },[text]);

    const handleToggle = useCallback((e:React.MouseEvent<HTMLButtonElement>,id:number, status:boolean)=>{
        e.preventDefault();
        dispatch({type:'toggled', id, status:!status})
    },[]);

    const handleEdit = useCallback((e:React.MouseEvent<HTMLButtonElement>,id:number, task:string, status:boolean)=>{
        e.preventDefault();
        setText(task)
        dispatch({type: 'edited', id , task, status})

    },[]);

    const handleDelete = useCallback((e:React.MouseEvent<HTMLButtonElement>,id:number)=>{
            e.preventDefault();
            dispatch({type:'deleted', id})
    },[]);

    return (
        <>
        <form >
            <input type="text" value={text} onChange={handleText} placeholder="which task is on your mind today" />
        </form>
        <button onClick={handleAddClick}>add</button>
        <ul className="list-group">
            {taskList.map((task)=>(
                <li key={task.id} className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value={task.task}  />
                    <label className="form-check-label" >{task.task}</label>
                    <button onClick={handleEdit}>edit</button>
                    <button onClick={handleDelete}>delete</button>
                </li>
            ))}
        </ul>
        </>
    )    
};

