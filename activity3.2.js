function result(array){
    const arr= new Map(array)
    arr.delete('Age')

    arr.set("apple",5);
    arr.set("banana",3);
    arr.set("orange",2);
    console.log(arr.get("banana"))
    console.log(arr.size)
    return arr;
}

const keyval =[ ['Name','John'],
['Age',30],
['City','Colombo']
];
console.log(result(keyval));




// document.write(result1);
