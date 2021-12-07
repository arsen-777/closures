"use strict";

function filterByLength(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}
console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"]));
