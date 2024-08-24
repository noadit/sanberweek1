const readline = require('readline');

// Membuat antarmuka readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk memeriksa angka genap atau ganjil
function cekGenapGanjil(nomor) {
    if (isNaN(nomor)) {
        return "Input bukan angka. Silakan masukkan angka yang valid.";
    } else {
        return (nomor % 2 === 0) ? "Angka " + nomor + " adalah genap." : "Angka " + nomor + " adalah ganjil.";
    }
}

// Fungsi untuk mendapatkan nama hari berdasarkan nomor
function namaHari(nomor) {
    switch (nomor) {
        case 1: return "Senin";
        case 2: return "Selasa";
        case 3: return "Rabu";
        case 4: return "Kamis";
        case 5: return "Jumat";
        case 6: return "Sabtu";
        case 7: return "Minggu";
        default: return "Nomor hari tidak valid. Harap masukkan nomor antara 1 dan 7.";
    }
}

    // input angka ganjil genao
    rl.question('Masukkan sebuah angka: ', (inputAngka) => {
        const nomorAngka = parseInt(inputAngka);
        console.log(cekGenapGanjil(nomorAngka));

    // input nomor hari
    rl.question('Masukkan nomor hari: ', (inputHari) => {
        const nomorHari = parseInt(inputHari);
        console.log("Nama hari: " + namaHari(nomorHari));

        rl.close();
    });
});
