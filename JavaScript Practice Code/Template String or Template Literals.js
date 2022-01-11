
// 1. way 

let user="anish kumar";

document.write(`hello ${user} welcome to 2022`);

// 2nd way 
let email ="anishbishnoi127@gmail.com";

document.write(`hello ${user} welcome to 2022 & your email is ${email}`);


// 3rd way 

let one = "one";
let two="two";
let combine=`hello ${one} & hello ${two}`;

document.write(combine);




// 4 way 



let combine=`hello ${one} welcome to "2022" & 'hello' ${two}`;


// 5 way 


let combine=`hello ${one}
         welcome to "2022"          & 'hello' 
         ${two}`;



document.write(combine);  // view in line.

// but in console log. 
console.log(combine); // its show line and multiple space. like he write.


// 6 way 

let name ="anish";
let surname="bishnoi";

function combine(name,surname){
    return `${name} ${surname}`;
}

let display= `hello ${combine(name,surname)}`;


document.write(display);

console.log(display);











