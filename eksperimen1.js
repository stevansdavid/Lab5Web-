
function operasiDuaBilangan() {
    const inputA = prompt("Masukkan angka pertama:");
    const inputB = prompt("Masukkan angka kedua:");

    if (
        inputA === null || inputB === null ||
        inputA.trim() === "" || inputB.trim() === "" ||
        Number.isNaN(Number(inputA)) ||
        Number.isNaN(Number(inputB))
    ) {
        alert("Input harus berupa angka yang valid.");
        return;
    }

    const a = Number(inputA);
    const b = Number(inputB);

    const hasil = document.getElementById("hasilOperasi");

    hasil.textContent =
        "Penjumlahan: " + (a + b) +
        " | Pengurangan: " + (a - b) +
        " | Perkalian: " + (a * b) +
        " | Pembagian: " + (b !== 0 ? a / b : "Tidak bisa dibagi nol") +
        " | Modulus: " + (b !== 0 ? a % b : "Tidak bisa dibagi nol");

    console.log(hasil.textContent);
}

// Eksperimen 2
function tampilkanPerkalian() {
    let hasil = "";

    for (let i = 1; i <= 10; i++) {
        hasil += "7 x " + i + " = " + (7 * i) + "\n";
    }

    document.getElementById("hasilPerkalian").textContent = hasil;
}

// Eksperimen 3
function cekGenap(angka) {
    return angka % 2 === 0;
}

function periksaGenap() {
    const input = document.getElementById("angkaGenap").value;
    const hasil = document.getElementById("hasilGenap");

    if (input.trim() === "" || !Number.isInteger(Number(input))) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
        return;
    }

    const angka = Number(input);

    hasil.textContent = cekGenap(angka)
        ? "Bilangan genap (true)"
        : "Bilangan ganjil (false)";
}

// Eksperimen 4
document.getElementById("formValidasi").addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const inputNilai = document.getElementById("nilai").value;
    const nilai = Number(inputNilai);
    const hasil = document.getElementById("hasilValidasi");

    if (nama === "" || inputNilai.trim() === "") {
        hasil.textContent = "Nama dan nilai wajib diisi.";
    } else if (!Number.isFinite(nilai) || nilai < 0 || nilai > 100) {
        hasil.textContent = "Nilai harus berada pada rentang 0–100.";
    } else {
        hasil.textContent = "Form valid. Nama: " + nama + ", Nilai: " + nilai;
    }
});

// Eksperimen 5
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach(function(item) {
    item.addEventListener("change", hitungTotalMenu);
});

function hitungTotalMenu() {
    let total = 0;

    daftarMenu.forEach(function(item) {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("totalMenu").textContent =
        total.toLocaleString("id-ID");
}

// Eksperimen 6
function toggleTeks() {
    const teks = document.getElementById("teksToggle");

    if (teks.style.display === "none") {
        teks.style.display = "block";
    } else {
        teks.style.display = "none";
    }
}
