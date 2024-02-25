// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let array = [
//   "hello",
//   "kokos",
//   "I love kokos",
//   true,
//   false,
//   17,
//   100500,
//   "react",
// ];

// console.log(array);

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 = {
//   title: "Великий Гетсбі",
//   pageCount: 180,
//   genre: "роман",
// };

// let book2 = {
//   title: "Майстер і Маргарита",
//   pageCount: 360,
//   genre: "фантастика",
// };

// let book3 = {
//   title: "1984",
//   pageCount: 250,
//   genre: "дистопія",
// };

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let author1 = {
//   itle: "1984",
//   pageCount: 250,
//   genre: "дистопія",
//   authors: [{ name: "George Orwell", age: "died" }],
// };

// let author2 = {
//   title: "Майстер і Маргарита",
//   pageCount: 360,
//   genre: "фантастика",
//   authors: [{ name: "Михайло Булгаков", age: "died" }],
// };

// let author3 = {
//   title: "Великий Гетсбі",
//   pageCount: 180,
//   genre: "роман",
//   authors: [{ name: "Francis Scott Fitzgerald", age: "died" }],
// };

// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let usersArray = [
//     { name: "Іван Петров", username: "ivan123", password: "qwerty123" },
//     { name: "Олена Сидорова", username: "olena456", password: "password456" },
//     { name: "Михайло Коваль", username: "mike789", password: "securePass789" },
//     { name: "Анна Іванова", username: "anna_ivanova", password: "pass1234" },
//     { name: "Петро Семенов", username: "peter_s", password: "passWord567" },
//     { name: "Юлія Мельник", username: "julia_m", password: "juliaPass789" },
//     { name: "Василь Литвин", username: "vasya_litvin", password: "secure12345" },
//     { name: "Наталія Григоренко", username: "natalia_g", password: "nataPass678" },
//     { name: "Олег Зайцев", username: "oleg99", password: "zaytsevPass" },
//     { name: "Марія Ковальчук", username: "maria_k", password: "password123" }
// ];

// console.log(usersArray[0].password);
// console.log(usersArray[1].password);
// console.log(usersArray[2].password);
// console.log(usersArray[3].password);
// console.log(usersArray[4].password);
// console.log(usersArray[5].password);
// console.log(usersArray[6].password);
// console.log(usersArray[7].password);
// console.log(usersArray[8].password);
// console.log(usersArray[9].password);

// // Логічні розгалуження:
// // - Є змінна х, якій ви надаєте довільне числове значення.
// // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 5;

// if (x !== 0) {
//     console.log("Вірно!");
// }else {
//     console.log("Невірно!");
// }

// var a1 = 1;
// var a2 = 0;
// var a3 = -3;

// if (a1 !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// if (a2 !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// if (a3 !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).

// let time = 40;

// if(time >= 0 && time < 15) {
//     console.log("1");
// }else if (time >= 15 && time < 30) {
//     console.log("2");
// }else if (time >= 30 && time < 45) {
//     console.log("3");
// }else if (time >= 45 && time <= 59) {
//     console.log("4");
// }


// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day  = 24;

// if(day >= 1 && day < 9) {
//     console.log("1");
// }else if (day >= 10 && day < 21) {
//     console.log("2");
// }else if (day >= 22 && day < 31) {
//     console.log("3");
// }else {
//     console.log("В місяці лише 30 або 31 день!");
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let dayOfWeek = parseInt(prompt("enter the number of the day of the week :)"));

// switch (dayOfWeek) {
//     case 1:
//         document.write("Monday");
//         break;
    
//     case 2:
//         document.write("Tuesday");
//         break;

//     case 3:
//         document.write("Wednesday")
//         break;

//     case 4:
//         document.write("Thursday");
//         break;

//     case 5:
//         document.write("Friday");
//         break;
    
//     case 6:
//         document.write("Satudray");
//         break;

//     case 7:
//         document.write("Sunday")
//         break;

//     default:
//         document.write("Неправильний день")
//         break;
//     }   

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

// let firstPrompt = parseInt(prompt("Enter a first number:"));
// let secondPrompt = parseInt(prompt("Enter a second number:"));

// if (firstPrompt > secondPrompt) {
//     document.write(`${firstPrompt} більше за ${secondPrompt}`);
// }else if (secondPrompt === firstPrompt) {
//     document.write("Числа рівні");
// }else {
//     document.write(`${secondPrompt} більше за ${firstPrompt}`);
// }

// // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// // за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


// let x = 2;
// x = x || "default";

// console.log(x);





// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]["monthDuration"] >= 5) {
    console.log("Super")
} else {
    console.log("not supper")
}
if (coursesAndDurationArray[1]["monthDuration"] >= 5) {
    console.log("Super")
} else {
    console.log("not supper")
}
if (coursesAndDurationArray[2]["monthDuration"] >= 5) {
    console.log("Super")
} else {
    console.log("not supper")
}
if (coursesAndDurationArray[3]["monthDuration"] >= 5) {
    console.log("super")
} else {
    console.log("not supper")
}
if (coursesAndDurationArray[4]["monthDuration"] >= 5) {
    console.log("super")
} else {
    console.log("not supper")
}
if (coursesAndDurationArray[5]["monthDuration"] >= 5) {
    console.log("super")
} else {
    console.log("not supper")
}

