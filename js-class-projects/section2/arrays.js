let names=['Cam', 'Kim', 'Shi', 'Ani', 'Wyatt'];
console.log(names);

let variety=['words', 'definitions', 3, 'crazy', 35, 'arrays', 3.14];
 let results = variety.join('-');
console.log(results);
results = variety.push('push');
console.log(`${results} words in the array ${variety}`);
/*
    this is a while loop on the array length, using FIFO stack pop & push commands
{
console.log(`${variety.length} words before I "pop" the element ${variety.pop()} out of the array "${variety}"`);
}
console.log(`${variety.length} words before I "pop" the element ${variety.pop()} out of the array "${variety}"`);
push pushes another value onto the array stack
pop pops another array value off of the stack.
*/

let inArray = "definitions";
let test = variety.includes(inArray);
console.log(`validating "${inArray}" in array = ${test}`);
// console.log(`validating "${inArray}" in array = ${test}`);
inArray=5;
test = variety.includes(inArray);
console.log(`validating "${inArray}" in array = ${test}`);
