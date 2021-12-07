"use strict";

function PrintAfter(cb) {
  console.log("hello world!");
  cb();
}

const print = function () {
  console.log("Elon Musk");
};

console.log(PrintAfter(print));
