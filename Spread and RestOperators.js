const angka1 = [16, 17];
const angka2 = [...angka1, 48, 100];
console.log(angka2);

const user1 = { nama: "Revan", umur: 17 };
const user2 = { ...user1, pekerjaan: "Pelayaran" };
console.log(user2);

function hitung(...angka) {
return angka.reduce((acc, curr) => acc + curr, 0);
}
console.log(hitung(1, 2, 3, 4));