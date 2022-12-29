const gonder = () => {

    let isim=document.getElementById("ad").value;
    let meslek=document.getElementById("meslek").value;
    let mesaj=document.getElementById("mesaj");
    mesaj.classList.remove("d-none");
    mesaj.classList.add("d-block")

    if(!isim||!meslek){
        mesaj.innerText="Lutfen formu eksiksiz doldurunuz"

    }else{
        mesaj.innerText=`Sayin ${meslek} ${isim} hosgeldiniz`
    }

}
const sil = () => {

    mesaj.innerText="";
    mesaj.classList.add("d-none")

}