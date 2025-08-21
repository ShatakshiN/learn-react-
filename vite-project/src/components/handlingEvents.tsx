function RenderColourList() {
  let colours: string[] = ["red", "green", "pink", "yellow"];
  let selectedIndex = 0;
  //event handler

  let colour = colours.map((color, index) => (
    <li
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      key={color}
      onClick={()=> colours.length ? selectedIndex +=1 : <p>not found</p> }
    >
      {color}
    </li>
  ));
  return <ul className="list-group col-10">{colour}</ul>;
}

export default RenderColourList;
