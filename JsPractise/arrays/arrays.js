// 1- Bir dizideki pozitif ve çift sayıların toplamını ve adedini bulun.
const arr = [-5, 6, 3, -5, -7, 4, 12, -58, 72];

let toplam = 0;
let adet = 0;

/* for(let i=0; i<arr.length;i++){
 let sart=arr[i]>0 && arr[i]%2==0
    if (sart) {
        toplam+=arr[i];
        adet++;

  
    }
         console.log(`${adet} adet sayinin toplami= ${toplam}`);

}
 */
for (let item of arr) {
  if (item > 0 && item % 2 == 0) {
    toplam += item;
    adet++;
  }
  console.log(`${adet} adet sayinin toplami= ${toplam}`);
}
// 2- Ülke ve başkentlerin yazılı olduğu dizilerinde eşleşen indis elemanlarını
//birleştirerek ayrı bir diziye atın.
const ulkeler = [
  "Türkiye",
  "Almanya",
  "Fransa",
  "Hollanda",
  "İtalya",
  "İspanya",
  "Portekiz",
];
const baskentler = [
  "Ankara",
  "Berlin",
  "Paris",
  "Amsterdam",
  "Roma",
  "Madrid",
  "Lizbon",
];
let birlesikDizi = [];
for (let i in ulkeler) {
  birlesikDizi[i] = ulkeler[i] + "-" + baskentler[i];
}
console.log(birlesikDizi);

//3- Dizinin herbir elemanını ilk 3 karakterini büyük harfli olarak değiştirip alfabetik hale getirip yazdırın.

let ulkeler1 = [
  "Türkiye",
  "Almanya",
  "Fransa",
  "Hollanda",
  "İtalya",
  "İspanya",
  "Portekiz",
];

let newArr = [];
ulkeler1 = ulkeler1.sort((a, b) => a.localeCompare(b));
for (let item of ulkeler1) {
  item = item.substring(0, 3).toLocaleUpperCase();
  newArr.push(item);
}
console.log(newArr);

// 4- Dizideki herbir elemanın 2 katının mutlak değerini alıp başka bir diziye atın.
// Yeni dizinin elemanları azalan şekilde sıralansın.

let dizi1 = [-5, 6, 3, -5, -7, 4, 12, -58, 72];

newArr1 = [];

dizi1.forEach((item, index) => {
  newArr1[index] = Math.abs(item * 2);

  newArr1.sort((a, b) => a - b);
});

console.log(newArr1);

// 5- Dizideki elemanlardan uzunluğu belirtilen sayıya eşit olanaları ayrı bir dizide saklayan uygulamayı yapın.

const isimler = [
  "Ali",
  "Can",
  "Kemal",
  "Ahmet",
  "Oya",
  "Selim",
  "Mine",
  "Elif",
  "Bora",
];

let yeniIsimler = [];
const filter = (length) => {
  yeniIsimler = isimler.filter((isim) => isim.length == length);
  return yeniIsimler;
};

console.log(filter(4));

// 6- Dizideki sayıların ortalamasını bulun ortalamadan yüksek
// olanları başka bir diziye atarak yazdırın.
const notlar1 = [38, 62, 74, 28, 86, 67, 92, 100, 56, 94, 72];

let total=notlar1.reduce((total,index)=> total+index,0);

let average=Math.round(total/notlar1.length);

const ortUst=()=>{
    newAverage=notlar1.filter(t=>t>average);

    return newAverage;

}

console.log(average)
console.log(ortUst())

