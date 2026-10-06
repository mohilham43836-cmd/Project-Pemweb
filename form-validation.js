document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const alertSuccess = document.getElementById('alertSuccess');

  // Set tanggal minimal = hari ini
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('tanggal').setAttribute('min', today);

  // Aturan Validasi per Field
  const validators = {
    nik: (value) => {
      if (!value.trim()) return 'NIK wajib diisi.';
      if (!/^\d+$/.test(value)) return 'NIK hanya boleh berisi angka.';
      if (value.length !== 16) return 'NIK harus berukuran tepat 16 digit.';
      return '';
    },
    nama: (value) => {
      if (!value.trim()) return 'Nama pasien wajib diisi.';
      if (value.trim().length < 3) return 'Nama minimal 3 karakter.';
      if (!/^[a-zA-A\s'+.-]+$/.test(value)) return 'Nama mengandung karakter tidak valid.';
      return '';
    },
    noHp: (value) => {
      if (!value.trim()) return 'Nomor HP/WhatsApp wajib diisi.';
      if (!/^(08|62)\d{8,12}$/.test(value)) return 'Format HP tidak valid (Contoh: 081234567890).';
      return '';
    },
    poli: (value) => {
      if (!value) return 'Silakan pilih poliklinik tujuan.';
      return '';
    },
    tanggal: (value) => {
      if (!value) return 'Tanggal kunjungan wajib dipilih.';
      if (value < today) return 'Tanggal kunjungan tidak boleh di masa lalu.';
      return '';
    }
  };

  // Fungsi Menampilkan/Menghapus Pesan Error
  function validateField(fieldId) {
    const input = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}Error`);
    const parentGroup = input.closest('.form-group');
    const errorMessage = validators[fieldId](input.value);

    if (errorMessage) {
      errorEl.textContent = errorMessage;
      parentGroup.classList.add('invalid');
      return false;
    } else {
      errorEl.textContent = '';
      parentGroup.classList.remove('invalid');
      return true;
    }
  }

  // Event Listener Real-time (input & blur)
  Object.keys(validators).forEach(fieldId => {
    const input = document.getElementById(fieldId);
    input.addEventListener('blur', () => validateField(fieldId));
    input.addEventListener('input', () => {
      if (input.closest('.form-group').classList.contains('invalid')) {
        validateField(fieldId);
      }
    });
  });

  // Event Listener Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isFormValid = true;
    Object.keys(validators).forEach(fieldId => {
      const isValid = validateField(fieldId);
      if (!isValid) isFormValid = false;
    });

    if (isFormValid) {
      alertSuccess.style.display = 'block';
      alertSuccess.scrollIntoView({ behavior: 'smooth' });
      form.reset();
      
      setTimeout(() => {
        alertSuccess.style.display = 'none';
      }, 5000);
    }
  });
});