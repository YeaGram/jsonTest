console.log("hello From JS");
console.log("This Is Object Test");
console.log("<======================>");
console.log("           ");

//
// xhr || XMLHttpRequest api request

// const imageWrapper = document.createElement("div");
// imageWrapper.setAttribute("class", "imageWrapper");
// imageBin.appendChild(imageWrapper);

// const image = document.createElement("img");
// image.setAttribute("src", data.img);
// imageWrapper.appendChild(image);

// const title = document.createElement("h4");
// title.innerText = data.nama;
// imageWrapper.appendChild(title);

// const nis = document.createElement("p");
// nis.innerText = data.nis;
// imageWrapper.appendChild(nis);

const imageBin = document.querySelector(".imageContainer");
const jkOptBtn = document.getElementById("jkOptBtn");
const jkOptCtn = document.getElementById("jkOptCtn");
const jkCtnList = document.querySelectorAll(".jkList");
const jkOptTitle = document.getElementById("jkOptTitle");

const DisplayData = (data, i) => {
  let noUrut = i + 1;
  const imageWrapper = document.createElement("div");
  imageWrapper.setAttribute("class", "imageWrapper");
  imageBin.appendChild(imageWrapper);

  const gambar = document.createElement("img");
  gambar.setAttribute("src", data.img);
  gambar.setAttribute("alt", data.alter);
  imageWrapper.appendChild(gambar);

  const typog = document.createElement("section");
  imageWrapper.appendChild(typog);

  const nama = document.createElement("h4");
  nama.innerText = "NoUrut " + noUrut + ". " + data.nama;
  typog.appendChild(nama);

  const nis = document.createElement("p");
  nis.innerText = data.nis;
  typog.appendChild(nis);

  const jenisKelamin = document.createElement("p");
  jenisKelamin.setAttribute("class", "jenisKelamin");
  jenisKelamin.innerText = data.jenisKelamin;
  typog.appendChild(jenisKelamin);
};
const doAjaxReq = (opti) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let res = JSON.parse(xhr.responseText);
      imageBin.innerHTML = "";

      for (let i = 0; i < res.length; i++) {
        let data = res[i];
        if (opti) {
          if (data.jenisKelamin === opti) {
            jkOptTitle.innerText = opti;
            DisplayData(data, i);
          }
        } else {
          DisplayData(data, i);
        }
      }
    }
  };
  xhr.open("GET", "../data/ineffable.json", true);
  xhr.send();
};
// firstTimeWhenPageLoad
doAjaxReq();

jkCtnList.forEach((jkItem) => {
  jkItem.addEventListener("click", function () {
    const curJk = this.text;
    // jeniskelamin Semua
    if (curJk == "Semua") {
      doAjaxReq();
      jkOptTitle.innerText = "All Member";
      return;
    }
    // jenis kelamin spesifik
    doAjaxReq(curJk);
  });
});

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let res = JSON.parse(xhr.responseText);

//     for (let i = 0; i < res.length; i++) {
//       const data = res[i];
//       DisplayData(data, i);
//     }
//   }
// };

// console.log(xhr);

// imageBin.src = "";
// console.log(imageBin.src);

// //ObjectLiteral
// console.log("ObjectLiteral =>");

// //
// let siswa = {
//   nama: ["Alda Adeliana Nasir", "Icha", "Kartini", "Maqfirah"],
//   nis: ["20190001", "20190002", "20190003", "20190004"],
//   img: ["https://sekian"],
// };

// for (let index = 0; index < siswa.nama.length; index++) {
//   console.log(siswa);
// }
// console.log(" ");

// let sisswa = [
//   {
//     nama: "Alda Adeliana Nasir",
//     nis: "20190001",
//     img: "https://sekian",
//   },
//   {
//     nama: "Icha",
//     nis: "20190001",
//     img: "https://sekian",
//   },
//   {
//     nama: "Kartini",
//     nis: "20190001",
//     img: "https://sekian",
//   },
//   {
//     nama: "Maqfirah",
//     nis: "20190001",
//     img: "https://sekian",
//   },
// ];
// for (let index = 0; index < sisswa.length; index++) {
//   console.log(sisswa[index]);
// }
// console.log("<======================>");
// console.log(" ");

// // FunctionDeclaration
// console.log("FunctionDeclaration");

// function Siswa(nama, nis) {
//   let siswa = {};
//   siswa.nama = nama;
//   siswa.nis = nis;

//   return siswa;
// }
// let alda = Siswa("Alda Adeliana Nasir", "20190001");
// let icha = Siswa("Icha", "20190002");
// console.log(alda);
// console.log(icha);
