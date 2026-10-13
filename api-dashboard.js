document.addEventListener('DOMContentLoaded', () => {
  const loadingState = document.getElementById('loadingState');
  const errorState = document.getElementById('errorState');
  const errorMessage = document.getElementById('errorMessage');
  const tablePasien = document.getElementById('tablePasien');
  const tbodyPasien = document.getElementById('tbodyPasien');
  const noDataMessage = document.getElementById('noDataMessage');
  const btnRetry = document.getElementById('btnRetry');
  const searchInput = document.getElementById('searchPasien');

  let allPatients = [];

  // Fungsi Fetch Data menggunakan async/await, try/catch, dan response.ok
  async function fetchAntreanData() {
    loadingState.style.display = 'block';
    errorState.style.display = 'none';
    tablePasien.style.display = 'none';
    noDataMessage.style.display = 'none';

    try {
      const response = await fetch('data-antrean.json');
      
      // Pemeriksaan response.ok
      if (!response.ok) {
        throw new Error(`Gagal mengambil data! Status HTTP: ${response.status}`);
      }

      const result = await response.json();
      
      // Render Statistik
      document.getElementById('statTotal').textContent = result.data.statistik.totalAntrean;
      document.getElementById('statActive').textContent = result.data.statistik.sedangDilayani;
      document.getElementById('statDone').textContent = result.data.statistik.selesai;

      allPatients = result.data.pasien;
      renderTable(allPatients);

      loadingState.style.display = 'none';
      tablePasien.style.display = 'table';

    } catch (error) {
      loadingState.style.display = 'none';
      errorMessage.textContent = `Terjadi kesalahan: ${error.message}`;
      errorState.style.display = 'block';
    }
  }

  // Fungsi Render Tabel
  function renderTable(data) {
    tbodyPasien.innerHTML = '';

    if (data.length === 0) {
      tablePasien.style.display = 'none';
      noDataMessage.style.display = 'block';
      return;
    }

    tablePasien.style.display = 'table';
    noDataMessage.style.display = 'none';

    data.forEach(pasien => {
      let badgeClass = 'badge-tunggu';
      if (pasien.status === 'Selesai') badgeClass = 'badge-selesai';
      if (pasien.status === 'Sedang Dilayani') badgeClass = 'badge-proses';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${pasien.id}</strong></td>
        <td>${pasien.nik}</td>
        <td>${pasien.nama}</td>
        <td>${pasien.poli}</td>
        <td><span class="${badgeClass}">${pasien.status}</span></td>
        <td>${pasien.waktu}</td>
      `;
      tbodyPasien.appendChild(tr);
    });
  }

  // Fitur Search / Filter Data setelah dimuat
  searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = allPatients.filter(p => 
      p.nama.toLowerCase().includes(keyword) || 
      p.poli.toLowerCase().includes(keyword) ||
      p.id.toLowerCase().includes(keyword)
    );
    renderTable(filtered);
  });

  // Event Tombol Retry
  btnRetry.addEventListener('click', fetchAntreanData);

  // Panggil fungsi saat pertama kali dimuat
  fetchAntreanData();
});