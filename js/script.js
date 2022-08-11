// var a = 1;
// var b = "svfds";
// c = true
// console.log(typeof a);
// document.write(typeof b);
// alert(typeof c);
// console.log(typeof alert);
// console.log(typeof console);
// console.log(typeof NaN);


// let i = 10;
// while (i > 0) {
//     i--;
//     console.log(`Iteration ${i}`)
// }
// alert('Vse')


// let sum = 0;
// while (true) {
//     let value = prompt ("Enter a digit. Type 'exit' for exit.")
//     if (value == "exit") {
//         break;
//     }

//     let convertedValue = Number(value);
//     if (isNaN(convertedValue)) {
//         continue;
//     }
//     sum += convertedValue;

// }
// alert ("Sum of all digits = " + sum)

// for (let x = 1; x < 10; x++) {
//     console.log("Multiplication table on " + x)
//     for (y = 1; y < 10; y++){
//         console.log(`${x} * ${y} = ${x*y}`)
//     }
//     console.log("")
// }

// let x = 10;
// let y = 0;

// let result = (x > 5) ? 20: 30;
// console.log(result);


// let num = Number(prompt("Enter a digit: "));
// if (num > 0) {
//     document.write("1");
// } else if (num < 0 ){
//     document.write("-1");
// } else {
//     document.write("0")
// }

// alert("Вычисление объема цилиндра.");
//         //  V=π * r в квадрате * h
//         let V;
//         const Pi = 3.1415926535; 
//         let r = +prompt("Введите радиус цилиндра");
//         let h = +prompt("Введите высоту цилиндра");
//         if (Number.isNaN(r)|| Number.isNaN(h)) {
//             alert("Not a digit");

//         }
//         else{
//             V = Pi * r * r * h;
//             alert(`Объем цилиндра с высотой ${h} и радиусом ${r} = ${V}`);

//         }

// let product1 = "Бумага офисная A4, 80 g/м2, 500 л";
// let product2 = "Биндеры для бумаги 51 мм";
// let product3 = "Ручка шариковая синяя";

// let productPrice1 = 280.25;
// let productPrice2 = 56;
// let productPrice3 = 12.50;

// let productQuantity1 = prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
// let productQuantity2 = prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
// let productQuantity3 = prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

// // Выведите на экран сколько пользователю нужно заплатить за каждый продукт по отдельности и всего за все продукты
// // используйте форматированный вывод
// let totalPriceProduct1 = productPrice1 * productQuantity1;
// let totalPriceProduct2 = productPrice2 * productQuantity2; 
// let totalPriceProduct3 = productPrice3 * productQuantity3; 

// let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
// let shipping = prompt("Do you need shipping: yes/no");

// total += (shipping === "yes") ? 40 : 0

// console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
// console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
// console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);
// console.log("Total " + total);

// let productPrice = 101.5; // цена товара
//         let productQuantity = 50;  // количество единиц товара на складе

//         let count = prompt("Сколько единиц товара Вы хотите приобрести? ", 1);
//         if (count > productQuantity){
//             console.log("There`s no such amount");

    
//         } else {
//             let totalSum = count * productPrice;
//             let leftInStorage = productQuantity - count;
    
//             alert("Общая стоимость " + totalSum);
//             alert("Количество товара останется на складе после покупки " + leftInStorage);
//         }
// let login = "admin";
//         let password = "12345";

//         let inputLogin = prompt("Введите логин");
//         let inputPassword = prompt("Введите пароль");

//         if (inputLogin == login && inputPassword == password)
//         {
//             // if (inputPassword == password)
//             // {
//                 alert("Вы авторизованы!");
//             // }
//         }
//         else
//         {
//             alert("Логин или пароль введены неправильно");
//         }

// let value = +prompt("Введите число 1 или 2");

        // if(value == 1)
        // {
        //     alert("Вы ввели число 1");
        // }
        // else if(value == 2)
        // {
        //     alert("Вы ввели число 2");
        // }
        // else 
        // {
        //     alert("Вы ввели неправильное значение");
        // }
    // switch (value) {
    //     case 1:
    //         alert ("You`ve entered 1");
    //         break;
    //     case 2:
    //         alert ("You`ve entered 2")
    //         break;
        
    //         default:
    //             alert ("You`ve entered bs")
    // }

    // let season  = Number(prompt("Enter a number: "));
    // let result;
    //     switch(season){
    //         case 1:
    //             result = "Winter";
    //             break;
    //         case 2:
    //             result = 'Spring';
    //             break;
    //         case 3:
    //             result = "Summer";
    //             break;
    //         case 4:
    //             result = "Autumn"
    //             break;
    //         default:
    //             result = "bs"
                                
    //     }
    // document.write(result)
    // let value = prompt("Enter country name");

        // if(value == 1)
        // {
        //     alert("Вы ввели число 1");
        // }
        // else if(value == 2)
        // {
        //     alert("Вы ввели число 2");
        // }
        // else 
        // {
        //     alert("Вы ввели неправильное значение");
        // }
        // if (value === "USA" || value === "Great Britain") {
        //     alert("English");
        // }
        //     else if (value === 'Germany') {
        //         alert ("Deutsch")
        //     }
        //     else if (value === "France") {
        //         alert ("French")
        //     }
        //     else {
        //         alert("No such country")
