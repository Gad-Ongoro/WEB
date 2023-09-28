let books = ["Gad", "Omondi", "Ongoro", "Gismer", "Mosoti"];
function loopBooks(myBooks) {
    for (let i of myBooks){
        console.log(i.toUpperCase());
    }
}

function capArray (array) {
    let newArray = [];
    for (let i of array){
        newArray.push(i.toUpperCase())
    }
    //return cb2();
    console.log(newArray);
}

let handleArray = (cb) => {
    console.log(cb(books));
}

handleArray(loopBooks);
capArray(books);