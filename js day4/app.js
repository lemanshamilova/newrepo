
let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];
//!task 1.1
// - Bütün elementləri konsola yazın
// function allElements( arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// allElements(students);

// ----------------------------------
//!task 1.2
// - Bütün tələbələrin adlarını konsola yazın - ad: Qurban
// function allStudents(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log("Ad:",arr[i].name);
//   }
// }
// allStudents(students);

// -----------------------------------

//!task 1.3
// - Bütün tələbələrin adlarını ve soyadlarini konsola yazın - ad: Qurban

// function allNameandallSurname(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log("Ad:",arr[i].name,",", "Soyad:",arr[i].surname);

//   }
// }
// allNameandallSurname(students);
// ------------------------------------
//!task 1.4
// - Kəsri olan tələbələrin ad və soyadını çapa verin

// function studentsOfFail(arr) {
//   for(let i=0;i<arr.length;i++){

//     if(arr[i].fail==true){
//         console.log("Ad:",arr[i].name,",", "Soyad:",arr[i].surname);
//     }

// }
// }

// studentsOfFail(students);
// ------------------------------------
//!task 1.5
// - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin


// function studentsOfHobbies(arr) {
// let maxIndex=arr[0];
// let newName;
// let newHobbies;
// for(let i=0;i<arr.length;i++){
//   if(arr[i].hobbies.length > maxIndex);
//   maxIndex=arr[i].hobbies.length
//   newName=arr[i].name
//   newHobbies=arr[i].hobbies

// }

// console.log(newName);
// console.log(newHobbies);
// }
// studentsOfHobbies(students);

//! task 1.6

// - Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin


// function studentsOfAvgPoint(arr) {
//   let maxIndex=arr[0].avgPoint
// let newName=arr[0].name
// let newSurname=arr[0].surname
// for( let i=0;i<arr.length;i++){
// if(arr[i].avgPoint>maxIndex){
//   maxIndex=arr[i].avgPoint
//   newName=arr[i].name
//   newSurname=arr[i].surname



// }

// }

// console.log(newName);
// console.log(newSurname);
// }
// studentsOfAvgPoint(students);

//! task 1.7

// - Parolu ən uzun olan tələbənin username və adını çapa verin

// function passwordlength(arr) {
//   let maxPassword=arr[0].loginDetail.password.length;

// let newName=arr[0].name
// let newSurname=arr[0].surname

// for(let i=0;i<arr.length;i++){

//   if(arr[i].loginDetail.password.length>maxPassword){

//     maxPassword=arr[i].loginDetail.password.length
//     newName=arr[i].name
//     newSurname=arr[i].surname
//   }
// }

// console.log(newName);
// console.log(newSurname);
// }
// passwordlength(students);


//! task 1.8
// - boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin

// function haveABoyfriend(arr) {
//   let newName;

// for(let i=0;i<arr.length;i++){

//   if(arr[i].boyfriendGirlfriend==true){

//    console.log(arr[i]);
//    newName=arr[i]
//   }




// }
// console.log(newName);
// }
// haveABoyfriend(students);


//!task 1.9

// - yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin


