
const messages = [
  "Jika malam ini kau mengikuti langkah ini… jangan terlalu cepat menebak ke mana arahnya.",
  "Ada hal-hal yang hanya bisa dirasakan… saat kau biarkan dirimu diam dan percaya.",
  "Lihat sekelilingmu… malam tak benar-benar gelap jika kau tahu apa yang sedang menuntunmu.",
  "Dan jika kau bertanya, 'untuk apa semua ini?' Maka mungkin jawabannya sedang menunggumu di depan.",
  "Selamat ulang tahun ke-23. Semoga kau tumbuh setenang malam, sekuat pohon, dan seterang aurora di atas langit ini."
];

let i = 0;
const timeIntervals = [6000, 6000, 7000, 7000, 8000];

function showMessage() {
  if (i < messages.length) {
    const msg = document.getElementById(`message${i+1}`);
    msg.textContent = messages[i];
    msg.style.display = "block";
    i++;
    setTimeout(showMessage, timeIntervals[i - 1]);
  } else {
    const flower = document.getElementById("flower");
    flower.style.display = "block";
  }
}

window.onload = () => {
  showMessage();
};
