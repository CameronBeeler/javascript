const ol = document.querySelector('.people');
const p1 = document.querySelector('.text');

/*
  the following is an expression, the variable constant is set equal to a
  function definition, now the variable is a function variable.
*/
const f_greet = function(greeting='Good day', name='my friend'){
  console.log(`${greeting} ${name}`);
};

const greet = name =>  `hello ${name} - this is the arrow function`;
const hw = () => `Hello Beautiful World`;

let name = 'Cameron';
f_greet(`this is an expression - greeting!`, name);
f_greet();
console.log(greet(name));
let ret=hw();
console.log(ret);

/*
    use the forEach() method with arrow function to print out array elements
*/

let listy = ['cam', 'kim', 'Ani', 'Wyatt', 'Shi'];
let html = ``;
const personArrayList = (person, index)=>{
  console.log(`PAL:  index# ${index} and value ${person}`);
  html += `<li style:color=purple>${person}</li>`;
};
// listy.forEach(person => {console.log(person)});
listy.forEach((person, index) => { console.log(`index# ${index} and value ${person}`); });
listy.forEach(personArrayList); // pass the function definition reference in, don't expressly declare it...
console.log(html);
ol.innerHTML=html;
p1.innerHTML="Wow<br>This<br>Is<br>Pretty<br>Cool!";
