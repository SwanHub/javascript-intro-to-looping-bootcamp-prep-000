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

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhile(num) {
  console.log("I run once regardless."")
}



