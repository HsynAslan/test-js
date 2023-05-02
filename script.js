// document.getElementById("radio1").nextSibling;
var inputCount;
var indexSoruNumarasi = document.getElementById("soru-num-int").innerHTML;
window.onload = function () {
  if (indexSoruNumarasi == 1) {
    document.getElementById("geri-button").disabled = true;
    // inputCount = document // cevap sayısını buluyor
    //   .getElementById("cevap-id")
    //   .getElementsByTagName("input").length;
    document.getElementById("radio1").nextSibling.innerHTML =
      sorular[0].aciklama;
    console.log(inputCount);
  }
};

let sorular = [
  {
    numara: 1,
    aciklama: "JavaScript'te sözlük yapısı nasıl kullanılır?",
    cevap1: "afad",
    cevap2: "afad2",
    cevap3: "afad3",
    cevap4: "afad4",
    cevap5: "afad5",
    cevap: "e",
  },
  {
    numara: 2,
    aciklama: "JavaScript'te sözlük yapısı naasdadsıl kullanılır?",
    cevap1: "afadadsac",
    cevap2: "afadadsf2",
    cevap3: "afadczx<c3",
    cevap4: "afadad4",
    cevap5: "afadc<5",
    cevap: "e",
  },
  {
    numara: 3,
    aciklama: "JavaScript'te sözlük yapısı nasıl kullanılır33333?",
    cevap1: "afad--",
    cevap2: "afad2--",
    cevap3: "afad3--",
    cevap4: "afad4--",
    cevap5: "afad5--",
    cevap: "e",
  },
];

// console.log(sorular[0].numara); // 1
// console.log(sorular[1].aciklama); // JavaScript'te döngüler nasıl kullanılır?
// console.log(sorular[2].cevap); // JavaScript'te fonksiyonlar, 'function' anahtar kelimesi ile tanımlanır ve parametreler ve bir kod bloğu içerir.

// // Set Items
// localStorage.setItem("lastname", "Smith");
// // Retrieve
// document.getElementById("demo").innerHTML = localStorage.getItem("lastname");

function nextQuestion() {
  indexSoruNumarasi++;
  if (indexSoruNumarasi > sorular.length) {
    indexSoruNumarasi = 1; // başa dönüldü
  }

  screenUpdate(indexSoruNumarasi);
}
function screenUpdate(soruNumber) {
  // ekranda değişiklikler burda yapılacak

  document.getElementById("soru-num-int").innerHTML = soruNumber;
  document.getElementById("soru").innerHTML = sorular[soruNumber - 1].aciklama;

  document.getElementById("radio1").nextSibling.nextSibling.value =
    sorular[soruNumber - 1].cevap1;

  console.log(document.getElementById("radio1").nextSibling.nextSibling);
  console.log(JSON.stringify(sorular[soruNumber - 1].cevap1));

  // document.getElementById("radio1").nextSibling =
  //   sorular[soruNumber - 1].cevap1;

  // en son cevabı kaydedip sağ üste kaydetmek lazım ve clear lamak lazım burda !!
}
