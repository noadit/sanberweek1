// Fungsi untuk menghitung luas lingkaran
function hitungLuasLingkaran(jariJari) {
    if (jariJari <= 0) {
        return "Jari-jari harus lebih besar dari nol.";
    }
    const pi = Math.PI;
    const luas = pi * Math.pow(jariJari, 2);
    return luas;
}

const jariJari = 2; 
console.log("Luas lingkaran dengan jari-jari " + jariJari + " adalah " + hitungLuasLingkaran(jariJari));


// Fungsi untuk mengkuadratkan angka-angka dalam array
function kuadratkanAngka(arrayAngka) {
    // Menggunakan map() untuk mengkuadratkan setiap angka
    return arrayAngka.map(angka => angka * angka);
}

const angkaArray = [1, 2, 3, 4, 5];
const hasilKuadrat = kuadratkanAngka(angkaArray);

console.log("Array asli:", angkaArray);
console.log("Array setelah dikuadratkan:", hasilKuadrat);

