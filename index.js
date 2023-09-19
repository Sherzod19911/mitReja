// let a=2;
// let b=3;
// let c= a+b;
// console.log(c);

// const result = 5;
// let a=2;or
// let b=3;
// console.log(a==b);

// ///modullar  3 xil buladi 
// // module package core
// // module package external
// // module package file


// //core modullarni terminalga chiqarish uchun   terminalga kirib (node .) kamandani berib enter bosangiz shu yerda sizga node jsni environmentiga kirib beradi agar siz ikki marta tabni bossak node jsga core modullar ustanovka qilganlari chiqadi.
//  setTimeout(function() {
//     console.log('ishga tushdi');
//  },5000);

//  // bu core modulini asosiy vazifasi funksiyani 5 secunda ishga tushirib beradi.
//  // 5 ming= 5 secund odatda
   

//  //endi bizga core modullardan  setInterval
// let number=0;
//  setInterval(function() {
//     console.log("hisob:",number);
//     number++;
//  }, 1000);
//   // bu set intervalni set timedan farqi bu xuddi loopga uxshab har bir minutda chiqarib beradi console.logdagi informationni.
//    // core package arni ustanovka qilish shart emas  ularni biz chaqirib olishimiz kerak
//     // masalan require bn chaqirib olsak buladi.
 

// //Module package Core
//     const fs = require("fs");
//     const { networkInterfaces } = require("os");
//  const data = fs.readFileSync("./input.txt","utf8");
//  console.log(data);

// console.log("************************************");

//  fs.writeFileSync("./input.txt",`${data}\n\t\t by Sherzod`);
//  const new_data =  fs.readFileSync("./input.txt","utf8");
//  console.log(new_data);
 

// //external modeles
// const moment = require("moment");
// const time = moment().format('YYYY-MM-DD');
// console.log("time");


//----------------------------------external packages-----------------///


//  // external modullar bu ustanofka qilish kerak buladi foydalanishdan oldin 
//  //external modullarni ustanofka qilsihda npm install moment --save qilinadi.
//   //bu yerda (-- save) shu folderni ichiga ustanovka qilish degan buyruqni bildiradi.
  
// //   const moment = require("moment");
// //   const time = moment().format();
// //   console.log(time);

// let a= 8;
// let b= 9;
// console.log(a==b);

// const moment = require("moment");
// const time = moment().format('YYYY-MM-DD');
// console.log("time");


// const moment = require('moment');
// const time = moment().format();
// console.log(time);

// setInterval(()=>{
//   const time =moment().format();
//   console.log("hozirgi vaqt: ${time}");
// },5000);

// setInterval(() =>{
//   const time =moment().format();
//   console.log('hozirgi vaqt: ${time}');

// },5000);

// setInterval(()=>{
//   const time = moment().format();
//   console.log('hozirgi vaqt: ${time}');
// },5000);



// //biz juda kup ishlatamiz
// //enquirer packages
// //enquirer ni install qilishimiz uchun npm install moment --save qilamiz.

//  const inquirer = require('inquirer');
//  inquirer.createPromptMethod ([]).then().catch(err => console.log(err)))


//  //--------------------------------------//
//  const inquirer = require('inquirer');
//  inquirer.createPromptModule(({tupe:"input",name:"raqam", message:"raqamni kiriting?"}))
//  .then((answer) => {
//   console.log("man kiritgan raqam qiymati:",answer.raqam);
//  })
//  .catch((err) => console.log(err));

//  //browserda most useful node package module

//   const validator = require("validator");
//    const test = validator.is isEmail('fo@bar.com');
//    console.log("result:",test);

//    // validator bizga true yoki false degan qiymatlarni qaytarish kerak agar email bulsa true  bulmasa false qaytaradi

//    //bizga malumki  validatorni bir qancha usullari bor  biz bulardan isInt yano bu integermi degani.
//     const validator = require("validator");
//      cost result = validator.isInt(100);
//      console.log("result:",resullt);

//      const validator = require("validator");
//      const result = validator.isInt('book');
//      console.log("result:",result); // bu yerda false buladi chunki book bu number emas.

      
//      //isIP

//       const validator = require("validator");
//       const result = validator.isIP(114.55.88.11);
//       console.log("result:",result); // ip da 4 ta fuft raqamlar bulishi kerak

//        // yana bir external m
        
//        //uuid

//        const {v4:uuidv4} =require("uuid");
//        const random = uuidv4();
//        console.log("result:",random);  // bizga turli xildagi randomlarni chiqarib beradi.(takrorlanmaydigan)


//        // mkdir -p bizga folder ochib beradi.


//        //shelljs bu multi bproses   language  hisoblanadi.

//        // shelljs ni biz job skillsda keyinchalik kuramiz.
//        //-------------------------------------------//

//         //nodemon judayam yaxshi development process hisoblanadi masaln biz "start":""nodemon index.js yoki script.js yozilayotgan bulsa uzi qaytaaqayta console lock qilib beradi'
//         // node mon da biz qayta ishga tushirmaymiz
        


// chalk 
 
//  const chalk = require("chalk");
//  const log = console.log;
//  log(chalk.blue('hello') + random + chalk.red('!'))

//  //chalk bu bizga har xil bezaklarda ishlatiladi.
//  // npm deb yozsak undan keyin bizga kerakli 

//  //extrernal packager node bn lkelmaydi shuning uchun biz uni ishlatishdan oldin ustanofka qilishimiz kerak
