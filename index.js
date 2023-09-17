let a=2;
let b=3;
console.log(a=b);

const result = 5;
let a=2;or
let b=3;
console.log(a==b);

///modullar  3 xil buladi 
// module package core
// module package external
// module package file


//core modullarni terminalga chiqarish uchun   terminalga kirib (node .) kamandani berib enter bosangiz shu yerda sizga node jsni environmentiga kirib beradi agar siz ikki marta tabni bossak node jsga core modullar ustanovka qilganlari chiqadi.
 setTimeout(function() {
    console.log('ishga tushdi');
 },5000);

 // bu core modulini asosiy vazifasi funksiyani 5 secunda ishga tushirib beradi.
 // 5 ming= 5 secund odatda
   

 //endi bizga core modullardan  setInterval
let number=0;
 setInterval(function() {
    console.log("hisob:",number);
    number++;
 }, 1000);
  // bu set intervalni set timedan farqi bu xuddi loopga uxshab har bir minutda chiqarib beradi console.logdagi informationni.
   // core package arni ustanovka qilish shart emas  ularni biz chaqirib olishimiz kerak
    // masalan require bn chaqirib olsak buladi.
 

//Module package Core
    const fs = require("fs");
    const { networkInterfaces } = require("os");
 const data = fs.readFileSync("./input.txt","utf8");
 console.log(data);

console.log("************************************");

 fs.writeFileSync("./input.txt",`${data}\n\t\t by Sherzod`);
 const new_data =  fs.readFileSync("./input.txt","utf8");
 console.log(new_data);