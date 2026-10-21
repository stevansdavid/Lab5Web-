
const formNilai = document.getElementById("formNilai");
const hasil = document.getElementById("hasil");

function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

formNilai.addEventListener("submit", function(event) {
    event.preventDefault();

    const tugasInput = document.getElementById("tugas").value;
    const utsInput = document.getElementById("uts").value;
    const uasInput = document.getElementById("uas").value;

    const tugas = Number(tugasInput);
    const uts = Number(utsInput);
    const uas = Number(uasInput);

    if (tugasInput === "" || utsInput === "" || uasInput === "") {
        hasil.textContent = "Semua nilai wajib diisi.";
        return;
    }

    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        hasil.textContent = "Nilai harus berada pada rentang 0–100.";
        return;
    }

    const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum lulus";

    hasil.innerHTML =
        "Nilai Akhir: " + nilaiAkhir.toFixed(2) + "<br>" +
        "Predikat: " + predikat + "<br>" +
        "Status: " + status;
});

formNilai.addEventListener("reset", function() {
    hasil.textContent = "Hasil akan muncul di sini.";
});
