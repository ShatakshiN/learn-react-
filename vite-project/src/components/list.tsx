// bootstrap , components , fragments

/* function List(){
    return (
        <div>
            <h1> List Demo</h1>
            <ul className="list-group col-10">
                <li className="list-group-item col-4">An item</li>
                <li className="list-group-item col-4">A second item</li>
                <li className="list-group-item col-4">A third item</li>
                <li className="list-group-item col-4">A fourth item</li>
                <li className="list-group-item col-4">And a fifth one</li>
            </ul>
        </div>
    );

} */

/* a component can't return more that 1 element . if we did not wrap the h1 and ul inside a div then it will give error */
/* note - the above function is add an unneccessary div in our DOM so better solution is to use fragments  */
/* fragment  - lets us wrap multiple elements without a wrapper node (like <div>)) */

/* import { Fragment } from "react/jsx-runtime"; 
function List(){
    return (
        <Fragment>
            <h1> List Demo</h1>
            <ul className="list-group col-10">
                <li className="list-group-item col-4">An item</li>
                <li className="list-group-item col-4">A second item</li>
                <li className="list-group-item col-4">A third item</li>
                <li className="list-group-item col-4">A fourth item</li>
                <li className="list-group-item col-4">And a fifth one</li>
            </ul>
        </Fragment>
    );

}

here Fragment  is equivalent to <></> and if we use <></> then no need to import Fragment . 


*/

/* returning more than 1 element using fragment */

function List(){
    return (
        <>
            <h1> List Demo</h1>
            <ul className="list-group col-10">
                <li className="list-group-item col-4">An item</li>
                <li className="list-group-item col-4">A second item</li>
                <li className="list-group-item col-4">A third item</li>
                <li className="list-group-item col-4">A fourth item</li>
                <li className="list-group-item col-4">And a fifth one</li>
            </ul>
        </>
    );

}

export default List; 