/* rendering list - when you want to render multiple similar components from a collection of data uses filter() & map() */


/* render list using map  */
function RenderCityList(){
    const cities: string[] = ['Delhi', 'Mumbai', 'Kolkata', 'Banglore', 'Chennai'];
    return (
        <ul className="list-group col-10">
            {cities.map((i) => (<li className="list-group-item" key={i}>{i}</li>))}
        </ul>
    ) 

}

/* can also write the above function as below  */

const fruits: string[] = ['apple', 'orange', 'mango', 'lichi'];

function RenderFruitList(){
    let arr = fruits.map((i)=>(<li key={i}>{i}</li>));
    return <ul>{arr}</ul>
}

/* using filter */

let people = [{
    'id':0,
    'proffession': 'chemist'
    }, 
    {
        'id':1, 
        'proffession' :'teacher'
    },
    {
        'id':2,
        'proffession' : 'teacher'

    }
    
]

function FilterProffesionals(){
    let person1 = people.filter(i => i.proffession === 'teacher');

    let ans  = person1.map( j => <li key={j.id}>{j.proffession}</li>);

    return ans;
}


/* conditional rendering */

let items:number[]= [];
function ReturnItem(){
    /* let ans =  items.length ===0 ? <p>no item found</p> : null */ 
    let ans = items.length && <p>item not found</p> // matlab ki agar length 0 nahi hai matlab truthy hai toh fir para return ho jaayega
    return(
        <h1> {ans}</h1>
    )

}


export {RenderCityList};
export {RenderFruitList};
export {FilterProffesionals};  
export {ReturnItem};





/* key - it is used so that each component can correspond to the array item , this helps update the DOM - when we dynamically  add, remove elements from array */