const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber !== "number") {
    return "Error: invalid data type";
  } else if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
};

console.log(checkTypeNumber(8)); // Output: GENAP
console.log(checkTypeNumber(99)); // Output: GANJIL
console.log(checkTypeNumber("m")); // Output: Error: invalid data type
