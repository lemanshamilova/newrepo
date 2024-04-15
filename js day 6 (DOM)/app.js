// let addButton = document.querySelector(".btn");
// let addInput = document.querySelector(".inp");
// let successMsg = document.querySelector(".success");
// let errorMsg = document.querySelector(".error");

// addButton.addEventListener("click", () => {
//   console.log(addInput.value);

//   if (addInput.value.length > 8) {
//     console.log("sifre uzundur");
//     errorMsg.style.display = "block";
//     successMsg.style.display = "none";

//   } else {
//     console.log("sifre dogrudur");
//     addInput.value = " ";
//     successMsg.style.display = "block";
//     errorMsg.style.display = "none";
//   }
// });

let qutu1 = document.querySelector(".qutu1");
let qutu2 = document.querySelector(".qutu2");
let qutu3 = document.querySelector(".qutu3");
let firstBox = document.querySelector(".firstBox");
let secondBox = document.querySelector(".secondBox");
let thirdBox = document.querySelector(".thirdBox");
let click=document.querySelector(".click");


click.addEventListener



qutu1.addEventListener("click", () => {
  if (firstBox.style.display == "block") {
    firstBox.style.display = "none";
  } else {
    firstBox.style.display = "block";
    secondBox.style.display = "none";
    thirdBox.style.display = "none";
  }
});

qutu2.addEventListener("click", () => {
  if (secondBox.style.display == "block") {
    secondBox.style.display = "none";
  } else {
    secondBox.style.display = "block";
    firstBox.style.display = "none";
    thirdBox.style.display = "none";
  }
});
qutu3.addEventListener("click", () => {
 


  if(thirdBox.style.display == "block"){
    thirdBox.style.display = "none";
  }else{
    thirdBox.style.display = "block";
    firstBox.style.display = "none";
    secondBox.style.display = "none";
  }



});
