# Closures

## Tasks

### 1) Create a function that implements partial sum

sum(1)(2); // 3
const addOne = sum(1);
addOne(2); // 3
const addTen = sum(10);
addTen(2); // 12
addOne(4); // 5
addTen(10); // 20

### 2) Write a function redundant that takes in a string str and returns a function that returns str.

const f1 = redundant("apple");
//f1() ➞ "apple"
const f2 = redundant("pear");
//f2() ➞ "pear"
const f3 = redundant("");
//f3() ➞ ""

### 3) Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

add_ly = add_suffix("ly");
add_ly("hopeless"); // "hopelessly"
add_ly("total"); // "totally"
add_less = add_suffix("less");
add_less("fear"); // "fearless"
add_less("ruth"); // "ruthless"

### 4) Create a function printAfter that calls its argument after printing hello world

const print = () => console.log("Elon Musk");
printAfter(print);
// 'hello, world'
// 'Elon Musk'