//         //     }
//     let product1 = "Бумага офисная A4, 80 g/м2, 500 л";
//     let product2 = "Биндеры для бумаги 51 мм";
//     let product3 = "Ручка шариковая синяя";

//     let productPrice1 = 280.25;
//     let productPrice2 = 56;
//     let productPrice3 = 12.50;

//     let productQuantity1 = prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
//     let productQuantity2 = prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
//     let productQuantity3 = prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

//     let totalPriceProduct1 = productPrice1 * productQuantity1;
//     let totalPriceProduct2 = productPrice2 * productQuantity2;
//     let totalPriceProduct3 = productPrice3 * productQuantity3;

//     let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
//     console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
//     console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
//     console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);
//     alert (total);

//     let discountPercent = 0;
//     let isFreeShipping = false  
//     if (total > 500 && total < 1000){
//         discountPercent = 0.05;
//     }
//     else if (total > 1000 && total < 1500){
//         discountPercent = 0.1;
//     }
//     else if (total > 1500){
//         discountPercent = 0.15;
//         isFreeShipping = true;
//     }
//     let shippingPrice = 0;
//     let totalWithship = 0;
//     let discount = 0;


//     if (!isFreeShipping){
//         let shipping = confirm("Заказываете доставку курьером?");
//         if (shipping)
//         {
//             shippingPrice = 40;
//         }
//     }

//     discount = total * discountPercent;
//     totalWithship = total + shippingPrice - discount;

// alert(`Total - ${total}\r\nDiscount ${discountPercent * 100}% - ${discount}\r\nShipping - ${shippingPrice}\r\nTotal payment - ${totalWithship}`);

// let age = +prompt("Введите ваш возраст");
// let technology = prompt("Ведите 1 или 2. 1 - JavaScript. 2 - C#");
// let expirience = prompt("Введите опыт работы в годах.");
// let adul,specializatio, positio;

        // if (age > 18)
        // {
        //     adul
        //      = "совершеннолетний";
        // }
        // else
        // {
        //     adul
        //      = "несовершеннолетний"
        // }
        // adul =  age<18 ? "minor" : "adult";


        // if (technology == 1)
        // {
        //     specializatio
        //      = "Frontend";
        // }
        // else
        // {
        //     specializatio
        //      = "Backend";
        // }
        // specializatio =  technology == 1 ? "Frontend": 'Backend';

        // if (expirience == 0)
        // {
        //     positio
        //      = "Без опыта работы";
        // }
        // else if (expirience > 0 && expirience < 1.5)
        // {
        //     positio
        //      = "Junior";
        // }
        // else if (expirience > 1.5 && expirience < 3)
        // {
        //     positio
        //      = "Middle";
        // }
        // else if(expirience > 3)
        // {
        //     positio
        //      = "Senior";
        // }
        // else
        // {
        //     positio
        //      = "error";
        // }

        // let result = `Возраст: ${adul}\r\nСпециализация: ${specializatio}\r\nПозиция: ${positio}`;
        // alert(result);

// for (i =  0; i <100; i++ ) {
//     document.write(i)
//     document.write("\n")
// }

// while (true){
//     a = prompt("Enter a digit greater than 10");
//     if (a < 10) {
//         alert("Hren")
//         continue
//     }
//     else{
//         alert("zoebis")
//         break
//     }
// }

// let i = 0;
// while (i < 5) {
//     console.log(`meaning ${i}`);
//     i++
// }
// while (true) {
//     let x = Number(prompt("Enter digit: "));
//     let sum = 0;

//     for (i = 0; i<=x; i++){
//         sum = sum + i;
//     }
//     alert(sum)
// }

// let randomValue = Math.floor(Math.random() * 101);
// alert ("я загадал число от 0 до 100. угадай")
// while (true) {
//     x = prompt ("Enter your digit: ")
//     if (x < randomValue) {
//         alert("bolshe");
//     }
//     else if (x > randomValue) {
//         alert ("menshe");
//     }
//     else {
//         alert ("zoebis");
//         break
//     }


// }
// let massiv = ['London', 'Rome', 'Kyiv'];

// massiv[3] = "Konotop";
// massiv[5] = "Zhmerinka";
// console.log(massiv)

// for (i = 0; i < massiv.length; i++) {
//         alert(massiv[i]);
// }

// for (let i of massiv) {
//         alert(i);
// }


// let values = [138,2,5,6,34,265,65,1];
// let max = Number.MIN_VALUE;
// // for (let i = 0; i < values.length; i++){
// for (let i of values){
 
//         if (i > max) {
//                 max = i;
//         }
// }
// alert(max)

// let cities = ['1', '2', '3', '4','5','6', '7', 'vasya'];
// let numbers = [11,12,13,14,15,16]

// // console.log(a);
// // console.log(cities);
// let b = cities.concat(numbers);
// // console.log(b)
// console.log(b.length);
// console.log(b[b.length -1]);

