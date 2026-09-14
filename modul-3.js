const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

// 2. Beri perintah saat tombol diklik (Event Listener)
btnTema.addEventListener('click', function() {
// toggle akan menambah class 'light-mode' jika belum ada,
 // dan menghapusnya jika sudah ada.
bodyHalaman.classList.toggle('light-mode');

// Opsi tambahan: Ubah teks ikon di dalam tombol
if (bodyHalaman.classList.contains('light-mode')) {
    btnTema.textContent = '🌙 Mode Gelap';
} else {
    btnTema.textContent = '☀️ Mode Terang';
}
});

const btnBukaModal = document.querySelector ('#btnKontak');
const elemenModal = document.querySelector ('#modalkontak');
const btnTutupModal = document.querySelector ('#btnTutupModal');

// Event saat tombol Kirim Pesan ditekan
btnBukaModal.addEventListener('click', function(event) {
event.preventDefault();// Mencegah link pindah halaman
elemenModal.classList.add('show');// Tambahkan class .show (lihat CSS)
});

// Event saat tombol Tutup ditekan
btnTutupModal.addEventListener('click', function() {
    elemenModal.classList.remove('show');// Hapus class .show
});

// Tombol Escape untuk menutup modal
document.addEventListener('keydown', function (event) {

    if (event.key === 'Escape') {
        elemenModal.classList.remove('show');
    }

});

const roleText = document.querySelector('.student-role');
const jam = new Date ().getHours();
if (jam >= 5 && jam < 12) {
    roleText.textContent = "Selamat Pagi";
} else if (jam >= 12 && jam < 15) {
    roleText.textContent = "Selamat Siang";
} else if (jam >= 15 && jam < 18) {
    roleText.textContent = "Selamat Sore";
} else {
    roleText.textContent = "Selamat Malam";
}

//avatar berputar saat di klik
const avatar = document.querySelector('.avatar-box');

avatar.addEventListener('click', function() {
    avatar.classList.remove('putar-avatar');

    setTimeout(() => {
        avatar.classList.add('putar-avatar');
    }, 10);
});