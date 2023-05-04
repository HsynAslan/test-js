// document.getElementById("radio1").nextSibling;
var inputCount;
var indexSoruNumarasi = document.getElementById("soru-num-int").innerHTML;
var cevapList = ["a", "b", "c", "d", "e"];
var puan = 0;
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
    aciklama: "JavaScript'te hangi metodla dizinin sonuna eleman eklenir?",
    cevap1: "push()",
    cevap2: "append()",
    cevap3: "concat()",
    cevap4: "join()",
    cevap5: "slice()",
    cevap: "a",
  },
  {
    numara: 2,
    aciklama: "JavaScript'te hangi anahtar kelime ile değişken tanımlanır?",
    cevap1: "let",
    cevap2: "const",
    cevap3: "var",
    cevap4: "define",
    cevap5: "create",
    cevap: "b",
  },
  {
    numara: 4,
    aciklama: "Hangi metod bir dizinin sonuna yeni bir eleman ekler?",
    cevap1: "unshift()",
    cevap2: "pop()",
    cevap3: "push()",
    cevap4: "shift()",
    cevap5: "splice()",
    cevap: "c",
  },
  {
    numara: 4,
    aciklama: "JavaScript'te hangi metodla dizinin son elemanı silinir?",
    cevap1: "pop()",
    cevap2: "shift()",
    cevap3: "push()",
    cevap4: "unshift()",
    cevap5: "concat()",
    cevap: "a",
  },
  {
    numara: 5,
    aciklama:
      "CSS'te öğeler arasındaki boşlukları azaltmak için hangi özellik kullanılır?",
    cevap1: "padding",
    cevap2: "margin",
    cevap3: "border",
    cevap4: "spacing",
    cevap5: "height",
    cevap: "b",
  },
  {
    numara: 16,
    aciklama: "Hangi ifade bir JavaScript döngüsüdür?",
    cevap1: "if...else",
    cevap2: "try...catch",
    cevap3: "for",
    cevap4: "switch...case",
    cevap5: "class",
    cevap: "c",
  },
  {
    numara: 7,
    aciklama:
      "Hangi JavaScript metodunu kullanarak string ifadeleri birleştirirsiniz?",
    cevap1: "join()",
    cevap2: "concat()",
    cevap3: "slice()",
    cevap4: "splice()",
    cevap5: "merge()",
    cevap: "b",
  },
  {
    numara: 8,
    aciklama: "Hangisi JavaScript için geçerli bir veri tipi değildir?",
    cevap1: "Undefined",
    cevap2: "Symbol",
    cevap3: "String",
    cevap4: "NaN",
    cevap5: "Object",
    cevap: "c",
  },
  {
    numara: 9,
    aciklama: "Hangisi doğru bir ifade değildir?",
    cevap1: "JavaScript bir programlama dilidir.",
    cevap2: "JavaScript, sadece frontend geliştirme için kullanılır.",
    cevap3: "JavaScript'te fonksiyonlar birinci sınıf nesnelerdir.",
    cevap4: "JavaScript ES6'da let ve const anahtar kelimeleri eklenmiştir.",
    cevap5: "JavaScript'te == operatörü değer ve tip kontrolü yapar.",
    cevap: "b",
  },
  {
    numara: 10,
    aciklama:
      "JavaScript'te bir değişkeni tanımlamak için hangi anahtar kelime kullanılır?",
    cevap1: "var",
    cevap2: "const",
    cevap3: "let",
    cevap4: "function",
    cevap5: "return",
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
function soruKontrol() {
  {
    var ele = document.getElementsByName("cevapName");

    var dictDogruCevap = sorular[indexSoruNumarasi - 1].cevap;

    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        if (dictDogruCevap == cevapList[i]) {
          // cevap doğru
          console.log("cevap dogru");
          document.getElementsByClassName("sorular-button")[
            indexSoruNumarasi - 1
          ].style.backgroundColor = "green";
          puan += 100 / sorular.length;
          console.log("Puan: " + puan);
          document.getElementById("puanId").innerHTML = puan.toFixed(2);
          ele[i].checked = false;
        } else {
          console.log("cevap yanlış");
          document.getElementsByClassName("sorular-button")[
            indexSoruNumarasi - 1
          ].style.backgroundColor = "red";
          console.log("Puan: " + puan);
          ele[i].checked = false;
        }
      }
    }
  }
}

function nextQuestion() {
  soruKontrol();

  // input clear lamaa
  indexSoruNumarasi++;
  if (indexSoruNumarasi > countQuestions) {
    indexSoruNumarasi = 1; // başa dönüldü
  }

  screenUpdate(indexSoruNumarasi);
}

function backQuestion() {
  soruKontrol();
  // input clear lamaa
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
    // sağ üst tablo renkler silinmeli ve puan 0 lanmalı

    for (var d = 0; d < sorular.length; d++) {
      document.getElementsByClassName("sorular-button")[
        d
      ].style.backgroundColor = "white";
    }
    document.getElementById("puanId").innerHTML = "";
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
    for (var e = 0; e < sorular.length; e++) {
      document.getElementsByClassName("sorular-button")[
        e
      ].style.backgroundColor = "white";
    }
    document.getElementById("puanId").innerHTML = "";
    // for (var i = 1; i <= sorular.length; i++) {
    //   console.log(sorular[i - 1].numara + ":" + sorular[i - 1].aciklama);
    // }
    // soru çıkartma yapıcaz
    console.log("soru sayisi önce:" + countQuestions);
    sorular.splice(cikarilacakSoruNumarasi - 1, 1); // çıkarttı
    countQuestions--;

    for (
      var indexFor = cikarilacakSoruNumarasi - 1;
      indexFor < countQuestions - cikarilacakSoruNumarasi;
      indexFor++
    ) {
      sorular[indexFor].numara--;
      console.log("indexFor:" + indexFor);
    }
    console.log("soru sayisi sonra:" + countQuestions);
    const buttonContainer = document.querySelector("#button-container");
    while (buttonContainer.firstChild) {
      buttonContainer.removeChild(buttonContainer.firstChild);
    }
    if (cikarilacakSoruNumarasi == indexSoruNumarasi) {
      nextQuestion();
    }
    myFunction(countQuestions);
  }
}