// b.forEach (function(item,index,array) { console.log(item, index)});
// // console.log(b.shift());
// console.log (cities.indexOf('vasya'));
// console.log(cities.splice(3,2));
// console.log(b.reverse());
// console.log(numbers.slice(1,4))

// let values = [10,24,54,23,76,3,12,43,89,65,4,123, -12];
// let sum = 0;
// let min = values[0];
// let max = min;
// for (let i of values) {
        
//         if (i > max) {
//                 max = i; 
//         }
//         if (i < min) {
//                 min = i;
//         }
//         sum += i;
// }

// console.log(max,min,sum);


// let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
//         let max = Number.MIN_VALUE;

//         for (index of values) 
//         {
//             const element = values[index];
//             if(element > max)
//             {
//                 max = element;
//             }
//         }

//         console.log("Максимальное значение массива - " + max);

// let massiv = [-10,24,54,-23,76,3,12,-43,89,65,4,123, -12];
// for (i = 0; i < massiv.length; i++){
//         if (massiv[i] < 0) {
//                 massiv.splice(i,1,0);
//         }
// }
// console.log(massiv);

// let massiv = [-10,24,54,-23,76,3,12,-43,89,65,4,123, -12];
// evenarr = []
// oddarr = []
// for (let i of massiv) {
//         if (i % 2 == 0) {
//                 evenarr += i;
//                 evenarr +=', ';
//         }
//         else {
//                 oddarr += i;
//                 oddarr += ', ';
//         }
// }
// console.log(evenarr, oddarr);

// let values = [10,24,254,23,76,3,12,43,89,65,4,23,12];

// let min = values[0];
// let max = min;
// let maxindex = 0;
// let minindex = 0;
// for (let i of values) {
        
//         if (i > max) {
//                 max = i;
//                 maxindex = values.indexOf(max); 
//         }
//         if (i < min) {
//                 min = i;
//                 minindex = values.indexOf(min);
//         }

// }

// console.log(max,min);
// console.log(maxindex,minindex);
// console.log(values);
// values[maxindex] = min;
// values[minindex]= max;
// console.log(values);


// let values = [10,24,254,23,76,3,12,43,89,65,4,23,12];

// let sum = 0;
// let mid = 0
// for (let i of values) {
//         sum += i;

// }
// mid = sum / values.length;
// console.log(values.length,sum,mid);
// for (let z of values) {
//         if (z > mid) {
//                 console.log(z)
//         }
// }

// var massiv = [6, 4, 3, 3, 1, 5, 12, 4, 1, 2, 7, 2, 1];
// var arr2 =[];
// f = 0;
// for(i = 0; i < massiv.length; i++){
//     for(j = i + 1; j < massiv.length; j++){
//         if(massiv[i] == massiv[j]){
//             f = 1;
//             arr2.push(massiv[i]);
//             break;
//         }
//         if(f){
//             break;
//         }
//     }
// }
 
// console.log(arr2);



// let massiv = [1,2,3,4,5,6,2,3];
// let arr2 = [];
// f = 0;
// for (let value in massiv) {
//         for (digit = value +1; digit < massiv.length; digit++){
//                 if (value == digit) {
//                         arr2.push(value);
//                         break
//                 }
//                 if (f){
//                         break;
//                 }
//         }
// }
// console.log(arr2);


// let cities = ["London", "Konotop", "Zhmerinka"];
// let ind = cities.indexOf(prompt("Which city: ?"));
// if (ind != -1) {

//         cities.splice(ind,1);
// }
// else {
//         alert("no such city")
// }
// console.log(cities)




// let digits = [];
// let sum = 0;
// while (true) {
//         let a = prompt("Enter a digit: ");
//         if (!isNaN(a)){
//                 digits.push(+a);
//         }
//         else if (a === "stop") {
//                 break;
//         }
//         else {
//                 continue;
//         }

// }
// for (let s of digits) {
//         sum += s;
// }
// alert(sum);

// var massiv = [6, 4, 3, 3, 1, 5, 12, 4, 1, 2, 7, 2, 1];
// let odd = [];
// let even = [];
// for (let digit of massiv) {
//         if (digit % 2 == 0) {
//                 odd.push(digit);
//         }
//         else {
//                 even.push(digit);
//         }
// }
// console.log(even);
// console.log(odd);


// var massiv = [6, 4, 3, -3, 1, 5, -12, 4, -1, 2, 7, -2, 1];
// // let negative;
// for (let digit of massiv) {
//         if (digit < 0) {
//                 // negative = massiv.indexOf(digit);
//                 massiv.splice(massiv.indexOf(digit),1);
//         }
// }
// console.log(massiv);



// // названия товаров
// let names = [];
// names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
// names[1] = "Биндеры для бумаги 51 мм";
// names[2] = "Ручка шариковая синяя";

// // цены на товар
// let prices = [];
// prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
// prices[1] = 56;     // Биндеры для бумаги 51 мм
// prices[2] = 12.50;  // Ручка шариковая синяя

// let count = [];
// count[0] = +prompt('Skolko nada bumagi tebe?');   // Бумага офисная А4, 80 г/м2, 500 л
// count[1] = +prompt('A binderov skolko?');;  // Биндеры для бумаги 51 мм
// count[2] = +prompt('Nu i ruchek skolko?');;  // Ручка шариковая синяя


