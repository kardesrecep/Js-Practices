const notlar = [
    "Kitap oku.",
    "Yürüyüse cik.",
    "Daily'e katill.",
    "Taskini bitir.",
];

const liste = document.querySelector("#liste");

let satir = "";

for(let not of notlar){
   satir += `<li>${not}</li>` 
}


liste.innerHTML = satir;



let veri = document.querySelector("#yeni");

document.querySelector("#ekle").addEventListener("click",()=>{
    if(!veri.value){
        veri.focus();
        return;
    }
    liste.innerHTML += `<li>${veri.value}</li>`;
    notlar.push(veri.value);
    sonuc(notlar);
    veri.value = "";
})

document.querySelector("#sil").addEventListener("click",()=>{
    if(notlar.length==0){
        alert("Listede silinecek eleman kalmadi!")
    }
    else{
        veri.value = "";
        notlar.pop();
        liste.removeChild(liste.lastElementChild);
        sonuc(notlar);
    }
})

const sonuc = (eklenen) => { 
    document.querySelector("#metin").innerHTML = eklenen.join("-");
 }

