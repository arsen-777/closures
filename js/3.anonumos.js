"use strcit";

function add_suffix(str) {
  return function add_ly(str2) {
    return str2.concat(str);
  };
}

const add_ly = add_suffix("ly");
console.log(add_ly("hopeless")); // "hopelessly"
console.log(add_ly("total")); // "totally"

const add_less = add_suffix("less");
console.log(add_less("fear"));
console.log(add_less("ruth"));