// alert(`Za ${count[0]} ${names[0]} = ${count[0]*prices[0]}`)     
// alert(`Za ${count[1]} ${names[1]} = ${count[1]*prices[1]}`)
// alert(`Za ${count[2]} ${names[2]} = ${count[2]*prices[2]}`)
// alert (`Total = ${count[0]*prices[0] + count[1]*prices[1]+ count[2]*prices[2]} `)


// function avg (x,y,z) {
//         if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
//                 return ((x + y + z) / 3);
//         }
//         else {
//                 return ("WTF?");
//         }
// }
// console.log(avg(34,64,23));

// названия товаров
// let names = [];
// names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
// names[1] = "Биндеры для бумаги 51 мм";
// names[2] = "Ручка шариковая синяя";

// // цены на товар
// let prices = [];
// prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
// prices[1] = 56;     // Биндеры для бумаги 51 мм
// prices[2] = 12.50;  // Ручка шариковая синяя


// let count = [];




// function amount () {
//         for (let i = 0; i < names.length; i++) {
//         const productName = names[i];
//         let counttoBuy = +prompt("Укажите количество для " + productName);

//         if (isNaN(counttoBuy))
//                 counttoBuy = 0;

//         count.push(counttoBuy);
//         }
// }

// function summ(){
//         let totalSum = 0;
//         for (let i = 0; i < names.length; i++) {
//                 const productName = names[i];
//                 const productPrice = prices[i];
//                 const boughtCount = count[i];

//                 let price = productPrice * boughtCount;
//                 totalSum += price;
//                 console.log(`Куплено ${productName} на сумму ${price}`);
// }
// console.log("Всего продуктов куплено на " + totalSum);
// }
// amount();
// summ();

// function randomInteger(min,max) {
//         let rand = min + Math.random() * (max +1 - min);
//         return Math.floor(rand);
// }



// let throwCount = +prompt("Skolko raz hotite brosit kubik?");
// for (let i = 0; i < throwCount; i++) {
//         const result = randomInteger(1,6);
//         console.log(result);
// }

// function findTheDouble (massiv) {
//         var arr2 =[];
//         // f = 0;
//         for(i = 0; i < massiv.length; i++){
//                 for(j = i + 1; j < massiv.length; j++){
//                         if(massiv[i] == massiv[j]){
//                         // f = 1;
//                         arr2.push(massiv[i]);
//                         // break;
//                         }
//                         // if(f){
//                         // // break;
//                         // }
//                 }
//         }
//         // console.log(arr2);
//         return arr2.length !=0 ? arr2 : null;
// }

// alert(findTheDouble ([6, 4, 3, 3, 1, 5, 12, 4, 1, 2, 7, 2]));
// названия товаров


// let names = [];
// names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
// names[1] = "Биндеры для бумаги 51 мм";
// names[2] = "Ручка шариковая синяя";

// // цены на товар
// let prices = [];
// prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
// prices[1] = 56;     // Биндеры для бумаги 51 мм
// prices[2] = 12.50;  // Ручка шариковая синяя

// let count = [];



// let initCountArray = function () {
//     for (let i = 0; i < names.length; i++) {
//         const productName = names[i];
//         let counttoBuy = +prompt("Укажите количество для " + productName);

//         if (isNaN(counttoBuy))
//             counttoBuy = 0;

//         count.push(counttoBuy);
//     }
// }

// let calculateSum = function () {
//     let totalSum = 0;
//     for (let i = 0; i < names.length; i++) {
//         const productName = names[i];
//         const productPrice = prices[i];
//         const boughtCount = count[i];

//         let price = productPrice * boughtCount;
//         totalSum += price;
//         console.log(`Куплено ${productName} на сумму ${price}`);
//     }
//     console.log("Всего продуктов куплено на " + totalSum);
// }
// initCountArray();
// calculateSum();


// var data = [1, 2, 3, 4, 5];



        // var result = data.map(function (value) {
        //     return value * value;
        // });

        // var res = data.map(value => value * value);



        // res.forEach(function(e) {
        //     console.log(e);
        // });


        // res.forEach(e => console.log(e));

// let result = data.map(function(i) {
//         return i * 2
// });
// console.log(res)

// let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
//         let oddValues = [];
//         let evenValues = [];
//         let oddValuesPosition = 0;
//         let evenValuesPosition = 0;

        // for (let value of values) {
        //     if (value % 2 == 0) {
        //         evenValues[evenValuesPosition] = value;
        //         evenValuesPosition++;
        //     }
        //     else {
        //         oddValues[oddValuesPosition] = value;
        //         oddValuesPosition++;
        //     }
        // }


        // values.forEach(function(value){
        //         value % 2 == 0 ? evenValues.push(value) : oddValues.push(value)
        // })

        // evenValues = values.filter(value => value % 2 == 0)
        // oddValues = values.filter(value => value % 2 != 0)

        // console.log("Нечетные значения");
        // for (let oddVal of oddValues) {
        //     console.log(oddVal);
        // }

        // console.log("Четные значения");
        // for (let evenVal of evenValues) {
        //     console.log(evenVal);
        // }

