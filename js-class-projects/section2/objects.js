/*
    Object Literals
*/
console.log("this is the objects file")

let litO= {
  attr1:  "First Attribute",
  attr2:  "2nd Attribute",
  attr3:  "3rd Attr",
  attr4:  "abbreviating because I'm getting tired of writing stuff",
  attr5: [{title:'Lord of the rings', author:'JR Tolkein'},
          {title:`The Hobbit`, author: `JR Tolkein`},
          {title:`The Wheel of Time`, author:`Robert Jordan` }],
  attr6:  "last attribute",
  myFunc: function(){
    console.log(`someone called my function...`);
  },
  anotherFunc: function(){
    console.log(`this is another function`);
  },
  prtArray: function(){
    console.log(`the array has the following values`);
    this.attr5.forEach((item,i)  => {
      console.log(`item ${i} in the array ${item.title}, written by ${item.author}`);

    });
  },
  newFunc(){
    console.log(`newFunc: the shorthand function works!!`);
  }
};

// console.log(litO);
// console.log(litO.attr4);
// litO.attr2="Baby Girl!"
// litO['attr6'] = 'whoah, take it easy there pardner';
// console.log(litO['attr2'] );
// console.log(litO['attr6'] );
// console.log(typeof litO);
// litO.myFunc();
// litO.anotherFunc()  ;
