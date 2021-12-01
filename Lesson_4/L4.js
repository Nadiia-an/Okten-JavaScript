

// ___________________________________________________  HOMEWORK ______________________________________________________


                                        // _______________  1  _______________


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function theAreaOfTheRectangle (a, b) {              //
let res = a * b;                                     //
return res;                                          //
}                                                    //      Підставила значення для прикладу
let result = theAreaOfTheRectangle(50, 70);    //
console.log(result)                                  //


                                        // _______________  2  _______________


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle (r) {
    let res1 = 3.1415 * r * r;
    return res1;
}
let res1 = circle(8)
console.log(res1)


                                        // _______________  3  _______________


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder ( h, r) {
let s = 2 * 3.14 * h * r;
return s;
}

let sss = cylinder ( 50, 30);
console.log(sss)


                                        // _______________  4  _______________


// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = ['cheerful', 'joy', 'happy', 'energetic', 'funny'];
function positiveEmotions (arr) {
       for (let i = 0; i < arr.length; i++) {
           document.write('<div>')
           document.write(arr[i])
           document.write('</div>')
       }
}
positiveEmotions (arr)


                                        // _______________  5  _______________


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraphWithText (text) {
    document.write(`<p>${text}</p>`)
}

paragraphWithText('His words and music made a profound impact, beginning in the 1950s with his lyrics for “West Side Story” and continuing with his scores for “A Funny Thing Happened on the Way to the Forum” and others.')


                                        // _______________  6  _______________


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function names (name) {
    document.write(`<ul>`)
    document.write(`<li>${name}</li>`)
    document.write(`<li>${name}</li>`)
    document.write(`<li>${name}</li>`)
    document.write(`</ul>`)
}
    names ('Archyp')


                                        // _______________  7  _______________


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function banalName (a, b) {
    document.write(`<ul>`);
    for (let i = 0; i < b; i++) {
        document.write(`<li>${a}</li>`);
    }
    document.write(`</ul>`);
}
    banalName ('hello world', 3)


                                        // _______________  8  _______________


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let films = ['Дихай в тумані', 2018, 'Друге життя Уве', 2015, 'Танцюй серцем', 2019, true, false];
function movieTitle (arr) {
    document.write(`<ol>`)
    // for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[0]} ${arr[1]}</li>`);
        document.write(`<li>${arr[2]} ${arr[3]}</li>`);
        document.write(`<li>${arr[4]} ${arr[5]}</li>`);
        document.write(`<li>${arr[6]}</li>`);
        document.write(`<li>${arr[7]}</li>`);
    // }
    document.write(`</ol>`)
}
movieTitle(films)


                                        // _______________  9  _______________


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayOfObjects = [{id: 1, name: 'Hnat', age: 45},
                      {id: 2, name: 'Makar', age: 28},
                      {id: 3, name: 'Jeremiy', age: 34},
                      {id: 4, name: 'Hafia', age: 10},
                      {id: 5, name: 'Horpyna', age: 31},
                      {id: 6, name: 'Evdokia', age: 40},];
function people (arr) {
    for (let array of arr){
        document.write(`<div>${array.id}. ${array.name} ${array.age}</div>`)
    }
}
people(arrayOfObjects)


// __________________________________________________  CLASSWORK ______________________________________________________


                                        // _______________  10  _______________


// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function numberMin (n1, n2, n3) {
    if (n1 < n2 && n1 < n3) {
        console.log(n1);
    } else if (n2 < n3 && n2 < n1) {
        console.log(n2);
    } else {
        console.log(n3);
    }
};

numberMin (10, 20, 30);


                                        // _______________  11  _______________


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function numberMax (n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(n1);
    } else if (n2 > n3 && n2 > n1) {
        console.log(n2);
    } else {
        console.log(n3);
    }
};

numberMax (10, 20, 30);


                                        // _______________  12  _______________


// - створити функцію яка повертає найбільше число з масиву

let num = [10, 20, 30, 40, 50];

function bigNumber (arr) {
    let max = arr[0];
    for (let number of arr) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}
document.write(bigNumber(num))


                                        // _______________  13  _______________


// - створити функцію яка повертає найменьше число з масиву

let num2 = [10, 20, 30, 40, 50];

function bigNumber (arr) {
    let min = arr[0];
    for (let number of arr) {
        if (number < min) {
            max = number;
        }
    }
    return min;
}
document.write(bigNumber(num2))


                                        // _______________  14  _______________


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumNumbers = [10, 20, 30, 40, 50];
function sumator (arr){
    let sum = 0;
    for (let array of arr) {
    sum = array + sum;
    }
    return sum;
}
document.write(sumator(sumNumbers))


                                        // _______________  15  _______________


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let numbers = [10, 20, 30, 40, 50];
function sumator2 (arr){
    let sum = 0;
    for (let array of arr) {
        sum = array + sum;
    }
    return sum/arr.length;
}
document.write(sumator2(numbers))


                                        // _______________  16  _______________


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minMax(a) {
    let min = arguments[0];
    let max = arguments[0];
    for (let element of arguments) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log( max);
    return min;
}
document.write(minMax(10, 20, 30, 40, 50))


                                        // _______________  17  _______________


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randNumbers (numb) {
    let arr = [];
    for (let i = 0; i < numb; i++) {
        arr.push(Math.floor(Math.random()*100));
    }
    return arr
}
document.write(randNumbers(10))


                                        // _______________  18  _______________


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function numbers(length,limit) {
    let emptyArr = [];
    for (let i = 0; i < length; i++) {
        emptyArr.push(Math.round(Math.random() * limit));
    }
    return emptyArr;
}
document.write(numbers(10,100));


                                        // _______________  19  _______________


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function takesArray (arr) {
    let newArr = [];
    for (let i = newArr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = newArr[i];
    }
    return newArr;
}


