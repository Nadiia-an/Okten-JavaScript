


// ___________________________________________________  HOMEWORK ______________________________________________________



                                        // _______________  1  _______________

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello world';
console.log(str.length);

str = 'lorem ipsum';
console.log(str.length);

str = 'javascript is cool';
console.log(str.length);


                                        // _______________  2  _______________

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let toUpperCase = 'hello world';
console.log(toUpperCase.toUpperCase());

toUpperCase = 'lorem ipsum';
console.log(toUpperCase.toUpperCase());

toUpperCase = 'javascript is cool';
console.log(toUpperCase.toUpperCase());


                                        // _______________  3  _______________

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let toLowerCase = 'HELLO WORLD';
console.log(toLowerCase.toLowerCase());

toLowerCase = 'LOREM IPSUM';
console.log(toLowerCase.toLowerCase());

toLowerCase = 'JAVASCRIPT IS COOL';
console.log(toLowerCase.toLowerCase());


                                        // _______________  4  _______________

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let trim = ' dirty string   ';
console.log(trim.trim());


                                        // _______________  5  _______________

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToarray = (str) => {
    return str.split(' ');
}
let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
console.log(arr);
document.writeln(arr);


                                        // _______________  6  _______________

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

    let delete_characters = (str, length) => {
        return str.substr(0, length);
    };
    let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7));


                                        // _______________  7  _______________

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (str) => {
    let splitJoinUpper = str.split(' ').join('-').toUpperCase();
    return splitJoinUpper
}

    let string = "HTML JavaScript PHP";
document.writeln(insert_dash(string))


                                        // _______________  8  _______________

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let changeTheFirstCharacter = (str) => {
if (!str) return str;
return str[0].toUpperCase() + str.slice(1)
}
document.writeln(changeTheFirstCharacter('the deal was closed on Monday'));


                                        // _______________  9  _______________

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let  capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}

    document.writeln(capitalize('the deal was closed on Monday'));



// __________________________________________________  CLASSWORK ______________________________________________________



                                        // _______________  10  _______________

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// ___________________________

let n1 = 'Harry..Potter'

let name = (string, symbol) => {
    let newArr = [];
    if (string.includes(symbol)) {
        let a = string.split(symbol)
        a.forEach((item) => {
            if (item) newArr.push(item);
        })
        console.log(newArr.join(' '))
    }
}
name(n1, '.');

// ___________________________

let n2 = 'Ron---Whisley'

let name = (string, symbol) => {
    let newArr = [];
    if (string.includes(symbol)) {
        let a = string.split(symbol)
        a.forEach((item) => {
            if (item) newArr.push(item);
        })
        console.log(newArr.join(' '))
    }
}
name(n2, '-');

// ___________________________

let n3 = 'Hermione__Granger'

let name = (string, symbol) => {
    let newArr = [];
    if (string.includes(symbol)) {
        let a = string.split(symbol)
        a.forEach((item) => {
            if (item) newArr.push(item);
        })
        console.log(newArr.join(' '))
    }
}
name(n3, '_');


                                        // _______________  11  _______________

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let random = (length, num) => {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.floor(Math.random() * num));
    }
    return emptyArray;
};
console.log(random(2, 100));


                                        // _______________  12  _______________

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let sortRandom = (length, num) => {
    let emptyArray = [];
    for (let i = 1; i < length; i++) {
        emptyArray.push(Math.floor(Math.random() * num));
    }
    return emptyArray.sort((a, b) => a - b);
};
console.log(sortRandom(2, 100));


                                        // _______________  13  _______________

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let filterRandom = (length, num) => {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.floor(Math.random() * num));
    }
    return emptyArray.filter(value => value % 2 === 0);
};
console.log(filterRandom(2, 100));


                                        // _______________  14  _______________

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arrayRandom = (length, num) => {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.floor(Math.random() * num));
    }
    return emptyArray.map(value => value.toString());
};
console.log(arrayRandom(2, 100));


                                        // _______________  15  _______________

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (arr, direction) => {
    if (direction === 'ascending') return arr.sort((a, b) => a - b);
    if (direction === 'descending') return arr.sort((a, b) => b - a);
};
console.log(sortNums([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'ascending'));


                                        // _______________  16  _______________

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// ___________________________

// -- відсортувати його за спаданням за monthDuration

let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort);

// ___________________________

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter((value) => {
    return value.monthDuration > 5;
});
console.log(filter);


