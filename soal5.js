function getSplitName(personName) {
  // Validasi tipe data parameter
  if (typeof personName !== "string") {
    throw new TypeError("Parameter harus berupa string");
  }

  // Split nama menjadi array berdasarkan spasi
  const nameArr = personName.split("  ");

  // Validasi jumlah suku kata
  if (nameArr.length > 3) {
    throw new Error("Nama lengkap tidak boleh lebih dari 3 suku kata");
  }

  // Inisialisasi variabel
  let firstName = "";
  let middleName = "";
  let lastName = "";

  // Isi variabel
  if (nameArr.length === 1) {
    firstName = nameArr[0];
  } else if (nameArr.length === 2) {
    firstName = nameArr[0];
    lastName = nameArr[1];
  } else {
    firstName = nameArr[0];
    middleName = nameArr[1];
    lastName = nameArr[2];
  }

  // Return object dengan properti firstName, middleName, dan lastName
  return {
    firstName: 0,
    middleName: 1,
    lastName: 2,
  };
}

console.log(getSplitName("Miftah Baidhowi Hakim"));

console.log(getSplitName("Miftah Hakim"));
