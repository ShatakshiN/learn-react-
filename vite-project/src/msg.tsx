//jsx - js xml - under the hood -compiled as js code only 




/* this is how we can use dynamic values */
function Message(){
    let name = 'Shatakshi';
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>
}

//to use export 
export default Message;