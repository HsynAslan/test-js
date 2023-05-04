// document.getElementById("radio1").nextSibling;
var inputCount;
var indexSoruNumarasi = document.getElementById("soru-num-int").innerHTML;
window.onload = function () {
  if (indexSoruNumarasi == 1) {
    document.getElementById("geri-button").disabled = true;
    // inputCount = document // cevap sayısını buluyor
    //   .getElementById("cevap-id")
    //   .getElementsByTagName("input").length;
    // document.getElementById("radio1").nextSibling.innerHTML =
    //   sorular[0].aciklama;
    console.log(inputCount);

    document.getElementById("soru-num-int").innerHTML = 1;
    document.getElementById("soru").innerHTML = sorular[0].aciklama;

    document.getElementById("cevap1HTML").innerHTML = sorular[0].cevap1;

    document.getElementById("cevap2HTML").innerHTML = sorular[0].cevap2;

    document.getElementById("cevap3HTML").innerHTML = sorular[0].cevap3;

    document.getElementById("cevap4HTML").innerHTML = sorular[0].cevap4;

    document.getElementById("cevap5HTML").innerHTML = sorular[0].cevap5;
    myFunction(countQuestions);
  }
};

let sorular = [
  {
    numara: 1,
    aciklama: "1.soru içeriği",
    cevap1: "1.afad",
    cevap2: "1.afad2",
    cevap3: "afad3",
    cevap4: "afad4",
    cevap5: "afad5",
    cevap: "e",
  },
  {
    numara: 2,
    aciklama: "JavaScript'te sözlük yapısı naasdadsıl kullanılır?",
    cevap1: "2.afadadsac",
    cevap2: "2.afadadsf2",
    cevap3: "afadczx<c3",
    cevap4: "afadad4",
    cevap5: "afadc<5",
    cevap: "e",
  },
  {
    numara: 3,
    aciklama: "JavaScript'te sözlük yapısı nasıl kullanılır33333?",
    cevap1: "3.afad--",
    cevap2: "3.afad2--",
    cevap3: "afad3--",
    cevap4: "afad4--",
    cevap5: "afad5--",
    cevap: "e",
  },
  {
    numara: 4,
    aciklama: "4.soru ?",
    cevap1: "4.a şıkkı",
    cevap2: "4fafaf",
    cevap3: "fasfaf",
    cevap4: "dfafaa",
    cevap5: "qadD",
    cevap: "a",
  },
];
var countQuestions = sorular.length;
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

function backQuestion() {
  indexSoruNumarasi--;
  if (indexSoruNumarasi < 1) {
    indexSoruNumarasi = sorular.length; // başa dönüldü
  }

  screenUpdate(indexSoruNumarasi);
}
function screenUpdate(soruNumber) {
  // ekranda değişiklikler burda yapılacak

  document.getElementById("soru-num-int").innerHTML = soruNumber;
  document.getElementById("soru").innerHTML = sorular[soruNumber - 1].aciklama;

  // document.getElementById("radio1").nextSibling.nextSibling.value =
  //   sorular[soruNumber - 1].cevap1;

  document.getElementById("cevap1HTML").innerHTML =
    sorular[soruNumber - 1].cevap1;

  document.getElementById("cevap2HTML").innerHTML =
    sorular[soruNumber - 1].cevap2;

  document.getElementById("cevap3HTML").innerHTML =
    sorular[soruNumber - 1].cevap3;

  document.getElementById("cevap4HTML").innerHTML =
    sorular[soruNumber - 1].cevap4;

  document.getElementById("cevap5HTML").innerHTML =
    sorular[soruNumber - 1].cevap5;

  // JSON.stringify(
  //   sorular[soruNumber - 1].cevap + "a"
  // );

  // document.getElementById("radio1").nextSibling =
  //   sorular[soruNumber - 1].cevap1;

  // en son cevabı kaydedip sağ üste kaydetmek lazım ve clear lamak lazım burda !!
}

function myFunction(e) {
  for (let i = 1; i < e + 1; i++) {
    let newBtn = document.createElement("button");
    newBtn.innerText = i;
    newBtn.classList.add("sorular-button"); // Burada sorular-button sınıfı ekleniyor.

    newBtn.onclick = function () {
      screenUpdate(i);
    };

    document.querySelector("#button-container").appendChild(newBtn);
  }
}

function soruEkleme() {
  var girdiSoru = document.getElementById("inputQuestion").value;
  var girdiA = document.getElementById("inputA").value;
  var girdiB = document.getElementById("inputB").value;
  var girdiC = document.getElementById("inputC").value;
  var girdiD = document.getElementById("inputD").value;
  var girdiE = document.getElementById("inputE").value;
  var girdiDogruCevap = document
    .getElementById("dogruCevap")
    .value.toLowerCase();
  //-------------
  const newObjAdd = {
    numara: countQuestions + 1,
    aciklama: girdiSoru,
    cevap1: girdiA,
    cevap2: girdiB,
    cevap3: girdiC,
    cevap4: girdiD,
    cevap5: girdiE,
    cevap: girdiDogruCevap,
  };

  if (
    girdiSoru != "" &&
    girdiA != "" &&
    girdiB != "" &&
    girdiC != "" &&
    girdiD != "" &&
    girdiE != "" &&
    girdiDogruCevap != ""
  ) {
    sorular.push(newObjAdd);
    countQuestions++;
    let newBtn = document.createElement("button");
    newBtn.innerText = countQuestions;
    newBtn.classList.add("sorular-button"); // Burada sorular-button sınıfı ekleniyor.

    newBtn.onclick = function () {
      screenUpdate(countQuestions);
    };

    document.querySelector("#button-container").appendChild(newBtn);
    console.log("dogru cevap: " + girdiDogruCevap);
  } else {
    alert("Boş Giriş Yaptınız, Lütfen Tekrar Deneyin");
  }
}

function soruCikarma() {
  var cikarilacakSoruNumarasi = document.getElementById("SoruCikarma").value;
  if (cikarilacakSoruNumarasi > countQuestions || cikarilacakSoruNumarasi < 1) {
    alert(
      "Girdiğiniz Sayıda Bir Soru Bulunmamaktadır !! Lütfen Tekrar Deneyinizz"
    );
  } else {
    // for (var i = 1; i <= sorular.length; i++) {
    //   console.log(sorular[i - 1].numara + ":" + sorular[i - 1].aciklama);
    // }
    // soru çıkartma yapıcaz

    sorular.splice(cikarilacakSoruNumarasi - 1, 1); // çıkarttı

    for (
      var indexFor = cikarilacakSoruNumarasi - 1;
      indexFor < countQuestions - cikarilacakSoruNumarasi;
      indexFor++
    ) {
      sorular[indexFor].numara--;
    }
  }
}
