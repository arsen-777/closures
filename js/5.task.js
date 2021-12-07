"use strict";

const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
function filterFalsyValues(arr) {
  let arr2 = arr.filter(Boolean);

  return arr2;
}

console.log(filterFalsyValues(values));
