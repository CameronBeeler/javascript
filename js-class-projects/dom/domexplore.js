
/*
**  accessing data from within the DOM
**  preference and flexibility is to querySelector*() as they produce NodeLists, and
**    the nodelist has a foreach option...

let para = document.querySelector('p');
console.log(para);

para = document.querySelector('.third');
console.log(para);

para=document.querySelector('div.error');
console.log(para);

para = document.querySelectorAll('.good p');
console.log(para);
console.log(para[2]);
para.forEach((p ) => {
console.log(p);
});

console.log('new getElementById methods');
para=document.querySelector('#p1'); // # needed with general querySelector...
console.log(para);
para=document.getElementById('p1'); // no # needed, since it is explicitly referenced
console.log(para);
para=document.getElementsByClassName('error'); // no # needed, since it is explicitly referenced
console.log(para);
let tags = document.getElementsByTagName('p');
console.log(tags);
*/

/*
    making changes to text and html within the DOM
*/

const par1 = document.querySelectorAll('div.error p');
par1.forEach((item, i) => {
  console.log(item.outerHTML);
  console.log(item.innerHTML);
  item.innerText += ' -> ADDED TEXT2';
  // console.log(par1[i].innerText);
  // par1[i].innerText += ' ->ADDED TEXT';
});

const changeme=document.querySelector('div.error');

// changeme.innerHTML+='<h2>THIS IS THE REPLACEMENT TEXT</h2>'
let names = ['cam', 'kim', 'wyatt', 'ani', 'shi'];
names.forEach((item, i) => {

  changeme.innerHTML += `<p class="name">Name ${i} :: ${item}</p>`;
});
