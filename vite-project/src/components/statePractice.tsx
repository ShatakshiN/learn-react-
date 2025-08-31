import {  useState } from "react";

function SecondTask(){
    const [show, setShow] = useState(false);

    function HandleClick(){
        setShow(!show)
    }

    return(
        <>
            <button onClick={HandleClick}>
                {show ? 'hide': 'show'}
            </button>

            {show && <p>'hello world'</p>}
        </>
    )

}


function FormInput() {

  const [name, setName] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <form>
      <input type="text" value={name} onChange={handleChange} />
      <p>Hi, {name}</p>
    </form>
  );
}

export {FormInput};
