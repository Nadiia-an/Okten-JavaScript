


// ___________________________________________________  HOMEWORK ______________________________________________________


                                        // _______________  1  _______________

// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numb = [8, -88, 8.88, 88, 888];
console.log(numb)

let str = ['labrador', 'house', 'car', 'book', 'family'];
console.log(str)

let different = ['guitar', 'rock', 80.8, true, false];
console.log(different)


                                        // _______________  2  _______________

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [];
arr [0] = 'Bradley Cooper';
arr [1] = 'Adam Sandler'
arr [2] = 'Jennifer Aniston';
arr [3] = 'Brad Pitt ';
arr [4] = 'Angelina Jolie';
console.log(arr)


                                        //_______________  3  _______________
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
document.write('<div>')
    document.write('Be happy')
document.write('</div>')
}


                                        // _______________  4  _______________

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>`)
    document.write('By happy' + i)
    document.write(`</div>`)
}

                                        // _______________  5  _______________

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write('<h1>The holiday is approaching</h1>')
i++;
}

                                        // _______________  6  _______________

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i = 0;
while (i < 20) {
    document.write('<h1>The holiday is approaching</h1>' + i)
    i++
}

                                        // _______________  7  _______________

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numbers = [1, 11, 111, 1111, 11111, -11111, -1111, -111, -11, -1]

for (let number of numbers) {
    console.log(number)
}

                                        // _______________  8  _______________

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let names = ['Agaphia', 'Horpina', 'Zvenislava', 'Omelyan', 'Bratislav', 'Boguslav', 'Gnat', 'Ostap', 'Ilaria', 'Odarka'];

for ( let name of names) {
    console.log(name)
}

                                        // _______________  9  _______________

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let elementsOfTheNewYear = ['family', 'friends', 1, 'tree', 'champagne', 'olivier', 'presents', 'mood', 'joy', 'greeting'];

for (let elevents of elementsOfTheNewYear) {
    console.log(elevents)
}

                                        // _______________  10  _______________

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести
// тільки булеві елементи.

let all = [ 5, 55, 555, '5', '55', '555', 'good', 'cheerful', false, true];

for (let allValue of all) {
    if (typeof allValue === 'boolean') {
        console.log(allValue)
    }
}

                                        // _______________  11  _______________

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи.

let all1 = [ 5, 55, 555, '5', '55', '555', 'good', 'cheerful', false, true];

for (let i = 0; i < all1.length; i++ ) {
    let allValue = all1[i];
    if (typeof allValue === 'number') {
        console.log(allValue)
    }
}

                                        // _______________  12  _______________

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// рядкові елементи

let all2 = [ 5, 55, 555, '5', '55', '555', 'good', 'cheerful', false, true];

for (let i = 0; i < all2.length; i++) {
    let allValue = all2[i];
    if (typeof allValue === 'string') {
    console.log(allValue)
}}

                                        // _______________  13  _______________

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let array = [];
array[0] = true;
array[1] = false;
array[2] = 'programmer';
array[3] = 'lawyer';
array[4] = 'teacher';
array[5] = 'accountant';
array[6] = 2021;
array[7] = 31;
array[8] = 1;
array[9] = 2022;

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

                                        // _______________  14  _______________

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for ( let i = 0; i < 10; i++ ) {
    console.log('номер кроку' + ' ' + i )
    document.write('<div>')
    document.write('номер кроку' + ' ' + i )
    document.write('</div>')
}

                                        // _______________  15  _______________

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log('номер кроку' + ' ' + i)
    document.write('<div>')
    document.write('номер кроку' + ' ' + i)
    document.write('</div>')
}

                                        // _______________  15  _______________

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log(i)
    document.write(i + ' ')
}

                                        // _______________  16  _______________

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++ ) {
    if (i % 2 === 0) {
        console.log(i)
        document.write(i + ' ')
    }
}
                                        // _______________  17  _______________

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++ ) {
    if (i % 2 === 1) {
        console.log(i)
        document.write(i + ' ')
    }
}





// __________________________________________________  CLASSWORK ______________________________________________________




                                        // _______________  18  _______________

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

let yourData = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 0;
while ( i < 10 ) {
    console.log(yourData[i])
    document.write(yourData[i] + ' ')
    i++;
}

                                        // _______________  19  _______________

//     2. перебрати його циклом for

let yourData1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = 0; i < 10; i++) {
    console.log(yourData1[i])
    document.write(yourData1[i] + ' ')
}

                                        // _______________  20  _______________

//    3. перебрати циклом while та вивести  числа тільки з непарним індексом

let yourData2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 0;

while (i < 10) {
    if (i % 2 === 1) {
        console.log(yourData2[i])
        document.write(yourData2[i] + ' ')
    }
        i++;
}

                                        // _______________  21  _______________

// 4. перебрати циклом for та вивести числа тільки з непарним індексом

let yourData3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = 0; i < 10; i++) {
    if ( i % 2 === 1) {
        console.log(yourData3[i])
        document.write(yourData3[i] + ' ')
    }
}

                                        // _______________  22  _______________

// 5. перебрати циклом while та вивести числа тільки парні значення

let yourData4 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 0;
while (i < 10) {
    if (yourData4[i] % 2 === 0) {
        console.log(yourData4[i])
        document.write(yourData4[i] + ' ')
    }
        i++
}
                                        // _______________  23  _______________

// 6. перебрати циклом for та вивести  числа тільки парні  значення

let yourData5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = 0; i < 10; i++) {
    if (yourData5[i] % 2 === 0) {
        console.log(yourData5[i])
        document.write(yourData5[i] + ' ')
    }
}

                                        // _______________  24  _______________

// 7. замінити кожне число кратне 3 на слово "okten"

let yourData6= [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let valueTwo of yourData6) {
    if (valueTwo % 3 === 0) {
        valueTwo = 'okten'
        }
            console.log(valueTwo + ' ')
            document.write(valueTwo + ' ')
}

                                        // _______________  25  _______________

// 8. вивести масив в зворотньому порядку.

let yourData7 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for ( let i = yourData7.length - 1; i >= 0; i--) {
    console.log(yourData7[i])
    document.write(yourData7[i] + ' ')
}

                                        // _______________  26  _______________

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let yourData8 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

        // ________  26-1  ________

let i = 10 - 1;
while ( i >= 0 ) {
    console.log(yourData8[i])
    document.write(yourData8[i] + ' ')
    i--;
}

        // ________  26-2  ________

let yourData9 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = yourData.length - 1; i >= 0; i--) {
    console.log(yourData9[i])
    document.write(yourData9[i] + ' ')
}

        // ________  26-3  ________

let yourData10 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 10 - 1;

while (i >= 0) {
    if (i % 2 === 1) {
        console.log(yourData10[i])
        document.write(yourData10[i] + ' ')
    }
        i--;
}

        // ________  26-4  ________

let yourData11 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = yourData.length - 1; i >= 0; i--) {
    if ( i % 2 === 1) {
        console.log(yourData11[i])
        document.write(yourData11[i] + ' ')
    }
}

        // ________  26-5  ________

let yourData12 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 10 - 1;
while (i >= 0) {
    if (i % 2 === 0) {
        console.log(yourData12[i])
        document.write(yourData12[i] + ' ')
    }
        i--;
}

        // ________  26-6  ________

let yourData13 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = yourData.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(yourData13[i])
        document.write(yourData13[i] + ' ')
    }
}




// ___________________________________________________  ADDITIONAL ____________________________________________________



                                        // _______________  27  _______________
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

let i = 100;
let res = [];
for(i; i >= 1; i--){
    if (i % 2 === 0)
    res.unshift(' ' + i--);
}
document.write(res)

                                        // _______________  28  _______________

//     b. заповнити його 50 непарними числами за допомоги циклу.

let i = 100;
let res1 = [];
for(i; i >= 1; i--){
    if (i % 2 === 1)
    res1.unshift(' ' + i--);
}
document.write(res1)

                                        // _______________  29  _______________

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arr2 = [];
for (let i = 0; i < 20; i++ ) {
    let a = Math.round( Math.random() * 100 );
    let arr2 = arr2.push(a);
    document.write (arr2);
}

                                        // _______________  30  _______________

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let randomNumbers = [];
for ( let i = 0; i < 20; i++ ) {
    randomNumbers.push(Math.round( Math.random() *  732 ) + 8);
}
document.write( '<br><br>' + randomNumbers );

                                        // _______________  31  _______________

// 2. Вивести за допомогою console.log кожен третій елемен
let arr3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0 ; i < arr3.length; i+=3){
        console.log(arr3[i]);
}

                                        // _______________  32  _______________

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

let arr4 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0 ; i < arr4.length; i+=3){
        if (arr4[i] % 2 === 0){
        console.log(arr4[i]);
        }
}

                                        // _______________  33  _______________

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let arr7 = [1, 2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let arr8 = [];
for ( let i = 0 ; i < arr7.length; i+=3){
        if (arr7[i]%2 === 0) {
                arr8.push(arr7[i]);
        }
}
console.log(arr8)

                                        // _______________  34  _______________

// 5. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// Обрахувати середній чек.

let arr15 = [100,250,50,168,120,345,188];
let unknown = 0;
for (let i = 0; i < arr15.length; i++){
        unknown = unknown + arr15[i];
}
unknown = unknown/arr15.length;
console.log(unknown);


                                        // _______________  35  _______________

// 6. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr16 = [1, 11, 111, 1111, 11111, 111111, 1111111];
let item = [];
for (let i = 0; i < arr16.length; i++){
        item.push(arr16[i] *5);
}
console.log(item)

                                        // _______________  36  _______________

// 7. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо
// елемент є числом - додати його в інший масив.

let arr17 = [77, 777, 17, true, false, 'bread', 'butter', 'tomatoes', 'meat', 'milk'];
let newArr = [];
for ( let i = 0; i < arr17.length; i++){
        if (typeof arr17[i] === `number`){
                newArr.push(arr17[i])
        }
}
console.log(newArr)


                                        // _______________  37  _______________

//  - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

arr9 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < arr9.length; i++){
        if (arr9[i]%2 === 0){
                console.log(arr9[i]);
        }
}

                                        // _______________  38  _______________

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// значення одного масиву в інший.

arr10 = [2,17,13,6,22,31,45,66,100,-18];
arr11 = [];
for (let i = 0; i < arr10.length; i++){
    arr11[i] = arr10[i];
}
console.log(arr11)

                                        // _______________  39  _______________

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arr12 = [ 'a', 'b', 'c'];
let  newStr = "";
for ( let i = 0; i < arr12.length; i++){
        newStr = newStr + arr12[i];
}
console.log(newStr)

                                        // _______________  40  _______________

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let arr13 = [ 'a', 'b', 'c'];
let  newStrTwo = "";

let i = 0;
while ( i < arr13.length) {
        newStrTwo = newStrTwo + arr13[i];
        i++;
}
console.log(newStrTwo)

                                        // _______________  41  _______________

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let arr14 = [ 'a', 'b', 'c'];
let  newStrThree = "";

for ( let array14 of arr14 ) {
        newStrThree = newStrThree + array14;

}
console.log(newStrThree)



