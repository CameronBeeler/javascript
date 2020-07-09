/*
   queue commands on an array[]
   - unshift():  adds to the front of the array
   - shift():  removes from the front of the array
   - push:  adds to end of the array
   - pop:   removes from the end of the array

   a queue behavior is FIFO (unshift to add elements, pop to remove elements)
   a stack behavior is LIFO (push to add elements to the end of the array, pop to remove elements)

   front and back are by convention, a difference without distinction,
   but be aware for maintainability sake
 */


let sList = ["I", "love", "Rock", "n", "Roll", "so", "put", "another", "dime", "in", "the", "jukebox", "baby"];
let qList =[];
console.log(`slist is now \n${sList} \n and qlist is now \n${qList}`);
while(sList.length)
{
    qList.unshift(sList.pop());
}
console.log(`slist is now \n${sList} \n and qlist is now \n${qList}`);

while(qList.length)
{
  sList.push(qList.shift());
}
console.log(`slist is now \n${sList} \n and qlist is now \n${qList}`);
