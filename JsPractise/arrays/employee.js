const data = [
    {
      ad: "Asli Yurt",
      yas: 29,
      sehir: "",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      meslek: "product owner",
    },
    {
      ad: "Demir Kurt",
      yas: 31,
      img: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      meslek: "Automation Engineer",
    },
    {
      ad: "Can Kara",
      yas: 25,
      img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      meslek: "Intern",
    },
    {
      ad: "Sara Duru",
      yas: 27,
      img: "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      meslek: "Web Developer",
    },
    {
      ad: "Suat Gok",
      yas: 32,
      img: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      meslek: "Web Designer",
    },
  ];

  let mode=true;

  document.getElementById("btn").addEventListener("click",()=>{
    if(mode){
        document.querySelector(".alt").style.display="inline-block";
    }
    else{
          document.querySelector(".alt").style.display="none";
    }
  mode=!mode;

  });


  const baslik=document.getElementById("baslik");
  const yas=document.getElementById("yas");
  const meslek=document.getElementById("meslek");
  const resim=document.getElementById("resim");
  const geri=document.getElementById("geri");
  const ileri=document.getElementById("ileri");

  const kisiGetir = (index) => { 

    let getir=data[index];
    baslik.innerText=getir.ad;
    yas.innerText=getir.yas;
    resim.src=getir.img;
    meslek.innerText=getir.meslek;

  }
  let objIndex=0;


  ileri.addEventListener("click",()=>{
    objIndex++;
    if (objIndex>data.length-1) {
        objIndex=0;
        
    }
    kisiGetir(objIndex)

  })

  geri.addEventListener("click",()=>{
    objIndex--;
    if (objIndex<0) {
        objIndex=data.length-1
        
    }
    kisiGetir(objIndex);

  })
