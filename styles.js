// Fungsi JavaScript untuk memvalidasi password
function validasiLogin(event) {
    event.preventDefault(); 
    
    const passwordInput = document.getElementById('password').value;
    const passwordBenar = "12345678"; // <--- Password yang Benar
    
    if (passwordInput === passwordBenar) {
        alert("Login berhasil! Mengalihkan ke halaman...");
        // Perluas logika: ganti 'html2.txt' dengan path yang benar, misalnya 'dashboard.html'
        window.location.href = "html2.txt"; 
    } else {
        alert("Password salah! Silakan coba lagi.");
        return false;
    }
}

// FUNGSI: Untuk mengubah tipe input password dengan ikon
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('togglePass');
    
    // Cek tipe input saat ini
    if (passwordField.type === "password") {
        passwordField.type = "text";
        // Ganti ikon menjadi mata terbuka (Lihat/Show)
        toggleButton.innerHTML = '&#x1F441;&#xFE0F;'; // Karakter Unicode Mata (👁️)
    } else {
        passwordField.type = "password";
        // Ganti ikon menjadi mata dicoret (Sembunyikan/Hide)
        toggleButton.innerHTML = '&#x1F576;'; // Mata dengan Ikon lain yang terlihat 'tersembunyi'
    }
}

// FUNGSI: Untuk tombol Google Login (hanya placeholder)
function googleLogin() {
     alert("Mengalihkan ke proses Google Sign-In... (Fungsionalitas backend diperlukan)");
}
