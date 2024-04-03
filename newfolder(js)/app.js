// const num1=10;
// const num2=57;
// if (num1>num2 ){
// console.log("birinci eded ikinciden boyukdur");

// }
// else if (num1==num2){
//     console.log("birinci eded ikinciye beraberdir")
// }
// else{
//     console.log("ikinci eded birinciden boyukdur")
// }

// let a = 2;
// let b = 3;
// let c = 8;
// if (a < b + c && b < c + a && c < b + a) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// let a=4;
// let b=3;
// let c=5;
// if (a**2+b**2==c**2){
//     console.log("duzbucaqli ucbucaqdir")
// }
// else{
//     console.log("deyil")

// }

// let balance = 10;
// let num1 = balance - 40;

// let secim=1;
// switch (secim) {

//   case 1:
//     if (balance > 40) {
//         console.log("welcome");
//         console.log("qalan vesait:", num1);
//     }
//     else{
//         console.log("balansinizda kifayet qeder vesait yoxdur:", balance)
//     }

//     break;

//   case 2:
//    console.log();
//     break;
// }

// let num=3451;
// let num1=parseInt(num/1000);
// let num2= parseInt(num/100);
// let num3=num2 % 10;
// let num4=parseInt(num/10);
// let num5=num4%10;
// let num6=num%10;
// console.log(num1)
// console.log(num3)
// console.log(num5)
// console.log(num6)
// console.log(num1+num3+num5+num6);
// console.log(num1-num3-num5-num6);
// console.log(num1*num3*num5*num6);

// ---------------------------------

// let number = "40-30-90";
// console.log(number [0]);
// console.log(number [1]);
// console.log(number [3]);
// console.log(number[2]);
// console.log(number[6])

// let num1= number [3]+number[1];

// let num2=number[0]+number[1];

// let num3=number[6]+number[1];

// if(num1>num2  ){
//     console.log(num1+"-"+num2+"-"+num3);
// }else if(num2>num3){

//     console.log(num1+"-"+num2+"-"+num3);

// }

// else{
//     console.log(num1+"-"+num2+"-"+num3);

// }
// function createPerson(name,surname,age,callbackFn) {
//     let obje = {
//         name,
//         surname,
//         age,
//     }
//     let result = callbackFn(obje.name,obje.surname)
//     return result
// }
// function getFullname(name,surname) {
//     let Fullname = name.concat(" ",surname).toUpperCase
//     console.log(Fullname);
// }
// createPerson("Jim","kerry",54,getFullname);
// task1
// function Human(name,surname,age,ismale=true) {
//     this.name = name,
//     this.surname = surname,
//     this.age = age,
//     this.ismale = ismale

//     this.getFullname = function(name,surname){
//         let fullName = this.surname[0].toUpperCase()+"."+this.name.toUpperCase()
//         return fullName;
//     }
// }
// let emin = new Human("Emin","Soltanov",19,true)
// console.log((emin.getFullname()))
// task2
// function student(university, faculty, major, degree, course, gpa = 0) {
//   this.university = university;
//   this.faculty = faculty;
//   this.major = major;
//   this.degree = degree;
//   this.course = course;
//   this.university = university;
//   this.gpa = gpa;
//   this.studentID = function (university, faculty) {
//     let id =
//       this.university.slice(0, 3).toUpperCase() +
//       "_" +
//       this.faculty.slice(0, 2).toUpperCase() +
//       parseInt(Math.random() * 10000);
//     return id;
//   };
// }
// let emin = new student("bdu", "programming", "tetbiq", "bachelor", 3.5);
// console.log(emin.studentID());

// Object.setPrototypeOf(
//   emin,
//   new student(studentID, "bdu", "IT", "tetbiq", "bachelor", 3.5)
// );
// Object.setPrototypeOf(
//   emin,
//   new student(studentID, "bdu", "programming", "tetbiq", "bachelor", 3.5)
// );
// Object.setPrototypeOf(
//   emin,
//   new student(studentID, "bdu", "energy", "tetbiq", "bachelor", 2.5)
// );
// Object.setPrototypeOf(
//   emin,
//   new student(studentID, "bdu", "programming", "tetbiq", "bachelor", 3.5)
// );
// Object.setPrototypeOf(
//   emin,
//   new student(studentID, "bdu", "pam", "tetbiq", "bachelor", 2.5)
// );
// let object = {}
// function searchStudent(array) {
//     if (gpa >3 && university == "bdu" && faculty == "IT" && faculty == "programming") {
//         object.push()
//     }
// }

// function soztap(soz) {
//   let max = soz[0];
//   for (let i = 0; i < soz.length; i++) {
//     if (soz[i].charCodeAt > max.charCodeAt) {
//       max = soz[i];
//     }
    
//   }
//   return max;
// }
// console.log(soztap("emin"));
// let country = ["uijf","fyueadg","adugs","sfhuiesgfuysegf"]
// function ilkthree(arr) {
//     let countrynew = []
    
//     for (let i = 0; i < country.length; i++) {
//     let coun = country[i].slice(0,3).toUpperCase()
//     countrynew.push(coun)

    
// }
//     return countrynew
// }
// console.log(ilkthree(country));
