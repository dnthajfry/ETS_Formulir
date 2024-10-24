document.getElementById('memberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    clearErrors();
    let isValid = true;
    
    // Validasi Nama Panggilan
    const namaPanggilan = document.getElementById('namaPanggilan').value.trim();
    if (namaPanggilan === '') {
        showError('namaPanggilanError', 'Nama Panggilan tidak boleh kosong.');
        isValid = false;
    } else if (namaPanggilan.length < 2 || namaPanggilan.length > 15) {
        showError('namaPanggilanError', 'Nama Panggilan harus memiliki minimal 2 dan maksimal 15 karakter.');
        isValid = false;
    }

    // Validasi Nama Lengkap
    const namaLengkap = document.getElementById('namaLengkap').value.trim();
    if (namaLengkap === '') {
        showError('namaLengkapError', 'Nama Lengkap tidak boleh kosong.');
        isValid = false;
    } else if (namaLengkap.length < 5 || namaLengkap.length > 30) {
        showError('namaLengkapError', 'Nama Lengkap harus memiliki minimal 5 dan maksimal 50 karakter.');
        isValid = false;
    }

    // Validasi Nomor Telepon
    const phone = document.getElementById('phone').value.trim();
    if (!/^\d{10,13}$/.test(phone)) {
        showError('phoneError', 'Nomor Telepon harus berupa angka, minimal 10 karakter dan maksimal 13 karakter.');
        isValid = false;
    }

    // Validasi Alamat
    const alamat = document.getElementById('alamat').value.trim();
    if (alamat === '') {
        showError('alamatError', 'Alamat harus diisi.');
        isValid = false;
    }

    // Validasi Email
    const email = document.getElementById('email').value.trim();
    if (!validateEmail(email)) {
        showError('emailError', 'Alamat Email tidak valid.');
        isValid = false;
    }

    // Validasi Password
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password.length < 6) {
        showError('passwordError', 'Kata Sandi harus minimal 6 karakter.');
        isValid = false;
    }
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Kata Sandi tidak cocok.');
        isValid = false;
    }

    // Jika semua validasi lolos
    if (isValid) {
        alert('Pendaftaran berhasil!');
    }
});

// Fungsi membersihkan error
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}

// Fungsi menampilkan error
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// Fungsi validasi email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
