
// passing JSX as children 

interface Para{
    className: string
}



function ButtonHandler({className}:Para){
    const handleClick = () =>{
        if (className ==='btn btn-secondary'){
            alert('you clicked a blue button ')
        }else if (className === "btn btn-danger") {
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

