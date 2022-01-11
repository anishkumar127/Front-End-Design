
// . rest operator multiple arguments converted into single Array. 


function sum(name,...args){

}

sum("anish",20,30,40); // it will work.

let arr=[20,30,40];

sum("anish",arr); // wrong  .
// it will not work because of rest operator take multiple arguments and converted that arguments into single Array. 
// and here we are passing a single array so it will not work.



// now resolve that issue we will use spread operator and that part of ES6. 



sum("anish",...arr); // now it will.

//  spread operator value of array spread them.
// its use to spread the value of array . and now we can use them as a arguments. in function 
// convert multiple arguments. 

// spread operator use only calling time.

// rest operator use when function declare. 




// .. other cases of spread operator.




var arr = [10,20,30,40];

console.log(...arr);

// output:- 10 20 30 40; spread.

console.log([...arr]);

// output:- [10,20,30,40];  converted into array . its doing cloning.

// its doing copy. 


var arr1 = [10,20,30,40];

var arr2=arr1; // its doing complete cloning

arr1.push(50);

console.log(arr2);

// output:- [10,20,30,40,50];



// now using spread operator. 

var arr1 = [10,20,30,40];

var arr2=[...arr1]; // copy but not cloning.

arr1.push(50);

console.log(arr2);

// output:- 

 console.log(arr1); // [10,20,30,40,50];

 console.log(arr2); // [10,20,30,40];



 // another example.

    //  old way 

    var arr1 = [10,20,30,40];

    var arr2 = [50,60];

    var arr3 = arr1.concat(arr2);

    console.log(arr3);

    // output:-  [10,20,30,40,50,60];


    // new way spread 



 var arr1 = [10,20,30,40];

    var arr2 = [50,60];

    var arr3 = [...arr1,...arr2];

    console.log(arr3);

 // output:-  [10,20,30,40,50,60];


 var arr3 = [...arr2,...arr1]; // change the value sequence.

 // output:-  [50,60,10,20,30,40];


 var arr3 = [1,...arr1,...arr2,100];

 // output:-  [1,10,20,30,40,50,60,100];



 // in object. 

 var obj1 = {
     name="anish"
 };

 var obj2={
     surname="bishnoi"
 }


 var obj3 = {...obj1,...obj2};

 console.log(obj3);

//  output:- 
/*
    {
        name
        surname
    }
*/













