"use strict";

function PrintAfter(str) {
  const print = function () {
    console.log("Elon Musk");
    return str;
  };

  return print;
}

let hello = PrintAfter("Hello Word");
console.log(hello());
// console.log(PrintAfter("asdasdasd"));
