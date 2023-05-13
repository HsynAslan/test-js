// document.getElementById("radio1").nextSibling;
var inputCount;
var indexSoruNumarasi = document.getElementById("soru-num-int").innerHTML;
var cevapList = ["a", "b", "c", "d", "e"];
var puan = 0;
var cevaplar = [];
var minuteStart = 25;
var secondStart = 00;
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

    if (sorular[0].cevap1 != null) {
      document.getElementById("cevap1HTML").innerHTML = sorular[0].cevap1;

      document.getElementById("cevap2HTML").innerHTML = sorular[0].cevap2;

      document.getElementById("cevap3HTML").innerHTML = sorular[0].cevap3;

      document.getElementById("cevap4HTML").innerHTML = sorular[0].cevap4;

      document.getElementById("cevap5HTML").innerHTML = sorular[0].cevap5;
    } else {
      // show daki else in aynısı buraya gelcek
      // soruNumber yerine 0 yazcaz sadedce
    }

    myFunction(countQuestions);
    myInterval = setInterval(startTime, 1000);
  }
  function timeUpdate() {
    var minute = minuteStart;
    var second = secondStart;

    if (minuteStart < 10 && minuteStart > 0) {
      // minuteStart = "0" + minuteStart;
      minute = "0" + minuteStart;
    } else if (secondStart < 10 && secondStart > 0) {
      // secondStart = "0" + secondStart;
      second = "0" + secondStart;
    } else if (minuteStart == 0) {
      // minuteStart = "00";
      minute = "00";
    }
    document.getElementById("time-m").innerHTML = minute;
    document.getElementById("time-s").innerHTML = second;
  }
  function startTime() {
    if (secondStart == 0 && minuteStart != 0) {
      // saniye 59 olucak ve dk -1
      minuteStart--;
      secondStart = 59;
      timeUpdate();
    } else if (secondStart > 0) {
      secondStart--;
      timeUpdate();
    } else if (secondStart == 0 && minuteStart == 0) {
      alert("Zaman Doldu !!!");
      clearInterval(myInterval);
    }

    // en son buttonlar kapanıp açılır
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
  var flagSpaceAns = false;
  var indexLow = indexSoruNumarasi--;
  var indexUp = indexSoruNumarasi++;

  {
    var ele = document.getElementsByName("cevapName");

    var dictDogruCevap = sorular[indexSoruNumarasi - 1].cevap;

    for (i = 0; i < ele.length; i++) {
      // onceden dogru şimdi yanlış olana girmiyor
      if (ele[i].checked) {
        flagSpaceAns = true;
        console.log("cevaplar: " + cevaplar);
        if (dictDogruCevap == cevapList[i]) {
          // cevap doğru ise

          if (cevaplar.length < indexSoruNumarasi) {
            // ilk defa giriyor
            console.log("cevap doğru ve ilk defa girdi");
            cevaplar.push(cevapList[i]);
            document.getElementsByClassName("sorular-button")[
              indexSoruNumarasi - 1
            ].style.backgroundColor = "green";
            puan += 100 / sorular.length;
            document.getElementById("puanId").innerHTML = puan.toFixed(2);
          } else {
            console.log("cevap doğru ama önceden girilmiş !!");

            // onceden işaretlemiş
            // ama yine doğru işaretlemişse devam ama yanlışa çevirdiyse puan azalt
            if (cevaplar[indexSoruNumarasi - 1] == cevapList[i]) {
              console.log("cevap önceden de doğruydu şimdide doğru");
              // yine doğru ise devam bişe yapma
            } else {
              console.log("cevap öncdeen yanlıştı şimdi doğru");
              // yanlışa dondü -> puan azalt
              puan += 100 / sorular.length;
              document.getElementById("puanId").innerHTML = puan.toFixed(2);
              document.getElementsByClassName("sorular-button")[
                indexSoruNumarasi - 1
              ].style.backgroundColor = "green";
              console.log(
                "cevaplar[indexSoruNumarasi - 1] = " +
                  cevaplar[indexSoruNumarasi - 1]
              );
              console.log(" cevapList[i] = " + cevapList[i]);
              cevaplar[indexSoruNumarasi - 1] = cevapList[i];
              console.log(
                "cevaplar[indexSoruNumarasi - 1] = " +
                  cevaplar[indexSoruNumarasi - 1]
              );
              console.log(" cevapList[i] = " + cevapList[i]);
              for (var a = 0; a < cevaplar.length; a++) {
                console.log("cevaplar[" + a + "] = " + cevaplar[a]);
              }
              console.log("--*****----");
            }
          }
          // onceden işaretlememiş ise yapıştır ama işaretlemişse onu değiştir
          // cevap doğru
          ele[i].checked = false;
        } else {
          console.log("Yanlış cevap");
          // CEVAP YANLIŞ
          console.log("cevaplar.length: " + cevaplar.length);
          console.log("indexSoruNumarasi + 1: " + indexUp);
          if (cevaplar.length < indexSoruNumarasi) {
            console.log("cevap yanlış ve ilk defa giriyor");
            // ilk defa giriyor
            cevaplar.push(cevapList[i]);
            document.getElementsByClassName("sorular-button")[
              indexSoruNumarasi - 1
            ].style.backgroundColor = "red";

            document.getElementById("puanId").innerHTML = puan.toFixed(2);
          } else {
            console.log("cevap yanış ve onceden girmiş");
            // onceden işaretlemiş
            // hala yanlışsa devam ama doğruysa arttır
            console.log(
              "cevaplar[indexSoruNumarasi - 1]" +
                cevaplar[indexSoruNumarasi - 1]
            );
            console.log("cevaplar[i]" + cevaplar[i]);
            if (cevaplar[indexSoruNumarasi - 1] == dictDogruCevap) {
              console.log("cevap yanlış ve onceden doğru idi şimdi yanlış");
              // onceden doğru idi şimdi yanlış
              puan -= 100 / sorular.length;
              document.getElementById("puanId").innerHTML = puan.toFixed(2);
              document.getElementsByClassName("sorular-button")[
                indexSoruNumarasi - 1
              ].style.backgroundColor = "red";
              cevaplar[indexSoruNumarasi - 1] = cevapList[i];
              // yine doğru ise devam bişe yapma
              console.log("cevaplar: " + cevaplar);
            } else if (cevaplar[indexSoruNumarasi - 1] == "0") {
              document.getElementsByClassName("sorular-button")[
                indexSoruNumarasi - 1
              ].style.backgroundColor = "red";
              cevaplar[indexSoruNumarasi - 1] = cevapList[i];
            } else {
              console.log("onceden de yanlıştı şimdi de yanlış");
              // dogruya dondü -> puan arttır
            }
          }
          // onceden işaretlememiş ise yapıştır ama işaretlemişse onu değiştir
          // cevap doğru
          //  ele[i].checked = false;

          // // onceden işaretlememiş ise yapıştır ama işaretlemişse onu değiştir
          // //
          // console.log("cevap yanlış");

          // if()

          // document.getElementsByClassName("sorular-button")[
          //   indexSoruNumarasi - 1
          // ].style.backgroundColor = "red";
          // console.log("Puan: " + puan);
          // ele[i].checked = false;
        }
      }
    }
    //if kontolru
    if (flagSpaceAns == false) {
      // boş cevap göndermiştir
      cevaplar.push("0");
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
  saveAnswer();
}

function backQuestion() {
  //soruKontrol();
  // input clear lamaa

  indexSoruNumarasi--;
  if (indexSoruNumarasi < 1) {
    indexSoruNumarasi = sorular.length; // başa dönüldü
  }

  screenUpdate(indexSoruNumarasi);
  saveAnswer();
}
function saveAnswer() {
  if (cevaplar.length < indexSoruNumarasi) {
    for (var a = 0; a < cevapList.length; a++) {
      document.getElementsByName("cevapName")[a].checked = false;
    }
  } else {
    var prevAns = cevaplar[indexSoruNumarasi - 1]; // bu soruya onceden verilmiş cevaptır
    console.log("bu soruya onceden verilmiş cevaptır: " + prevAns);
    for (var i = 0; i < cevapList.length; i++) {
      // i ->  0 1 2 3 4
      if (cevapList[i] == prevAns) {
        // console.log("cevapList[i]: " + cevapList[i]);
        // önceki şıkkı indexledik
        document.getElementsByName("cevapName")[i].checked = true;
      } else if (prevAns == "0") {
        for (var a = 0; a < cevapList.length; a++) {
          document.getElementsByName("cevapName")[a].checked = false;
        }
      }
    }
  }
}

function screenUpdate(soruNumber) {
  // ekranda değişiklikler burda yapılacak
  saveAnswer();
  document.getElementById("soru-num-int").innerHTML = soruNumber;
  document.getElementById("soru").innerHTML = sorular[soruNumber - 1].aciklama;

  // document.getElementById("radio1").nextSibling.nextSibling.value =
  //   sorular[soruNumber - 1].cevap1;
  if (sorular[soruNumber - 1].cevap1 != null) {
    document.getElementById("radio1").disabled = false;
    document.getElementById("radio2").disabled = false;
    document.getElementById("radio3").disabled = false;
    document.getElementById("radio4").disabled = false;
    document.getElementById("radio5").disabled = false;
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
  } else {
    // document.getElementById("radio1").disabled = true;
    // document.getElementById("radio2").disabled = true;
    // document.getElementById("radio3").disabled = true;
    // document.getElementById("radio4").disabled = true;
    // document.getElementById("radio5").disabled = true;
    // document.getElementById("cevap1HTML").innerHTML = "";
    // document.getElementById("cevap2HTML").innerHTML = "";
    // document.getElementById("cevap3HTML").innerHTML = "";
    // document.getElementById("cevap4HTML").innerHTML = "";
    // document.getElementById("cevap5HTML").innerHTML = "";
    // document.getElementById("ansTextAreaInput").disabled = false;
    //  sorular[soruNumber - 1].cevap
    // function myFunction(e) {
    //   for (let i = 1; i < e + 1; i++) {
    //     let newBtn = document.createElement("button");
    //     newBtn.innerText = i;
    //     newBtn.classList.add("sorular-button"); // Burada sorular-button sınıfı ekleniyor.
    //     newBtn.onclick = function () {
    //       screenUpdate(i);
    //     };
    //     document.querySelector("#button-container").appendChild(newBtn);
    //   }
    // }
    // let newTextArea = document.createElement("textArea");
    // newTextArea.classList.add("textAreaClass");
  }

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
      indexSoruNumarasi = i;
      // aradaki yerlere boşluk eklenmeli idi
      console.log("--- önce cevaplar ---");
      for (let a of cevaplar) {
        console.log(a);
      }
      console.log("--- --- --- ---");
      console.log("index Numarasi: " + indexSoruNumarasi);
      console.log("--- --- --- ---");
      var boslukAdedi = indexSoruNumarasi - 1 - cevaplar.length;
      for (
        var indexBoslukKoyma = cevaplar.length + 1;
        indexBoslukKoyma < indexSoruNumarasi;
        indexBoslukKoyma++
      ) {
        cevaplar.push("0");
      }
      console.log("--- sonra cevaplar ---");
      for (let a of cevaplar) {
        console.log(a);
      }
      screenUpdate(i);
    };

    document.querySelector("#button-container").appendChild(newBtn);
  }
}
// function textSoruEkleme() {
//   var girdiSoruText = document.getElementById("inputTextQuestion").value;
//   var ansTextArea = document.getElementById("ansTextArea").value;

