
const loginBtn = document.querySelector(".loginBtn");
const contactNameInput = document.querySelector(".contactName");
const postalCodeInput = document.querySelector(".postalCode");
const registerBtn = document.querySelector(".registerBtn");
loginBtn.addEventListener("click", function (e) {
 

  fetch("https://northwind.vercel.app/api/suppliers")
    .then((res) => res.json())
    .then((data) => {
      const contactName = data.find(
        (element) => element.contactName == contactNameInput.value
      );

      if (contactName) {
        console.log("merhaba");

        window.location.href = "./home.html";
      } else {
        console.log("xos gelmedin");
        
      }
    });
});

registerBtn.addEventListener("click", function (e) {
  fetch("https://northwind.vercel.app/api/suppliers")
    .then((res) => res.json())
    .then((data) => {
        window.location.href = "./register.html";

      
    });
});
