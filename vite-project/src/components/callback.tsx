import { useCallback, useState } from "react";


function CounterComponent(){
    const[count, setCount] = useState(0);

    const increment = useCallback(()=>{

        setCount((prev) => prev+1)
    },[]);

    return(
        <>
            <h1>Count:{count}</h1>
            <button onClick={increment}> click me</button>
        </>
    )
}

export default CounterComponent;