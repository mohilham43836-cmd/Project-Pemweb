import { getPasienByPoli, getDaftarNamaPasien, dataPasien } from './dataService.js';

document.addEventListener('DOMContentLoaded', () => {
  const patientTableBody = document.getElementById('patientTableBody');
  const searchInput = document.getElementById('searchInput');
  const themeToggle = document.getElementById('themeToggle');
  const detailModal = document.getElementById('detailModal');
  const closeModal = document.getElementById('closeModal');
  const modalBody = document.getElementById('modalBody');

  // RENDER DANA KE TABEL DENGAN DOM MANIPULATION
  function renderTable(data) {
    patientTableBody.innerHTML = '';
    
    if (data.length === 0) {
      patientTableBody.innerHTML = `<tr><td colspan="6" style="text-align:center;">Data pasien tidak ditemukan.</td></tr>`;
      return;
    }

    data.forEach((pasien) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><strong>${pasien.id}</strong></td>
        <td>${pasien.nama}</td>
        <td>${pasien.poli}</td>
        <td>${pasien.umur} thn</td>
        <td><span class="badge ${pasien.status === 'Selesai' ? 'badge-success' : 'badge-warning'}">${pasien.status}</span></td>
        <td><button class="btn-action" data-id="${pasien.id}"><i class="fa-solid fa-eye"></i> Detail</button></td>
      `;
      patientTableBody.appendChild(row);
    });

    // Tambahkan Event Listener untuk tombol Detail (Interaksi 2)
    document.querySelectorAll('.btn-action').forEach(button => {
      button.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        showPatientDetail(id);
      });
    });
  }

  // INTERAKSI 1: FILTER / PENCARIAN REAL-TIME
  searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = dataPasien.filter(pasien => 
      pasien.nama.toLowerCase().includes(keyword) || 
      pasien.poli.toLowerCase().includes(keyword)
    );
    renderTable(filtered);
  });

  // INTERAKSI 2: MODAL DETAIL PASIEN (EVENT CLICK & MODAL)
  function showPatientDetail(id) {
    const pasien = dataPasien.find(p => p.id === id);
    if (pasien) {
      modalBody.innerHTML = `
        <p><strong>ID Pasien:</strong> ${pasien.id}</p>
        <p><strong>Nama Lengkap:</strong> ${pasien.nama}</p>
        <p><strong>Poliklinik:</strong> ${pasien.poli}</p>
        <p><strong>Usia:</strong> ${pasien.umur} Tahun</p>
        <p><strong>Status Antrean:</strong> ${pasien.status}</p>
      `;
      detailModal.style.display = 'flex';
    }
  }

  closeModal.addEventListener('click', () => {
    detailModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === detailModal) {
      detailModal.style.display = 'none';
    }
  });

  // INTERAKSI 3: TEMA / DARK MODE MENGGUNAKAN LOCALSTORAGE
  const savedTheme = localStorage.getItem('puskesmas_theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    // Simpan Preferensi ke LocalStorage
    localStorage.setItem('puskesmas_theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  });

  // Render Awal Tabel
  renderTable(dataPasien);
});
