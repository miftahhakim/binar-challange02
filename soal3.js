const checkEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof email !== "string") {
    return "Parameter yang diberikan bukan string";
  } else if (emailRegex.test(email)) {
    return "VALID";
  } else {
    return "INVALID";
  }
};

console.log(checkEmail("miftah@gmail.co.id")); // hasil Output: VALID
console.log(checkEmail("miftah@gmail.com")); // hasil Output: VALID
console.log(checkEmail("miftah@gmail")); // hasil Output: INVALID
console.log(checkEmail(170701)); // Output: Parameter yang diberikan ini bukan string
