//String Variable Injection
let age = 30;
let byear = 1968;
let bmonth = "January";
let inject=`I am ${age} years old, and was born in ${byear} on ${bmonth}`;
console.log(inject);
let html = `
<h2>${age} years old</h2>
<p> Born in ${bmonth} in ${byear}</p>
<span> creating html on the fly</span>
`;
console.log(html);
let booly = Boolean(50); // non-zero number is 'truthy'
console.log(booly, typeof booly, "a numeric non-zero");
booly = Boolean(0);  // zero number is 'falsey'
console.log(booly, typeof booly, "a numeric zero");
booly = Boolean('');  // zero number is 'falsey'
console.log(booly, typeof booly, "a null string");
booly = Boolean('0');  // zero number is 'falsey'
console.log(booly, typeof booly, "any string with any value, even '0'");
/*
  loose equality
  ==
  !=
  >=
  <=

  Javascript does run time interpretation (ie, loose) to evaluate
  comparisons against multiple data types, as it is a loosely typed language
  let x = 25;
  if(x==25) is the same as if(x=='25').  Both are true even though diff datatypes.

  Strict equality checks datatypes as part of the agreement...
  let x=25;
  x==='25'; is false....x===25 is true.
*/

// let myvar = 25;
// console.log('I am not ' + myvar + ' years old');

// console.log('hello world');
// let myEmail='cameron.beeler@gmail.com';
// console.log(myEmail);
// let fName = 'Brandon';
// let lName = 'Sanderson';
// let fullName = fName + ' ' + lName;
// console.log(fullName);
// console.log('the first letter of ' + fName + "'s name is " + fullName[0]);
// console.log("the length of Brandon's name is " + fullName.length);
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// let emailNameEndex=myEmail.indexOf('@');
// console.log('my email name is from index 0 to index# ' + emailNameEndex);
// console.log("the email name is " + myEmail.slice(0,myEmail.indexOf('@')));
// let count = 10;
// console.log("count is " + (count++));
// count--;
// count **=3;
// console.log("count is " + (count));
// count **= (1/3);
// console.log("count is " + (count));

//        VAR test
// var myVar = 10;
if(true)
{
  var myVar = 20;
    console.log(`First code block myVar=${myVar}`)
  if(false)
  {
    var myVar = 30;
    console.log(`Second code block myVar=${myVar}`)
  }
}
    console.log(`Global code block myVar=${myVar}`)
