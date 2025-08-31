import { useCallback, useReducer, useRef, useState } from "react";

interface Tasks{
    id:number;
    task : string; 
    status:boolean;
}

type Action = {type:'added', id:number,  task:string, status:boolean}
            | {type: 'toggled', status:boolean}| {type:'removed', id:number}


function reducerTask(taskList:Tasks[], action:Action){
    switch (action.type){
        case 'added':
            const nextTask = [{
                id: action.id,
                task: action.task,
                status:action.status
            }]
            return[...taskList, nextTask];
    }
}

function Task(){
    const [taskText, setTaskText] = useState<string>(''); 
    const [taskList, dispatch] = useReducer(reducerTask, []);
    const nextId = useRef(1);

    const handleText = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setTaskText(e.target.value);
    },[]);

    const handleAddClick = useCallback(()=>{
        dispatch({type:'added', id:nextId.current(nextId++), task: taskText, status:false })
    },[])

    return (
        <>
        <form>
            <input type="text" onChange={handleText} value={taskText} />

        </form>
        <br />
        <button > add Task</button>
        </>
    )
}