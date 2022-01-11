//      1. var let const 

// main defference in var let const. 

var x ='hello';

var x ="world";

x="wow";  

//   note:- in var we re-declare and  re-assign the value.

// let:-

    let x="hello";
    let x="world";   //wrong
    x="wow"; 

//      note:-   in let we can't re-declare the value but we can do re assign the value.

//   const:-

    const x="hello";
    const x="world"; //wrong
    x="wow"; //wrong

//   we can't re-declare and we can't re assign the value. 





//                      scope 

// var:- 

if(condition){
    var x="hello";
}


document.write(x);



// note:- bcz of global scope we can use value outsite the function. 


// let:- 

if(condition){
    let x = "hello";
}


document.write(x); // wrong


// note:- we can't use outside the function. bcz of block of scope. 
// its valid in if. while, function , for anything.




// const:- 

if(condition){
    const x="hello";
}

document.write(x); //wrong


// note:-  block of scope can't use outside of block {} .










