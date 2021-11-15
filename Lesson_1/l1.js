
// ____________________________________________________  HOMEWORK  _____________________________________________________



                                        // _______________  1  _______________


// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write


let greeting = 'hello';
let name = 'owu';
let str = 'com';
let str1 = 'ua';
let number1 = 1;
let number2 = 10;
let number3 = -999;
let number4 = 123;
let numberPi = 3.14;
let number5 = 2.7;
let age = 16;
let girl = true;
let car = false;


alert(greeting)
console.log(greeting)
document.write(greeting)

alert(name)
console.log(name)
document.write(name)

alert(str)
console.log(str)
document.write(str)

alert(str1)
console.log(str1)
document.write(str1)

alert(number1)
console.log(number1)
document.write(number1)

alert(number2)
console.log(number2)
document.write(number2)

alert(number3)
console.log(number3)
document.write(number3)

alert(number4)
console.log(number4)
document.write(number4)

alert(numberPi)
console.log(numberPi)
document.write(numberPi)

alert(number5)
console.log(number5)
document.write(number5)

alert(age)
console.log(age)
document.write(age)

alert(girl)
console.log(girl)
document.write(girl)

alert(car)
console.log(girl)
document.write(girl)



                                        // _______________  2  _______________



// - Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write


// let greeting = 'hello';
greeting = 'goodbye';

alert(greeting)
console.log(greeting)
document.write(greeting)


// let name = 'owu';
name = 'okten';

alert(name)
console.log(name)
document.write(name)


// let str = 'com';
str = 'gmail';

alert(str)
console.log(str)
document.write(str)


// let str1 = 'ua';
str1 = 'en';

alert(str1)
console.log(str1)
document.write(str1)


// let number1 = 1;
number1 = 2;

alert(number1)
console.log(number1)
document.write(number1)


// let number2 = 10;
number2 = 20;

alert(number2)
console.log(number2)
document.write(number2)


// let number3 = -999;
number3 = 999;

alert(number3)
console.log(number3)
document.write(number3)


// let number4 = 123;
number4 = 321;

alert(number4)
console.log(number4)
document.write(number4)


// let numberPi = 3.14;
numberPi = 3.1415;

alert(numberPi)
console.log(numberPi)
document.write(numberPi)


// let number5 = 2.7;
number5 = 2.718;

alert(number5)
console.log(number5)
document.write(number5)


// let age = 16;
age = 17;

alert(age)
console.log(age)
document.write(age)


// let girl = true;
girl = false;

alert(girl)
console.log(girl)
document.write(girl)


// let car = false;
car = true;

alert(car)
console.log(car)
document.write(car)



                                        // _______________  3  _______________




// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)


const firstName2 = 'Nadiia';
const middleName2 = 'Olegivna';
let lastName = 'Andrushchak';

let person = [firstName2, middleName2,lastName]

console.log(person)



                                        // _______________  4  _______________



// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".


let firstName = prompt('What is your name');
let middleName = prompt('What is your middle name?');
let age2 = +prompt('How old are you?');

if (age2 > 21) {
    alert('Welcome Nadiia Olegivna!')
    alert('You are 31 years old.')

} else {
alert('Sorry, this is not your page!')
}



                                        // _______________  5  _______________



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a)

let b = '100';
console.log(typeof b)

let c = true;
console.log(typeof c)



                                        // _______________  6  _______________



// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!


5 < 6; true
5 > 6; false
5 >= 6; false
5 === 6; false
10 == 10; true
10 === 10; true
10 >= 10; false
10 <= 10; false
10 < 10; false
123 === '123'; false
123 !== '123'; true



                                        // _______________  7  _______________



// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str7 = "20";
let e = 5;
document.write(str + a + "<br/>");      /*=   205 - якщо один з операндів в бінорному операторі є стрінговим значенням, то відбувається з'єднання двох стрінгів і тому отримуємо результат 205.*/
document.write(str - a + "<br/>");      /*=   15 - в бінарному операторі строки, при відніманні, діленні та множенні, автоматично перетворюються в числа. Якщо потрібно і при додаванні str перевести у число, то потрібно перед "20" поставити +*/
document.write(str * "2" + "<br/>");   /* =   40 -                                          -//-*/
document.write(str / 2 + "<br/>");     /* =   10 -                                          -//-*/







// ___________________________________________________  CLASSWORK  _____________________________________________________





                                        // _______________  1  _______________



// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.


let numbers = [11, 55, -88, 2.72, 77, 100, -101, 1000, 20, 8]
let result = 0  // обнулення суми

for (i=0; i<10; i++)
if (numbers[i]>0)
result = result + numbers[i];

console.log(result)



                                        // _______________  2  _______________



// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр


let book = {
    name: 'The Night in Lisbon',
    pages: 288,
    genre: 'novel',
}



                                        // _______________  3  _______________



// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори



let book2 = {
    name: 'Mechanics and molecular physics',
    pages: 171,
    genre: 'scientific',
    authors: ['A.V.Popov', 'R.V.Vovk'],
}



                                        // _______________  4  _______________



// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт


let books = [

    {
    name: 'Design - thinking',
    pages: 224,
    genre: 'scientific',
    authors: ['A.V.Popov', 'R.V.Vovk'],
},


    {
    name: 'Java Script for children',
    pages: 368,
    genre: 'scientific',
    authors: 'Morgan Nick',
},


    {
    name: 'Netflix and the culture of innovation',
    pages: 352,
    genre: 'Business history',
    authors: ['Reed Hastings, Erin Meyer'],
},

];



                                        // _______________  5  _______________



// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.


let height = 23;
let width = 10;
let s = height*width;

console.log(s)



                                        // _______________  6  _______________



// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let v = dC*heightC;

console.log(v)



                                        // _______________  7  _______________



// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).



let n = 3;
let m = 4;
let k = n**n + m**m;

console.log(k)







// _____________________________________________________  ERRORS  ______________________________________________________





// Ваше завдання, зробити так, щоб файл відкривався без помилок .

let a = 100;
let b = 500;
let c = "hello";
let d = "okten";
const x = 'constant value';


let y = 'new value';

let result = a + y;

console.log(result);