// n = +prompt("Enter a digit: ")

// function back (n ) {
//         console.log(n);
//         if (n == 1) {
//                 // console.log(n);
//         }
//         else {
                
//                 n--;
//                 back(n);

//         }
// }
//  back(n);


// let user = {
//         name: "admin",
//         email: "admin@example.com"
//     };

//     console.log(user.name);
//     console.log(user.email);

//     user.email = "admin@itvdn.com";

//     console.log(user.email);

// var obj = {
//         user : "Vasya", 
//         email: "vasya@mail.ua",
// }

// var obj2 = new Object();
// obj2.name = "Onufriy";
// obj2.email = "onufriy@ukr.net";

// console.log(obj.user);
// console.log(obj2.email)

// // obj.array.forEach(element => console.log(element));
// function print(o){
// for (const[key,value] of Object.entries(o)) {
//         console.log(key,value);
// }
// }

// print(obj);
// print(obj2);

// let users = [
//         {
//             id: 1,
//             name: 'Leanne Graham',
//             username: 'Bret',
//             email: 'Sincere@april.biz',
//             address: {
//                 street: 'Kulas Light',
//                 suite: 'Apt. 556',
//                 city: 'Gwenborough',
//                 zipcode: '92998-3874',
//                 geo: {
//                     lat: '-37.3159',
//                     lng: '81.1496'
//                 }
//             },
//             phone: '1-770-736-8031 x56442',
//             website: 'hildegard.org',
//             company: {
//                 name: 'Romaguera-Crona',
//                 catchPhrase: 'Multi-layered client-server neural-net',
//                 bs: 'harness real-time e-markets'
//             }
//         },
//         {
//             id: 2,
//             name: 'Ervin Howell',
//             username: 'Antonette',
//             email: 'Shanna@melissa.tv',
//             address: {
//                 street: 'Victor Plains',
//                 suite: 'Suite 879',
//                 city: 'Wisokyburgh',
//                 zipcode: '90566-7771',
//                 geo: {
//                     lat: '-43.9509',
//                     lng: '-34.4618'
//                 }
//             },
//             phone: '010-692-6593 x09125',
//             website: 'anastasia.net',
//             company: {
//                 name: 'Deckow-Crist',
//                 catchPhrase: 'Proactive didactic contingency',
//                 bs: 'synergize scalable supply-chains'
//             }
//         },
//         {
//             id: 3,
//             name: 'Clementine Bauch',
//             username: 'Samantha',
//             email: 'Nathan@yesenia.net',
//             address: {
//                 street: 'Douglas Extension',
//                 suite: 'Suite 847',
//                 city: 'McKenziehaven',
//                 zipcode: '59590-4157',
//                 geo: {
//                     lat: '-68.6102',
//                     lng: '-47.0653'
//                 }
//             },
//             phone: '1-463-123-4447',
//             website: 'ramiro.info',
//             company: {
//                 name: 'Romaguera-Jacobson',
//                 catchPhrase: 'Face to face bifurcated interface',
//                 bs: 'e-enable strategic applications'
//             }
//         },
//         {
//             id: 4,
//             name: 'Patricia Lebsack',
//             username: 'Karianne',
//             email: 'Julianne.OConner@kory.org',
//             address: {
//                 street: 'Hoeger Mall',
//                 suite: 'Apt. 692',
//                 city: 'South Elvis',
//                 zipcode: '53919-4257',
//                 geo: {
//                     lat: '29.4572',
//                     lng: '-164.2990'
//                 }
//             },
//             phone: '493-170-9623 x156',
//             website: 'kale.biz',
//             company: {
//                 name: 'Keebler LLC',
//                 catchPhrase: 'User-centric fault-tolerant solution',
//                 bs: 'revolutionize end-to-end systems'
//             }
//         },
//         {
//             id: 5,
//             name: 'Chelsey Dietrich',
//             username: 'Kamren',
//             email: 'Lucio_Hettinger@annie.ca',
//             address: {
//                 street: 'Skiles Walks',
//                 suite: 'Suite 351',
//                 city: 'Roscoeview',
//                 zipcode: '33263',
//                 geo: {
//                     lat: '-31.8129',
//                     lng: '62.5342'
//                 }
//             },
//             phone: '(254)954-1289',
//             website: 'demarco.info',
//             company: {
//                 name: 'Keebler LLC',
//                 catchPhrase: 'User-centric fault-tolerant solution',
//                 bs: 'revolutionize end-to-end systems'
//             }
//         },
//         {
//             id: 6,
//             name: 'Mrs. Dennis Schulist',
//             username: 'Leopoldo_Corkery',
//             email: 'Karley_Dach@jasper.info',
//             address: {
//                 street: 'Norberto Crossing',
//                 suite: 'Apt. 950',
//                 city: 'South Christy',
//                 zipcode: '23505-1337',
//                 geo: {
//                     lat: '-71.4197',
//                     lng: '71.7478'
//                 }
//             },
//             phone: '1-477-935-8478 x6430',
//             website: 'ola.org',
//             company: {
//                 name: 'Considine-Lockman',
//                 catchPhrase: 'Synchronised bottom-line interface',
//                 bs: 'e-enable innovative applications'
//             }
//         },
//         {
//             id: 7,
//             name: 'Kurtis Weissnat',
//             username: 'Elwyn.Skiles',
//             email: 'Telly.Hoeger@billy.biz',
//             address: {
//                 street: 'Rex Trail',
//                 suite: 'Suite 280',
//                 city: 'Howemouth',
//                 zipcode: '58804-1099',
//                 geo: {
//                     lat: '24.8918',
//                     lng: '21.8984'
//                 }
//             },
//             phone: '210.067.6132',
//             website: 'elvis.io',
//             company: {
//                 name: 'Keebler LLC',
//                 catchPhrase: 'User-centric fault-tolerant solution',
//                 bs: 'revolutionize end-to-end systems'
//             }
//         },
//         {
//             id: 8,
//             name: 'Nicholas Runolfsdottir V',
//             username: 'Maxime_Nienow',
//             email: 'Sherwood@rosamond.me',
//             address: {
//                 street: 'Ellsworth Summit',
//                 suite: 'Suite 729',
//                 city: 'Aliyaview',
//                 zipcode: '45169',
//                 geo: {
//                     lat: '-14.3990',
//                     lng: '-120.7677'
//                 }
//             },
//             phone: '586.493.6943 x140',
//             website: 'jacynthe.com',
//             company: {
//                 name: 'Abernathy Group',
//                 catchPhrase: 'Implemented secondary concept',
//                 bs: 'e-enable extensible e-tailers'
//             }
//         },
//         {
//             id: 9,
//             name: 'Glenna Reichert',
//             username: 'Delphine',
//             email: 'Chaim_McDermott@dana.io',
//             address: {
//                 street: 'Dayna Park',
//                 suite: 'Suite 449',
//                 city: 'Bartholomebury',
//                 zipcode: '76495-3109',
//                 geo: {
//                     lat: '24.6463',
//                     lng: '-168.8889'
//                 }
//             },
//             phone: '(775)976-6794 x41206',
//             website: 'conrad.com',
//             company: {
//                 name: 'Yost and Sons',
//                 catchPhrase: 'Switchable contextually-based project',
//                 bs: 'aggregate real-time technologies'
//             }
//         },
//         {
//             id: 10,
//             name: 'Clementina DuBuque',
//             username: 'Moriah.Stanton',
//             email: 'Rey.Padberg@karina.biz',
//             address: {
//                 street: 'Kattie Turnpike',
//                 suite: 'Suite 198',
//                 city: 'Lebsackbury',
//                 zipcode: '31428-2261',
//                 geo: {
//                     lat: '-38.2386',
//                     lng: '57.2232'
//                 }
//             },
//             phone: '024-648-3804',
//             website: 'ambrose.net',
//             company: {
//                 name: 'Hoeger LLC',
//                 catchPhrase: 'Centralized empowering task-force',
//                 bs: 'target end-to-end models'
//             }
//         }
//     ];

