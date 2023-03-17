function getAngkaTerbesarKedua(dataNumbers) {
  // Validasi parameter tipe data
  if (!Array.isArray(dataNumbers)) {
    throw new Error("tidak bertipe array");
  }

  // menghapus nilai duplikat dan mengurutkan array secara descending
  const uniqueNumbers = [...new Set(dataNumbers)];
  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);

  // jika array kurang dari 2 angka, return undefined
  if (sortedNumbers.length < 3) {
    return undefined;
  }

  // return angka terbesar kedua
  return sortedNumbers[1];
}

console.log(getAngkaTerbesarKedua([9, 4, 7, 7, 4, 3, 2, 2, 8])); // 8
console.log(getAngkaTerbesarKedua([1, 1, 1])); // undefined karena lebih kecil dari angka 2
console.log(getAngkaTerbesarKedua(0)); // Error: Parameter harus bertipe array
console.log(getAngkaTerbesarKedua()); // Error: Parameter harus bertipe array
