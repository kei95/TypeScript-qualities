// Sound Code
const soundVariable: string = "this is sound string";
console.log("sound code - type should be string: ", typeof soundVariable);

// Unsound code
const unsoundVariable = "23" as never as number[];
console.log(
  "unsound code - type should be number[] (object): ",
  typeof unsoundVariable
);
