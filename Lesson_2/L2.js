


// ___________________________________________________  HOMEWORK ______________________________________________________



                                        // _______________  1  _______________



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).


let time = +prompt('How many minutes?');
if (time > 0 && time <= 15) {
    document.write('<h1> I Quarter</h1>')
}

if (time > 15 && time <= 30) {
    document.write('<h1> II Quarter</h1>')
}

if (time > 30 && time <= 45) {
    document.write('<h1> III Quarter</h1>')
}

if (time > 45 && time <= 60) {
    document.write('<h1> IV Quarter</h1>')
}


                                        // _______________  2  _______________



// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// // це число (у першу, другу чи третю).



// let day = 31;
// let decade = 3;
// let x = (day/decade);
//
// console.log(x)


let day = +prompt('What day of the month?');
if (day > 1 && day <= 10) {
    document.write('<h1>decade-1</h1>')
}

if (day > 11 && day <= 20) {
    document.write('<h1>decade-2</h1>')
}

if (day > 21 && day <= 31) {
    document.write('<h1>decade-3</h1>')
}


                                        // _______________  3  _______________



// // - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// //Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)



let test = ' ';
if (test === true) {
    console.log('Вірно')
}
else {
    console.log('Невірно')
}



let test1 = ' ' ? 'Вірно' : 'Не вірно';

console.log(test1)

let test2  = '' ? 'Вірно' : 'Невірно';

console.log(test2)



                                           // _______________  4  _______________



// // - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let number = +prompt('Введіть число 1, 0 ,-3');
if (number !== 0) {
    document.write('Вірно')
} else
{
    document.write('Невірно')
}

(number !== 0) ? console.log('Вірно') : console.log('Невірно');



                                           // _______________  5  _______________



// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“

let name = prompt('Яка «офіційна» назва JavaScript?');
if (name === 'ECMAScript') {
    document.write('Вірно');
} else  {
    document.write('Невірно');
}

(name === 'ECMAScript') ? console.log('Вірно') : console.log('Невірно');



                                        // _______________  6  _______________



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.


let schedule = '3';
switch (schedule) {
    case '1':
        console.log('Дочитати книгу');
        break;
    case '2':
        console.log('Зробити дз по js');
        break;
    case '3':
        console.log('Подивитись документальний фільм');
        break;
    case '4':
        console.log('Сходити на відкриття виставки');
        break;
    case '5':
        console.log('Зустрітись з друзями');
        break;
    case '6':
        console.log('Повчити англійську');
        break;
    case '7':
        console.log('Скласти план на наступний тиждень:)');
}



                                        // _______________  7  _______________



// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.


let year = prompt('Чи високосний рік?');

if(year%4) {
   document.write('<h2>Рік не високосний</h2>');
}
else {
    document.write('<h2>Рік високосний</h2>');
}


                                        // _______________  8  _______________



// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!


let name = prompt('Введіть назву');

(name === 'ECMAScript') ? document.write('Правильно!'): document.write('Не знаєте?  ECMAScript!');







// __________________________________________________  CLASSWORK ______________________________________________________



                                        // _______________  9  _______________



// - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.


let number1 = +prompt('Введіть перше число');
let number2 = +prompt('Введіть друге число');
if (number1 > number2){
    document.write('number1')
} else if (number1 === number2){
    document.write('Введені числа рівні')
} else if (number1 < number2) {
    document.write('number2');
}


                                        // _______________  10  _______________



// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.



let flat = +prompt('Введіть номер квартири!');
if (flat > 0 && flat <= 20) {
    document.write('I - під*їзд')
}

if (flat > 20 && flat <= 48) {
    document.write('II - під*їзд')
}

if (flat > 48 && flat <= 90) {
    document.write('III - під*їзд')
}


                                        // _______________  11  _______________



// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО


let number = +prompt('Введіть числове значення');

if (number === 10) {
    document.write('Вірно!')
} else  {
   document.write('Невірно!')
}


                                        // _______________  12  _______________



// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// якщо в змінну записали щось інше, спрацьовує else



let x = 10>5;

if (typeof x === 'number') {
    document.write('1')
} else if (typeof x === 'string') {
    document.write('2')
} else if (typeof x === 'boolean') {
    document.write('3')
} else if (typeof x === 'object') {
    document.write('4')
} else {
    document.write('I don*t understand you. Sorry!')
}


                                        // _______________  13  _______________



// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН


let c = +prompt('Яка температура повітря?');
if ( c > +9 && c <= +22) {
    document.write('Йдемо ВЧИТИСЬ!!!')
} else {
 document.write('Cидимо вдома і вчимося ОНЛАЙН!')
}



                                        // _______________  14  _______________



// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .


let numb = '5';
switch (numb) {
    case '1':
        console.log('Вітаємо, Ви виграли два квитки на Rock Opera Mozart Le Concert ');
        break;
    case '2':
        console.log('Вітаємо, Ви виграли піврічний абонемент у Львівський органний зал');
        break;
    case '3':
        console.log('Вітаємо, Ви виграли iPhone 13 Pro Max');
        break;
    case '4':
        console.log('Вітаємо, Ви виграли Ноутбук Apple MacBook Pro 16');
        break;
    case '5':
        console.log('Вітаємо, Ви виграли JAGUAR F-PACE');
        break;
    default:
        console.log('Сьогодні не ваш день:)');
}



// ___________________________________________________  ADDITIONAL ____________________________________________________



                                        // _______________  15  _______________



// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.


// // let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

let friends = +prompt('Скільки елементів в масиві?')

if (friends > 3 || friends === 3) {
    document.write('Це великий масив')
} else if (friends < 3) {
    document.write('Це маленький масив, в якому менше 3-х елементів')
}


                                        // _______________  16  _______________



// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//


let a = +prompt("Введите первое число:");
let b = +prompt("Введите второе число:");
let c = +prompt("Введите третье число:");
let min, sr,  max;

if (a < b) min = a; else min = b;
if (c < min) min = c;
if (a > b) max = a; else max = b;
if (c > max) max = c;
sr = a + b + c - min - max;
alert(sr);


                                        // _______________  17  _______________



// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

let a = 1;
let b = 5;

(a + b < 4) ? console.log('Мало') : console.log('Багато')



                                        // _______________  18  _______________



// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором


let c1 = +prompt('Введіть число');
if (c1 > -100 && c1 <= -1) {
    document.write('<h2>Негативне</h2>')
}

if (c1 === 0) {
    document.write('<h2>Нуль</h2>')
}

if (c1 > 0 && c1 <= 100) {
    document.write('<h2>Позитивне</h2>')
}



// (((+prompt('Введіть число') (c1 > -100 && c1 <= -1)) (c1 === 0)) (c1 > 0 && c1 <= 100))?  document.write('<h1>Негативне</h1>') : document.write('<h1>Позитивне</h1>');