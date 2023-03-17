const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function getTotalPenjualan(dataPenjualanPakAldi) {
  // validasi tipe data parameter
  if (!Array.isArray(dataPenjualanPakAldi)) {
    throw new Error("Parameter harus bertipe Array");
  }

  let totalPenjualan = 0;

  // iterasi setiap object pada array dataPenjualan
  dataPenjualan.forEach((item) => {
    // validasi tipe data property totalTerjual
    if (typeof item.totalTerjual !== "number") {
      throw new Error("Properti totalTerjual harus bertipe Number");
    }

    totalPenjualan += item.totalTerjual;
  });

  return totalPenjualan;
}

const dataPenjualan = [
  { nama: "Sepatu Futsal Nike Vapor Academy 8", totalTerjual: 90 },
  { nama: "Sepatu Warrior Tristan Black Brown High", totalTerjual: 37 },
  { nama: "Sepatu Warrior Tristan Maroon High", totalTerjual: 90 },
  { nama: "Sepatu Warrior Rainbow Tosca Corduroy", totalTerjual: 90 },
];

const totalPenjualan = getTotalPenjualan(dataPenjualanPakAldi);
console.log(totalPenjualan); // 307
