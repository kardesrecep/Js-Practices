const kullaniciSecimiEl = document.createElement("h2");
const sanalSecimEl = document.createElement("h2");
const sonucEl = document.createElement("h2");
const containerEl = document.getElementById("container");

containerEl.append(kullaniciSecimiEl, sanalSecimEl, sonucEl);

const secenekler = ["tas", "kagit", "makas"];

let kullaniciSecimi;
let sanalSecim;

const handleClick = (e) => {
  kullaniciSecimi = e.target.id;
  kullaniciSecimiEl.innerHTML = `Senin secimin:${kullaniciSecimi}`;
  generateSanalSecim();
  getSonuc();
};

const generateSanalSecim = () => {
  sanalSecim = secenekler[Math.floor(Math.random() * secenekler.length)];
  sanalSecimEl.innerHTML = `Bilgisayarın secimi:${sanalSecim}`;
};
for (let i = 0; i < secenekler.length; i++) {
    const buton = document.createElement("button");
    buton.setAttribute("id", secenekler[i]);
    buton.innerHTML = secenekler[i];
    buton.addEventListener("click", handleClick);
    containerEl.appendChild(buton);
  }
  
const getSonuc = () => {
    switch (kullaniciSecimi + sanalSecim) {
      case "makaskagit":
      case "tasmakas":
      case "kagittas":
        sonucEl.innerHTML = "SEN KAZANDIN";
        break;
      case "kagitmakas":
      case "makastas":
      case "taskagit":
        sonucEl.innerHTML = "KAYBETTİN!";
        break;
      case "kagitkagit":
      case "makasmakas":
      case "tastas":
        sonucEl.innerHTML = "BERABERESİNİZ!";
        break;
    }
  };