//   if (ansTextArea != "") {
//     const newObjAddText = {
//       numara: countQuestions + 1,
//       aciklama: girdiSoruText,
//       cevap1: null,
//       cevap2: null,
//       cevap3: null,
//       cevap4: null,
//       cevap5: null,
//       cevap: ansTextArea,
//     };

//     sorular.push(newObjAddText);
//     countQuestions++;
//     let newBtn2 = document.createElement("button");
//     newBtn2.innerText = countQuestions;
//     newBtn2.classList.add("sorular-button"); // Burada sorular-button sınıfı ekleniyor.

//     newBtn2.onclick = function () {
//       screenUpdate(countQuestions);
//     };

//     document.querySelector("#button-container").appendChild(newBtn2);
//     // console.log("dogru cevap: " + girdiDogruCevap);
//     // sağ üst tablo renkler silinmeli ve puan 0 lanmalı

//     for (var d = 0; d < sorular.length; d++) {
//       document.getElementsByClassName("sorular-button")[
//         d
//       ].style.backgroundColor = "white";
//     }
//     document.getElementById("puanId").innerHTML = "";
//     minuteStart = 25;
//     secondStart = 00;
//   } else {
//     alert("Boş Giriş Yaptınız, Lütfen Tekrar Deneyin");
//   }
// }
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
    cevaplar.push(girdiDogruCevap);
    for (var a = 0; a < cevaplar.length; a++) {
      console.log("cevaplar[" + a + "] = " + cevaplar[a]);
    }
    console.log("--*****----");
    newBtn.onclick = function () {
      indexSoruNumarasi = countQuestions;
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
    minuteStart = 25;
    secondStart = 00;
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
    minuteStart = 25;
    secondStart = 00;
  }
}
// puan sürekli artıyor - çözüldü
// save input - çözüldü
// time - çözüldü
// soru ekleyince - çözüldü
// dict ->  local storage
// açık uçlu soru
