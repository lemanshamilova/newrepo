let basket = JSON.parse(localStorage.getItem("basket")) ?? [];

const cards = document.querySelector(".cards");




const createCard = (item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "50rem";
  card.id = item.id;

  const imageSec = document.createElement("img");
  imageSec.classList.add("card-img-top");
  imageSec.setAttribute("src", item.image);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const titleSec = document.createElement("h5");
  titleSec.classList.add("card-title");
  titleSec.innerText = item.title;

  const descSec = document.createElement("p");
  descSec.classList.add("card-text");
  descSec.innerText = item.price;

  const description = document.createElement("p");
  description.classList.add("card-text");
  description.innerText = item.description;





  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn");
  deleteBtn.classList.add("btn-danger");
  deleteBtn.classList.add("m-3");
  deleteBtn.innerText = "Delete";
  const buttonInc=document.createElement("button")
  buttonInc.innerText="+"
  buttonInc.style.padding="8px"
  buttonInc.style.borderRadius="5px"

  const countOfProducts=document.createElement("span")
  countOfProducts.style.padding="10px"
  countOfProducts.innerText="0"
 

  const buttonDec=document.createElement("button")
  buttonDec.innerText="-"
  buttonDec.style.padding="8px"
  buttonDec.style.borderRadius="5px"

  buttonInc.addEventListener("click",()=>{
    countOfProducts.innerText=+ countOfProducts.innerText+1
    descSec.innerText=descSec.innerText*2



  })


  buttonDec.addEventListener("click",()=>{
    countOfProducts.innerText=+ countOfProducts.innerText-1
    descSec.innerText=descSec.innerText/2

  })
  
  

  
  const deleteButton = document.querySelector(".deleteButton");


  deleteButton.addEventListener("click",function (){
    cards.remove();
  })

  

  cardBody.append(titleSec, description,descSec,buttonDec,countOfProducts,buttonInc);
 
  card.append(imageSec, cardBody, deleteBtn);

  cards.appendChild(card);

  deleteBtn.addEventListener("click", deleteFromBasket);
};

basket.map((elem) => {
  createCard(elem);
 

});

function deleteFromBasket() {
  const id = this.parentNode.id;

  const newBasket = basket.filter((item) => item.id !== +id);

  localStorage.setItem("basket", JSON.stringify(newBasket));

  window.location.reload();

  cards.innerHTML = "";

  basket.map((elem) => {
    createCard(elem);
  });
}

