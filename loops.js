var emptySet = [];

function forLoop(array) {
    for (let i = 0; i < 25; i++) {
        if (i === 1) {
            array.push(`I am ${i} strange loop.`); }
        else { 
            array.push(`I am ${i} strange loops.`); }
    }
    return array;
}

forLoop(emptySet);

let num = 20;

function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }
  return "done";
}

whileLoop(num);

var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do { 
    console.log("I run once regardless."); 
    
  } while (incrementVariable() < num);
}

doWhileLoop(0);

var i = 0;

function doWhileLoop(num) {
    do { console.log("I run once regardless.");
       } while (increment() < num);
  }

doWhileLoop(10);




