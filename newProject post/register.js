const contactNameInp=document.querySelector(".contactName")
const companyNameInp=document.querySelector(".companyName")
const loginBtn=document.querySelector(".loginBtn")


loginBtn.addEventListener("click",function(e){

    let obj={
        contactName: contactNameInp.value,
        companyName: companyNameInp.value


    }

    fetch("https://northwind.vercel.app/api/suppliers",{
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
   
       

    

    });
    window.location.href = "./index.html";

})


