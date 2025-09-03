
// passing JSX as children 

interface Para{
    classNameName: string
}



function ButtonHandler({classNameName}:Para){
    const handleClick = () =>{
        if (classNameName ==='btn btn-secondary'){
            alert('you clicked a blue button ')
        }else if (classNameName === "btn btn-danger") {
            alert("You clicked a red button");
        } else {
            alert("You clicked some other button");
        }
    }
    return (
        <div>
            <button onClick={handleClick} >
                click me 
            </button>
        </div>
    )

}

export default ButtonHandler; 

