
// before es6 


// 1st 

function hello (){
    console.log("hello");
}

hello();


// & 

let hello = function(){
    console.log("hello");
}

hello();



// now arrow function.  make function small. 

// 1 way 

let hello = () => {
    console.log("hello");
} // if multiple line then we have to use {}.

hello();

// 2nd way 

let hello = () => console.log("hello");  // if only one line.

hello();





// old way 


let welcome = function(name){
    return `hello & welcome ${name}`
}

console.log(welcome("anish"));

// output:-  hello & welcome ENTER  anish



// new way 


let welcome = (name,surname) =>{
    return `hello & welcome ${name} - ${surname}`;
}

// for multiple line {}.

console.log(welcome("anish","kumar"));

// output:-  hello & welcome ENTER anish - kumar




// single line. 

let welcome = (name,surname) => `hello & welcome ${name} - ${surname}`;

// no need to write return.

console.log(welcome("anish","kumar"));

// output:-  hello & welcome ENTER anish - kumar


// type of check.

console.log(typeof welcome); // output:- function. 



// if single parameter.


let welcome = name => `hello & welcome ${name}`;

// no need to write return. & no need to write ();

console.log(welcome("anish"));

// output:-  hello & welcome ENTER anish







