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
let arr = ['London', 'Rome', 'Kyiv'];

arr[3] = "Konotop";
arr[5] = "Zhmerinka";
console.log(arr)

for (i = 0; i < arr.length; i++) {
        alert(arr[i]);
}

for (let i of arr) {
        alert(i);
}


let values = [138,2,5,6,34,265,65,1];
let max = Number.MIN_VALUE;
// for (let i = 0; i < values.length; i++){
for (let i of values){
 
        if (i > max) {
                max = i;
        }
}
alert(max)

