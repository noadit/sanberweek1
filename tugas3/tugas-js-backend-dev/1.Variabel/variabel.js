// variabel.js

// Menggunakan var
var nama = "Zilong";
console.log("Nama (var):", nama);

// Mengubah nilai variabel yang dideklarasikan dengan var
nama = "Balmond";
console.log("Nama setelah perubahan (var):", nama);

// Menggunakan let
let usia = 99;
console.log("Usia (let):", usia);

// Mengubah nilai variabel yang dideklarasikan dengan let
usia = 100;
console.log("Usia setelah perubahan (let):", usia);

// Menggunakan const
const kota = "LandofDown";
console.log("Kota (const):", kota);


// Tipe Data Primitif
let integer = 42;                // Number
let float = 3.14;                // Number
let string = "Hello, World!";   // String
let isTrue = true;              // Boolean
let isFalse = false;            // Boolean
let notDefined;                 // Undefined
let emptyValue = null;          // Null
let uniqueSymbol = Symbol('desc'); // Symbol
let largeNumber = BigInt(123456789012345678901234567890); // BigInt

// Tipe Data Non-Primitif
let array = [integer, float, string, isTrue, isFalse, emptyValue]; // Array
let object = {
    name: "Zilong",
    age: 99,
    city: "LandofDown"
}; // Object

// Operator Aritmatika
let sum = integer + float;          // Penjumlahan
let difference = integer - float;   // Pengurangan
let product = integer * float;      // Perkalian
let quotient = integer / float;     // Pembagian
let remainder = integer % 10;       // Sisa bagi

// Operator Perbandingan
let isEqual = integer === float;          // Sama dengan (===)
let isNotEqual = integer !== float;       // Tidak sama dengan (!==)
let isGreater = integer > float;          // Lebih besar dari (>)
let isLesser = integer < float;           // Lebih kecil dari (<)
let isGreaterOrEqual = integer >= float;  // Lebih besar atau sama dengan (>=)
let isLesserOrEqual = integer <= float;   // Lebih kecil atau sama dengan (<=)

// Menampilkan Tipe Data dan Nilai
console.log('Tipe Data Primitif:');
console.log('Number (integer):', integer);
console.log('Number (float):', float);
console.log('String:', string);
console.log('Boolean (true):', isTrue);
console.log('Boolean (false):', isFalse);
console.log('Undefined:', notDefined);
console.log('Null:', emptyValue);
console.log('Symbol:', uniqueSymbol);
console.log('BigInt:', largeNumber);

console.log('\nTipe Data Non-Primitif:');
console.log('Array:', array);
console.log('Object:', object);

// Menampilkan Hasil Operator Aritmatika
console.log('\nOperator Aritmatika:');
console.log('Penjumlahan:', sum);
console.log('Pengurangan:', difference);
console.log('Perkalian:', product);
console.log('Pembagian:', quotient);
console.log('Sisa bagi:', remainder);

// Menampilkan Hasil Operator Perbandingan
console.log('\nOperator Perbandingan:');
console.log('Sama dengan (===):', isEqual);
console.log('Tidak sama dengan (!==):', isNotEqual);
console.log('Lebih besar dari (>):', isGreater);
console.log('Lebih kecil dari (<):', isLesser);
console.log('Lebih besar atau sama dengan (>=):', isGreaterOrEqual);
console.log('Lebih kecil atau sama dengan (<=):', isLesserOrEqual);
