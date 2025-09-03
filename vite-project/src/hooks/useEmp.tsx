import { useReducer, useRef, useEffect } from "react";
import { employeeList } from "../components/employeeProject/employeeList";

interface Employee  {
  id: number;
  name: string;
  email: string;
  department: string;
};

type State = {
  employees: Employee[];
  loading: boolean;
};

type Action =
  | { type: "inital"; payload: Employee[] }
  | { type: "add"; payload: Employee };

function empReducer(state:State, action:Action): State{
    switch(action.type){
        case 'inital':
            return {employees:action.payload, loading:false};
        case 'add':
            return{...state, employees:[...state.employees, action.payload]}
        default:
            return state;
    }


}

function useEmp(){
    const[state , dispatch ] = useReducer(empReducer, {
        employees:[],
        loading:true,
    });

    const nextId = useRef(0);

    useEffect(() => {
        const timer = setTimeout(() => {
        dispatch({ type: "inital", payload: employeeList });

        nextId.current = employeeList.at(-1)?.id??0;
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    const newEmp = (emp:{name:string, email:string, department:string})=>{
        nextId.current+=1;
        dispatch({
            type:'add',
            payload: {id: nextId.current, ...emp}
        });
    };

    return{
        employees: state.employees,
        loading: state.loading,
        newEmp,
    };

}

export default useEmp;