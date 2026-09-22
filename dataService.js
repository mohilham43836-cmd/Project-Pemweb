const dataPasien = [
  { id: 'P001', nama: 'Budi Santoso', poli: 'Poli Umum', umur: 45, status: 'Selesai' },
  { id: 'P002', nama: 'Siti Aminah', poli: 'Poli KIA', umur: 28, status: 'Menunggu' },
  { id: 'P003', nama: 'Ahmad Yani', poli: 'Poli Gigi', umur: 35, status: 'Dalam Perawatan' },
  { id: 'P004', nama: 'Dewi Lestari', poli: 'Poli Umum', umur: 62, status: 'Menunggu' },
  { id: 'P005', nama: 'Rian Hidayat', poli: 'Poli Umum', umur: 19, status: 'Selesai' }
];

export const getPasienByPoli = (namaPoli) => {
  try {
    if (!namaPoli) {
      throw new Error("Nama poliklinik harus diisi!");
    }
    return dataPasien.filter(pasien => pasien.poli.toLowerCase() === namaPoli.toLowerCase());
  } catch (error) {
    console.error(`[Error getPasienByPoli]: ${error.message}`);
    return [];
  }
};

export const getDaftarNamaPasien = () => {
  return dataPasien.map(pasien => ({
    kode: pasien.id,
    namaLengkap: pasien.nama,
    kategoriUmur: pasien.umur >= 60 ? 'Lansia' : 'Dewasa'
  }));
};

export const getStatistikStatus = () => {
  return dataPasien.reduce((acc, pasien) => {
    acc[pasien.status] = (acc[pasien.status] || 0) + 1;
    return acc;
  }, {});
};

