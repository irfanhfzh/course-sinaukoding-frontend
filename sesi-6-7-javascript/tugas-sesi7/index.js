// Tugas Sesi 7 - Belajar Javascript

// Menggunakan If-Else
let noAngkot = 1;
let angkotBeroperasi = 10;
let jmlAngkot = 10;

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroperasi) {
//     console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
//   } else {
//     console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
//   }
// }

// Menggunakan Else-If
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (
    noAngkot <= angkotBeroperasi &&
    noAngkot !== 5 &&
    noAngkot !== 8 &&
    noAngkot !== 10
  ) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
    console.log("Angkot No. " + noAngkot + " sedang lembur.");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
  }
}