//     for (const user of users) {
//             if (user.company.name == "Keebler LLC"){
//                 console.log(user.name + " from " + user.address.city);
//     }
// }

// let user = {
//         balance: '$1,250.89',
//         age: 24,
//         name: {
//             first: 'Golden',
//             last: 'Clements'
//         },
//         company: 'EWAVES',
//         email: 'golden.clements@ewaves.io',
//         friends: [
//             {
//                 id: 0,
//                 name: 'Buchanan Austin'
//             },
//             {
//                 id: 1,
//                 name: 'Richmond Garrison'
//             },
//             {
//                 id: 2,
//                 name: 'Burns Cook'
//             },
//             {
//                 id: 3,
//                 name: 'Sally Mcpherson'
//             }
//         ],
//         favoriteFruit: 'strawberry'
//     }
// console.log(user.name.first);
// console.log(user.name.last);
// user.balance = "$ 2000";
// console.log(user.balance);
// console.log(user.email);
// delete user.email;
// console.log(user.email);

// // console.log(user);
// for (const[key,value] of Object.entries(user)) {
//         console.log(key,value);
// }

// let users = [
//         {
//             balance: '1250.89',
//             age: 24,
//             name: {
//                 first: 'Golden',
//                 last: 'Clements'
//             },
//             company: 'EWAVES',
//             email: 'golden.clements@ewaves.io',
//             friends: [
//                 {
//                     id: 0,
//                     name: 'Buchanan Austin'
//                 },
//                 {
//                     id: 1,
//                     name: 'Richmond Garrison'
//                 },
//                 {
//                     id: 2,
//                     name: 'Burns Cook'
//                 },
//                 {
//                     id: 3,
//                     name: 'Sally Mcpherson'
//                 },
//                 {
//                     id: 4,
//                     name: 'Nina Hood'
//                 },
//                 {
//                     id: 5,
//                     name: 'Rhonda Anderson'
//                 },
//                 {
//                     id: 6,
//                     name: 'Mathis Bowen'
//                 },
//                 {
//                     id: 7,
//                     name: 'Janie Carlson'
//                 },
//                 {
//                     id: 8,
//                     name: 'Brooke Reilly'
//                 },
//                 {
//                     id: 9,
//                     name: 'Peters Oliver'
//                 }
//             ],
//             favoriteFruit: 'strawberry'
//         },
//         {
//             balance: '3637.94',
//             age: 23,
//             name: {
//                 first: 'Francis',
//                 last: 'Hebert'
//             },
//             company: 'XPLOR',
//             email: 'francis.hebert@xplor.biz',
//             friends: [
//                 {
//                     id: 0,
//                     name: 'Clements Glass'
//                 },
//                 {
//                     id: 1,
//                     name: 'Gutierrez Padilla'
//                 },
//                 {
//                     id: 2,
//                     name: 'Noelle Wilkinson'
//                 },
//                 {
//                     id: 3,
//                     name: 'Kim Sampson'
//                 },
//                 {
//                     id: 4,
//                     name: 'Luz Palmer'
//                 }
//             ],
//             favoriteFruit: 'apple'
//         },
//         {
//             balance: '1106.44',
//             age: 31,
//             name: {
//                 first: 'Hale',
//                 last: 'Cross'
//             },
//             company: 'EARTHPURE',
//             email: 'hale.cross@earthpure.us',
//             friends: [
//                 {
//                     id: 0,
//                     name: 'Terri Clark'
//                 },
//                 {
//                     id: 1,
//                     name: 'Marie Joyce'
//                 },
//                 {
//                     id: 2,
//                     name: 'Howell Moses'
//                 },
//                 {
//                     id: 3,
//                     name: 'Juarez Marshall'
//                 },
//                 {
//                     id: 4,
//                     name: 'Corinne Grant'
//                 },
//                 {
//                     id: 5,
//                     name: 'Chandra Ferrell'
//                 },
//                 {
//                     id: 6,
//                     name: 'Emily Kidd'
//                 },
//                 {
//                     id: 7,
//                     name: 'Claudine Pollard'
//                 },
//                 {
//                     id: 8,
//                     name: 'Walter Cooper'
//                 },
//                 {
//                     id: 9,
//                     name: 'Isabella Hays'
//                 }
//             ],
//             favoriteFruit: 'strawberry'
//         },
//         {
//             balance: '2502.43',
//             age: 25,
//             name: {
//                 first: 'Delores',
//                 last: 'Sykes'
//             },
//             company: 'ASSITIA',
//             email: 'delores.sykes@assitia.com',
//             friends: [
//                 {
//                     id: 0,
//                     name: 'Amy Fox'
//                 },
//                 {
//                     id: 1,
//                     name: 'Laurel Gaines'
//                 },
//                 {
//                     id: 2,
//                     name: 'Mcguire French'
//                 },
//                 {
//                     id: 3,
//                     name: 'Savage Rocha'
//                 },
//                 {
//                     id: 4,
//                     name: 'Durham Fowler'
//                 },
//                 {
//                     id: 5,
//                     name: 'Jacobson Clay'
//                 },
//                 {
//                     id: 6,
//                     name: 'Hamilton Pierce'
//                 },
//                 {
//                     id: 7,
//                     name: 'Johns Jefferson'
//                 },
//                 {
//                     id: 8,
//                     name: 'Avery Campbell'
//                 }
//             ],
//             favoriteFruit: 'strawberry'
//         },
//         {
//             balance: '3651.54',
//             age: 21,
//             name: {
//                 first: 'Ryan',
//                 last: 'Bolton'
//             },
//             company: 'MOLTONIC',
//             email: 'ryan.bolton@moltonic.biz',
//             friends: [
//                 {
//                     id: 0,
//                     name: 'Weaver Buchanan'
//                 },
//                 {
//                     id: 1,
//                     name: 'Francesca Rice'
//                 },
//                 {
//                     id: 2,
//                     name: 'Sheppard Calhoun'
//                 },
//                 {
//                     id: 3,
//                     name: 'Schmidt Murray'
//                 }
//             ],
//             favoriteFruit: 'apple'
//         },
//         {
//             balance: '1345.79',
//             age: 21,
//             name: {
//                 first: 'Carey',
//                 last: 'Schwartz'
//             },
//             company: 'UXMOX',
//             email: 'carey.schwartz@uxmox.info',
//             friends: [
//                 {
//                     id: 0,
//                     name: 'Lilia Wiggins'
//                 },
//                 {
//                     id: 1,
//                     name: 'Snider Tanner'
//                 },
//                 {
//                     id: 2,
//                     name: 'Taylor Perez'
//                 },
//                 {
//                     id: 3,
//                     name: 'Raquel Castaneda'
//                 },
//                 {
//                     id: 4,
//                     name: 'Burris Mcmahon'
//                 },
//                 {
//                     id: 5,
//                     name: 'Henderson Osborn'
//                 },
//                 {
//                     id: 6,
//                     name: 'Carrillo Ortiz'
//                 },
//                 {
//                     id: 7,
//                     name: 'Herminia Puckett'
//                 },
//                 {
//                     id: 8,
//                     name: 'Shelby Ware'
//                 }
//             ],
//             favoriteFruit: 'banana'
//         },
//         {
//             balance: '3261.11',
//             age: 30,
//             name: {
//                 first: 'Trevino',
//                 last: 'Mullins'
//             },
//             company: 'TERRASYS',
//             email: 'trevino.mullins@terrasys.org',
//             friends: [
//                 {
//                     id: 0,
//                     name: 'Corine Deleon'
//                 },
//                 {
//                     id: 1,
//                     name: 'Alta Walker'
//                 },
//                 {
//                     id: 2,
//                     name: 'Jeannie Santana'
//                 },
//                 {
//                     id: 3,
//                     name: 'Velazquez Oneill'
//                 },
//                 {
//                     id: 4,
//                     name: 'Perry Merrill'
//                 },
//                 {
//                     id: 5,
//                     name: 'Tabitha Mcintosh'
//                 },
//                 {
//                     id: 6,
//                     name: 'Shields Castillo'
//                 }
//             ],
//             favoriteFruit: 'banana'
//         },
//         {
//             balance: '1659.17',
//             age: 20,
//             name: {
//                 first: 'Gilliam',
//                 last: 'Mendez'
//             },
//             company: 'ZENTHALL',
//             email: 'gilliam.mendez@zenthall.tv',
//             friends: [
//                 {
//                     id: 0,
//                     name: 'Nora Ratliff'
//                 },
//                 {
//                     id: 1,
//                     name: 'Simone Michael'
//                 },
//                 {
//                     id: 2,
//                     name: 'Lang Rose'
//                 },
//                 {
//                     id: 3,
//                     name: 'Priscilla Hester'
//                 },
//                 {
//                     id: 4,
//                     name: 'Stuart Barker'
//                 },
//                 {
//                     id: 5,
//                     name: 'Florine Mcintyre'
//                 },
//                 {
//                     id: 6,
//                     name: 'Karin Rosa'
//                 },
//                 {
//                     id: 7,
//                     name: 'Vinson Rutledge'
//                 }
//             ],
//             favoriteFruit: 'strawberry'
//         },
//         {
//             balance: '2340.54',
//             age: 32,
//             name: {
//                 first: 'Brewer',
//                 last: 'Vargas'
//             },
//             company: 'QIMONK',
//             email: 'brewer.vargas@qimonk.co.uk',
//             friends: [
//                 {
//                     id: 0,
//                     name: 'Tamera Sharp'
//                 },
//                 {
//                     id: 1,
//                     name: 'Jackie Parks'
//                 },
//                 {
//                     id: 2,
//                     name: 'Wanda Merritt'
//                 },
//                 {
//                     id: 3,
//                     name: 'Castillo Sloan'
//                 }
//             ],
//             favoriteFruit: 'apple'
//         },
//         {
//             balance: '1736.91',
//             age: 24,
//             name: {
//                 first: 'Newman',
//                 last: 'Wynn'
//             },
//             company: 'VISALIA',
//             email: 'newman.wynn@visalia.name',
//             friends: [
//                 {
//                     id: 0,
//                     name: 'Lopez Mccarthy'
//                 },
//                 {
//                     id: 1,
//                     name: 'Melinda Diaz'
//                 },
//                 {
//                     id: 2,
//                     name: 'Silva Shepherd'
//                 },
//                 {
//                     id: 3,
//                     name: 'Claudia Contreras'
//                 },
//                 {
//                     id: 4,
//                     name: 'Jenna Golden'
//                 },
//                 {
//                     id: 5,
//                     name: 'Blair Hayden'
//                 },
//                 {
//                     id: 6,
//                     name: 'Antonia Woods'
//                 },
//                 {
//                     id: 7,
//                     name: 'Felecia Greer'
//                 },
//                 {
//                     id: 8,
//                     name: 'Sherry Howard'
//                 },
//                 {
//                     id: 9,
//                     name: 'Montgomery Cohen'
//                 }
//             ],
//             favoriteFruit: 'apple'
//         }
//     ];


// function showAllEmails() {
//         users.forEach(user => console.log(user.email));
// }




// function userFriendLenght () {
//         console.log("Пользователи с наибольшим количеством друзей");

//         let max = Number.MIN_VALUE;

//         users.forEach(user => {
//             if (max < user.friends.length)
//                 max = user.friends.length;
//         });

//         users
//             .filter(user => user.friends.length == max)
//             .forEach(user => console.log(user.name.first + " " + user.name.last));
//     }





// showAllEmails();
// userFriendLenght();


// let obj1 = {
//         firstName: "Ivan",
//         lastName: "Ivanov",

//         print: function (obj) {
//             console.log(`${this.firstName} Firstname`);
//             console.log(`${this.lastName} Lastname`);
//         }
//     };

//     obj1.print();

let user = {
        balance: '$1,250.89',
        age: 24,
        name: 'Golden Clements',
        company: 'EWAVES',
        email: 'golden.clements@ewaves.io',
        friends: 5,
        favoriteFruit: 'strawberry'
    }
for (const key in user) {
        if (typeof user[key] == "string"){
                console.log(key, user[key]);
        }
}

