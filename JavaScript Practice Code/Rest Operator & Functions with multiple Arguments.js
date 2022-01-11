
// old way 


function sum(num1,num2){
    console.log(num1+num2);
}

sum(20,30);
sum(20,30,40);

sum(20,30,40,50);

// it will not work in  sum("anish",20,30); in this case.

// 2nd old way 

function sum(){
    let sum =0;
    for(let i in arguments){
        sum+=arguments[i];
    }
    console.log(sum);
}


// this also will not work.  sum("anish", 20,30);


// now rest operator . 

function sum(name,...args){
    let sum =0;
    for(let i in args){ // in use for objects.
        sum+= args[i];
    }
    console.log(sum);
    console.log(name);
}

sum("anish", 20,30);
sum("anish",20,30,40);

// in this case. name will be ignored and ... rest of arguments will be calculated. 




function sum(){
    console.log(arguments); // converted to object.
}

sum(20,30,40);
sum(20,30);



// other. 

function sum(){
    let sum =0;
    for(let i in arguments){
        sum+=arguments[i];
    }
    console.log(sum);
}

sum("anish",10,20,30);

// its converted the whole code into string and it will be show like. output:- 0anish102030;

// this also will not work.  sum("anish", 20,30);




// rest 



function sum(name,...args){
    let sum =0;
    for(let i in args){ // in use for objects.
        sum+= args[i];
    }
    console.log(`${name} :`);
    console.log(sum);
}

sum("anish", 20,30);
sum("anish",20,30,40);

// output:- anish :50



// 2nd way rest 


function sum(name,surname,...args){
    let sum =0;
    for(let i in args){ // in use for objects.
        sum+= args[i];
    }
    console.log(`${name} ${surname} :`);
    console.log(sum);
}

sum("anish","bishnoi", 20,30);

// output:- anish bishnoi :50




//... args can't put in fist. it should be in last.
// and it converted array.

























