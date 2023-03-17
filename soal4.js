function isValidPassword(givenPassword) {
  // Data Type Parameter Validation
  if (typeof givenPassword !== "string") {
    throw new TypeError("Error: it's not a string");
  }

  // Password Length
  if (givenPassword.length < 8) {
    return false;
  }

  // Check for Uppercase, Lowercase, and Number
  let hurufBesar = false;
  let hurufKecil = false;
  let angka = false;
  for (let i = 0; i < givenPassword.length; i++) {
    const char = givenPassword.charAt(i);
    if (char.match(/[A-Z]/)) {
      hurufBesar = true;
    } else if (char.match(/[a-z]/)) {
      hurufKecil = true;
    } else if (char.match(/[1-9]/)) {
      angka = true;
    }
  }

  return hurufBesar && hurufKecil && angka;
}

console.log(isValidPassword(`Suoss123`));
// TRUE: karena sesuai dengan requirement yaitu 8 huruf berupa huruf besar di awal lalu huruf kecil dan beserta angka
console.log(isValidPassword(`suoss123`));
// FALSE: karena tidak menggunakan huruf besar
console.log(isValidPassword(`suoss1`));
// FALSE: karena hanya 6 huruf
console.log(isValidPassword(`weswos`));
// FALSE: karena tidak menggunakan angka
console.log(isValidPassword());
// ERROR:
