//Basics 

const firstName = "Jose";
const lastname = 'garcia';

const val = 42;

const arr = [
    'string',
    42,
    function(){console.log('hi')}
]

arr[2]()

for (let l = 0; l < arr.length; l++){
    console.log(arr[l]);
}

//Coercion 

const x = 42;

console.log(typeof x);

console.log(typeof null);

//------------

const o =  new Object();

o.fn = "Jose";
o.ln = "algo";
o.isTeching = true
o.greet = function(){
    console.log("hi")
}

//other form
const o2 ={
    //something here like
    "gato": "miau",
    "edad": 12
}

const algo ={
    a:'a',
    b:'b'
}
//Stored by reference and not by value
const algo2 = algo;

algo.a = 'new value';

console.log(algo2.a)


 

