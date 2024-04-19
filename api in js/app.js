const names = document.querySelector(".name");
const table = document.querySelector(".tbody");
const id = document.querySelector(".id");
const thead = document.querySelector(".thead");
const buttonEdit = document.querySelector(".buttonEdit");

fetch("https://northwind.vercel.app/api/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      let newTr = document.createElement("tr");
      let newTd = document.createElement("td");
      let newNameTd = document.createElement("td");
      let newPrice = document.createElement("td");
      let country = document.createElement("td");
      let deleteBtn = document.createElement("button");
      let editBtn = document.createElement("button");
      let detailBtn = document.createElement("button");
      let deleteButon = document.createElement("td");
      let editButton = document.createElement("td");
      let detailButon = document.createElement("td");

      newTd.innerText = element.id;
      newNameTd.innerText = element.name;
      newPrice.innerText = element.unitPrice;
      country.innerText = element.country;

      deleteBtn.style.padding = "10px";
      deleteBtn.style.backgroundColor = "red";
      deleteBtn.style.borderRadius = "5px";

      editBtn.style.padding = "10px";
      editBtn.style.backgroundColor = "green";
      editBtn.style.borderRadius = "5px";

      detailBtn.style.padding = "10px";
      detailBtn.style.backgroundColor = "gray";
      detailBtn.style.borderRadius = "5px";

      deleteBtn.innerText = "delete";
      editBtn.innerText = "edit";
      detailBtn.innerText = "detail";

      deleteBtn.addEventListener("click", (e) => {
        // fetch("https://northwind.vercel.app/api/products"+ "/" + element.id,{
        //     method: "delete"

        // })

        e.target.parentElement.parentElement.remove();
      });

      editBtn.setAttribute();

      editBtn.addEventListener("click", () => {});

      newTr.append(
        newTd,
        newNameTd,
        newPrice,
        country,
        deleteButon,
        editButton,
        detailButon
      );
      deleteButon.append(deleteBtn);
      editButton.append(editBtn);
      detailButon.append(detailBtn);

      table.appendChild(newTr);
    });
  });
