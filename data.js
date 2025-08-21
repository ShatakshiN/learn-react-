async function getData() {
    try {
        const res = await fetch(
            'https://restcountries.com/v3.1/independent?status=true27'
        ); 
        const final = await res.json();
        console.log(final);
    } catch (err) {
        console.error(err);
    }
}

getData();