// function ageIsTwenty(arr) {
//   let box = "";

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].age == 20) {

//     for (let j = 0; j < arr[i].teacher.length; j++) {

//       box += arr[i].teacher[j].name + " ";
//     }
//     console.log("name:", arr[i].name);
//     console.log(box);
//   }

// }

// }
// ageIsTwenty(students);

//!task 1.10
// - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin


// function studentsOfSalary(arr) {
//   let box = [];


// for (let i = 0; i < arr.length; i++) {
//   arr[i].salaryUSD = arr[i].salaryAZN * 1.7
//   box.push(arr[i].salaryUSD)
//   console.log(arr[i]);

// }
// }
// studentsOfSalary(students);


//!task 1.11
// - Müəllimlərin baş hərflərini böyük hərflə yazın
// function Teachers(arr) {
//   for(let i=0;i<arr.length;i++){

//     for(j=0;j<arr[i].teacher.length;j++){

//      arr[i].teacher[j].name= arr[i].teacher[j].name[0].toUpperCase()+arr[i].teacher[j].name.slice(1);

//     }
//     console.log(arr[i]);
//   }
// }
// Teachers(students);


//!task 1.12
// - Şifrəsində rəqəm olan tələbələri tapın

// function passwordOfStudents(arr) {
//   let studentPassword = [];

// for (let i = 0; i < arr.length; i++) {
//   let student = arr[i];
//   if (/\d/.test(student.loginDetail.password)) {
//     studentPassword.push(student);
//   }
// }

// console.log(studentPassword);
// }
// passwordOfStudents(students);

//!task 1.13 

// - Qızların arasında id-si 3 olan müəllimlərin adını deyin


// function idOfTeachersIsThree(arr) {
//   for(let i=0;i<arr.length;i++){

//     for(let j=0;j<arr[i].teacher.length;j++){

//       if(arr[i].teacher[j].id==3 && arr[i].gender=="girl")
//       console.log(arr[i].teacher[j].name);



//     }
//   }
// }
// idOfTeachersIsThree(students);

//! task 1.14

// - Tələbələrin adlarını və müəllim saylarını çapa verin


// function teachersOfNameAndTeachersOfCount(arr) {
//   for(let i=0;i<arr.length;i++){
//     console.log(arr[i].name+" : "+arr[i].teacher.length);




//   }
// }
// teachersOfNameAndTeachersOfCount(students);


//! task 1.15

// - Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın

// function teachersOfNameAndPassword(arr) {
//   let newArr=[];
// for(let i=0;i<arr.length;i++){

//   newArr.push("Name"+":"+arr[i].name+", Username:"+arr[i].loginDetail.username+" ,Password:"+arr[i].loginDetail.password)





// }
// console.log(newArr);
// }
// teachersOfNameAndPassword(students);

//! task 1.16

// - Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metod istifadə edin


// function teachersOfName(arr) {
//   for(let i=0;i<arr.length;i++){

//     for(j=0;j<arr[i].teacher.length;j++){

//      arr[i].teacher[j].name= arr[i].teacher[j].name.concat(" müəllim")

//     }
//     console.log(arr[i]);
//   }
// }
// teachersOfName(students);

//! task 1.17

// - Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin. String metod istifadə edin

// function password(arr) {
//   for(let i=0;i<arr.length;i++){

//     let user=arr[i].loginDetail.password;
//     let last=3;
//     console.log(user.padStart(user.length + last));



//   }
// }
// password(students);

//! task 1.18

// - Hamının şifrəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metod istifadə edin



// function passwordLength(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let user=arr[i].loginDetail.password
//     console.log(user.slice(0,4).padEnd(user.length,"*"));
//     }
// }
// passwordLength(students);


//! task 1.19

// - Hamının soyadının uzunluğu adının uzunluğu qədər olsun. String metod istifadə edin


// function surnameLength(arr) {
//   for(i=0;i<arr.length;i++){
//     if(arr[i].surname.length==arr[i].name.length){

//       console.log(arr[i]);
//     }



//   }
// }
// surnameLength(students);


//! task 1.20

// - Bütün tələbələrin yaşlarının toplamı nə qədərdir

// function sumOfAllStudents(arr) {
//   let sum=0;
// for(i=0;i<arr.length;i++){

//  sum+=arr[i].age

// }
// console.log(sum);
// }
// sumOfAllStudents(students);


//! task 1.21
// - Bütün tələbələrin cəmi bal ortalaması nə qədərdir


// function avgPointOfAllStudents(arr) {
//   let sum=0;
// let avgSum=0;
// for(i=0;i<arr.length;i++){

//  sum=arr[i].avgPoint+sum
//  avgSum=sum/i

// }
// console.log(avgSum);
// }
// avgPointOfAllStudents(students);

//! task 1.22

// - "book" həvəsini olan tələbələrin siyahısını çap edin

// function bookLowers(arr) {
//  for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr[i].hobbies.length;j++){

//     if(arr[i].hobbies[j].includes("book")){
//       console.log(arr[i]);
//     }
//   }
//  }
// }
// bookLowers(students);


//! task 1.23
// - Tələbələrin yaş ortalaması nədir?
// function ageAvgOfStudents(arr) {
//   let sum=0;
// let avgSum=0;
// for(i=0;i<arr.length;i++){


//   sum=arr[i].age+sum
//  avgSum=sum/i
// }
// console.log(avgSum);
// }
// ageAvgOfStudents(students);


//! task 1.24

// - Hər bir tələbə üçün cinsiyət və yaşı göstərən bir obyekt yaradin

// function ageAndGenderOfStudents(arr) {
//   let box=[];

// for(let i = 0; i < arr.length; i++){
//   let obyekt={};
//   obyekt.gender=arr[i].gender
//   obyekt.age=arr[i].age
//   box.push(obyekt);

// }
// console.log(box);
// }
// ageAndGenderOfStudents(students);

//! task 1.25

// - Bütün tələbələrin ad və soyadlarının uzunluqlarının cəmi hansıdır

// function nameAndSurnameLength(arr) {
//   let totalLength;
// for(let i = 0; i < arr.length; i++){
// totalLength=arr[i].name.length+arr[i].surname.length
// }
// console.log(totalLength);
// }

// nameAndSurnameLength(students);

//! task 1.26

// - Tələbələrin adlarını tərsinə çevirin.

// function reversedNameOfStudents(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let reversedName = '';
//     for (let j = arr[i].name.length - 1; j >= 0; j--) {
//         reversedName += arr[i].name[j];
//     }
//     arr[i].name = reversedName;
//   }

//   console.log(arr);
// }
// reversedNameOfStudents(students);

//! task 1.27
// - "gaming" həvəsi olan tələbələrin array-ini yaradın
// function gamingLowers(arr) {
//  for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr[i].hobbies.length;j++){

//     if(arr[i].hobbies[j].includes("gaming")){
//       console.log(arr[i]);
//     }
//   }
//  }
// }
// gamingLowers(students);


//! task 1.28

// - Bütün tələbələrin hobbiləri olan array yaradın?

// function hobbiesOfAllStudents(arr) {
//   let hobbiesArr=[];

// for(i=0;i<arr.length;i++){

//   for(let j=0;j<arr[i].hobbies.length;j++){

//     hobbiesArr.push(arr[i].hobbies[j])
//   }

// }
// console.log(hobbiesArr);
// }
// hobbiesOfAllStudents(students);


//! task 1


// Aşağıda verilən tapşırıqları array  & string methodlarını istifadə edərək yerinə yetirin. Funksiya ilə qeyd olunanları funksiyasız yazın.

// 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// (Array method-lardan istifadə edin)
// Example:
// console.log(getFirst([1, 73, 99, 20])) -> 1
// console.log(getFirst([1, 73, 99, 20], 2)) -> [1, 73]
// console.log(getFirst([1, 73, 99, 20], 0)) -> []
// console.log(getFirst([1, 73, 99, 20], 4)) -> [1, 73, 99, 20]
// ------------------------------------------------
//! --1--!//

// const arr=[1,73,99,20];
// function firstElement(Array) {

// console.log(Array[1]);
// }
// firstElement(arr);

//! --2--!//
// const arr = [1, 73, 99, 20];

// function secondElement(Array) {

//   console.log(Array.slice(0, 2));
// }
// secondElement(arr);



//! --3--!//

// const arr=[1,73,99,20];

// function thirdElement(Array) {
//   console.log(Array.slice(4));


// }
// thirdElement(arr);


//! --4--!//
// const arr=[1,73,99,20];

// function fourthElement(Array) {
//   console.log(Array.slice(0));

// }
// fourthElement(arr);





//! task 2
// 2. Write a simple JavaScript function to join all elements of the following array into a string.
// console.log(join([1, 73, 99, 20], "*")) -> 1*73*99*20
// console.log(join([1, 73, 99, 20], "/")) -> 1/73/99/20

//! --1--!//

// let arr=[1,73,99,20];
// function firstElement(Array) {

// console.log(Array.join("*"));
// }
// firstElement(arr);

//! --2--!//
// let arr=[1,73,99,20];
// function firstElement(Array) {

// console.log(Array.join("/"));
// }
// firstElement(arr);




//! task 3

// 3. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
// Example:
// console.log(convert('saLamNecesen)) -> SAlAMnECESEN
// function swapCase(str) {
//   var result = "";
//   for (var i = 0; i < str.length; i++) {
//     var char = str.charAt(i);
//     if (char === char.toUpperCase()) {
//       result += char.toLowerCase();
//     } else {
//       result += char.toUpperCase();
//     }
//   }
//   return result;
// }

// console.log(swapCase('LemanShamilova')); 

//! task 4

// 4. Massivi bütün lazımsız elementlərdən təmizləyən metod yazın. , yalan, qeyri-müəyyən, boş sətirlər, sıfır, null kimi.
// console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]



// let arr=[0,1,false,2,undefined,"",3,null]
// function filteredMassive(Array) {

// console.log(Array.slice(1,2).concat(2,3));
// }
// filteredMassive(arr)
//! task 5


// 5. Write a method that returns a duplicate-free array.
// console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]

// let arr=[1,2,1,2,3]
// let arr2=['a', 2, 'd', 2, 'a', 14, 14, 's', false]
// function noneDublicated(Array,Array2) {
//   console.log(Array.slice(2,5));
// console.log(Array2.slice(0,3));
// }
// noneDublicated(arr,arr2);

//!task 6

// 6. İki massivi müqayisə edən və eynidirsə, doğru qaytaran funksiya yazın. .
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual ) ([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true

// function MassivsIsEqual(arr1, arr2) {

//   if (arr1.length !== arr2.length) {
//     return false;
//   }


//   for (let i = 0; i < arr1.length; i++) {

//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }


//   return true;
// }

// console.log(MassivsIsEqual([1, 2, 3, 4], [1, 2, 3, 4])); 
// console.log(MassivsIsEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])); 
// console.log(MassivsIsEqual([1, 2, 3, 4], [1, 2, 3, 4, false])); 
// console.log(MassivsIsEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]));


//!task 7










//!Tapşırıq



//1- 2 ədədin cəmini tapan funskiya yazın. Ədədlər parametr olaraq verilməlidir.

// let a=65;
// let b=55;

// function sumOfNumbers(num1,num2) {
//   console.log(num1+num2);
// }
// sumOfNumbers(a,b);


// 2- 2 ədədin hasili tapan funskiya yazın. Ədədlər parametr olaraq verilməlidir.

// let a=8;
// let b=12;
// function multiplication(num1,num2) {
//   return num1*num2
// }
// console.log(multiplication(a,b));

//3- 2 ədədin bütün riyazi əməlləri(+ - * /) yerinə yetirmək funksiyası yazın. Funksiya ədədləri və əməliyyatı parametr olaraq qəbul edilməmişdir.

// function allMathOperations(num1,num2) {
 
//   console.log("sum:",num1+num2);
//   console.log("difference:",num1-num2);
//   console.log("multipy:",num1*num2);
//   console.log("division:",num1/num2);

// }
// allMathOperations(4,10);


//4- Parametr olaraq daxil edilir 2 ədəddən hansının böyük olduğunu qaytaran funksiya yazın

// function comparision(num1,num2) {
//   if(num1>num2){
//     return num1
//   }else if(num1<num2){
//     return num2
//   }else{
//    return "num1=num2"
//   }

// }
// console.log(comparision(10,5));

//5- Elə bir funksiya yazın ki, hansı uzunluqda string parametr olaraq verilsə uzunluğunu 5 simvol etsin. 

// function stringLength(str) {
//   if (str.length > 5) {
//       return str.slice(0, 5);
//   } else {
//       return str;
//   }
// }

// console.log(stringLength("lemanshamilova"));


//6- Elə bir funksiya yazın ki, hansı uzunluqda string parametr olaraq verilsə uzunluğunu 5 simvol etsin. Əgər 5 simvoldan kiçik olarsa sözü * ilə tamamlasın

// function stringLength(str) {
//   if (str.length > 5) {
//       return str.slice(0, 5);
//   } else {
//       return str.padEnd(5,"*")
//   }
// }
// console.log(stringLength("lem"));

//7- Parametr olaraq qəbul edilən massiv elementləri cəmini hesablayan funksiya yazın.

// function sumofMassive(massiv) {
//   let sum = 0;
//   for (let i = 0; i < massiv.length; i++) {
//       sum += massiv[i];
//   }
//   return sum;
// }
// console.log(sumofMassive([1,3,5,9]));


//8- Parametr olaraq qəbul edilir arrayın yalnız rəqəm olan elementləri cəmini hesablayan funksiya yazın.

// function sumofArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//       sum += array[i];
//     }
//   }
//   return sum;
// }
// console.log(sumofArray([1,3,"leman",4,6]));


//9- Parametr olaraq qəbul edilir massiv elementlərinin tərsinə düzən funksiya yazın.


// function returnedElements(arr) {
//   let returnedArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     returnedArr.push(arr[i]);
//   }
//   let result = returnedArr;
//   return result;
// }
// console.log(returnedElements([1,2,3,4]));


//10- Parametr olaraq söz qəbul edir və sözünə yazan funksiya yazın.


//anlamadim (














// --------------------------------------

// students.forEach((element,index,array)=>{
//   console.log(element,index,array)
// })


//yeni bir array yaratmaq

//yasi 20 olanlar

// let arr2=students.filter((element)=>element.age==20)

// console.log(arr2)



// let arr2=students.filter((element)=>element.loginDetail.password.includes(1)).map((elem=>{
//   return elem.loginDetail.username
// }))


// console.log(arr2);


// let numbers=[5,-3,8,-9,2]

// let sumofdigits=numbers.reduce((sum,item)=>sum+item);


// console.log(sumofdigits);



