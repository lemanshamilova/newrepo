//son regemi 7 olan butun 2 reqemli ededler consola

// for (let i = 10; i < 100; i++) {
//   let lastNumber = i % 10;
//   if (lastNumber == 7) {
//     console.log(i);
//   }
// }

//reqemleri eyni olan butun ikireqemli ededler

// for (let i=10;i<100;i++){
//  if(i%11==0)

//    console.log(i)
// }

//verilmis ededi reqemlerine ayirin

// let number=789;
// let str=String(number)
// for(i=0;  i<str.length; i++){
//     console.log(str[i])
// }

//verilmis ededin reqemleri cemini tapin

// let number = 7151345;
// let sum = 0;
// while (number > 0) {
//   let char = number % 10;
//   sum += char;
//   number = parseInt(number / 10);

// }
// console.log(sum);

//verilmis ededin reqemlerinin hasili ile ceminin ferqini

// let number = 7777;
// let sum = 0;
// let product=1;
// while (number > 0) {
//   let char = number % 10;
//   let char2=number%10;
//   product*=char2;
//   sum += char;
//   number = parseInt(number / 10);

// }
// console.log(product-sum);

//reqemlerin icinden en boyuk olani yazin

// let number=3651;
// let str=String(number);
// for(i=0 ; i<str.length; i++){

// if (str[0]>str[1] && str[0]>str[2] && str[0]>str[3]){
// console.log(str[0])

// }else if(str[1]>str[0] && str[1]>str[2] && str[1]>str[3]){
//     console.log(str[1])
// }else if(str[2]>str[0] && str[2]>str[1] && str[2]>str[3]){
//     console.log(str[2])
// }
// else if(str[3]>str[0] && str[3]>str[2] && str[3]>str[1]){
//     console.log(str[3])
// }

// }
// console.log(str[i]);

// let number=4651;
// let str=String(number);
// let box=0;

// console.log(str);
// let min=Number(str[0]);

// for(let i=0; i<str.length; i++){
//     if (Number(str[i])<min) {
//         min=Number(str[i]);
//          box=i;

//     }

// }
// console.log(min)
// console.log(box)
