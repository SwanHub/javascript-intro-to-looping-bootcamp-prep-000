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

function doWhile(int) {
  console.log("I run once regardless."")
}



