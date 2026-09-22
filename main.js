import { getPasienByPoli, getDaftarNamaPasien, getStatistikStatus } from './dataService.js';

console.log("=== SISTEM INFORMASI PUSKESMAS SEI TAIWAN ===");

console.log("\n1. Daftar Pasien Poli Umum:");
console.table(getPasienByPoli('Poli Umum'));

console.log("\n2. Daftar Nama & Kategori Umur:");
console.table(getDaftarNamaPasien());

console.log("\n3. Ringkasan Status Antrean:");
console.log(getStatistikStatus());

console.log("\n4. Pengujian Error Handling:");
getPasienByPoli('');

