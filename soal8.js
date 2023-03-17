function getInfoPenjualan(dataPenjualan) {
  // Validasi tipe data parameter
  if (!Array.isArray(dataPenjualan)) {
    throw new Error("Parameter harus berupa array");
  }

  // Inisialisasi variabel untuk menghitung total keuntungan dan modal
  let totalKeuntungan = 0;
  let totalModal = 0;

  // Inisialisasi variabel untuk menentukan produk dan penulis buku terlaris
  let produkBukuTerlaris = "";
  let penulisTerlaris = "";
  let terjualTerbanyak = 0;

  // Looping data penjualan untuk menghitung total keuntungan dan modal, serta mencari produk dan penulis buku terlaris
  dataPenjualan.forEach((produk) => {
    totalKeuntungan +=
      (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;
    totalModal += produk.hargaBeli * produk.totalTerjual;
    if (produk.totalTerjual > terjualTerbanyak) {
      terjualTerbanyak = produk.totalTerjual;
      produkBukuTerlaris = produk.namaProduk;
      penulisTerlaris = produk.penulis;
    }
  });

  // Hitung persentase keuntungan
  const persentaseKeuntungan =
    ((totalKeuntungan - totalModal) / totalModal) * 100;

  // Return object yang berisi informasi penjualan
  return {
    totalKeuntungan,
    totalModal,
    produkBukuTerlaris,
    penulisTerlaris,
    persentaseKeuntungan,
  };
}

// Contoh penggunaan function
const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const infoPenjualan = getInfoPenjualan(dataPenjualanNovel);
console.log(infoPenjualan);
// Output yang diharapkan:
// totalKeuntungan: 36855000,
// totalModal: 19965000,
// produkBukuTerlaris: 'Garis Waktu',
// penulisTerlaris: 'Fiersa Besari',
// persentaseKeuntungan: 84.1
