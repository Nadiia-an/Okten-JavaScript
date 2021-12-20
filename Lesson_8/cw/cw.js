


// __________________________________________________  CLASSWORK ______________________________________________________



// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

let elementById = document.getElementById('main_header');
elementById.classList.add('sep-2021')


// b) робить шириниу елементу ul 400px

let ul = document.getElementsByTagName('ul');
console.log(ul)
ul[0].style.width = '400px';
ul[0].style.backgroundColor = '#a0b5d0';


// c) робить шириниу всіх елементів з класом linkList шириною 50%

let li = document.getElementsByClassName('linkList');
for (const liElement of li) {
    liElement.style.width = '50%';
    liElement.style.backgroundColor = '#ecd3f1';
}


// d) отримує текст який зберігається в елементі з класом listElement2

let text = document.getElementsByClassName('listElement2')
console.log(text);


// e) отримує всі елементи li та змінює ім колір фону на сірий

let tagName = document.getElementsByTagName('li');
for (const tagNameElement of tagName) {
    tagNameElement.style.background = 'silver'
}
console.log(tagName)


// f) отримує всі елементи 'a' та додає їм клас anchor

let elementsAll = document.getElementsByTagName('a');
for (const a of elementsAll) {
    a.classList.add('anchor')
}
console.log(elementsAll)


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let resize = document.getElementsByTagName('a');
for (const resizeElement of resize) {
    if(resizeElement.innerText === 'link3') {
        resizeElement.style.fontSize = '40px'
    }
}
console.log(resize)


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let elementX = document.getElementsByTagName('a');
for (const elementX1 of elementX) {
    elementX1.classList.add(elementX1.innerText)
}
console.log(elementX)


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let colorСhange = document.getElementsByTagName('sub-header');
for (const subheader of colorСhange) {
    subheader.style.background = prompt('Enter a color!')
}
console.log(colorСhange)


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()

let colorCh = document.getElementsByClassName('sub-header');
for (const colorCh1 of colorCh) {
    if(colorCh1.innerText === 'content 2 segment') {
        colorCh1.style.color = promt('What color?');
    }
}


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let receivingText = document.getElementsByTagName('content_1');
for (const receivingTextElement of receivingText) {
    receivingTextElement.innerText = prompt('Enter the text!')
}


// l) отримати елементи p та змінити їм padding на 20px

let getElement = document.getElementsByTagName('p');
for (const elementElement of getElement) {
    elementElement.style.padding = '20px'
}
console.log(getElement)


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let textNameGroup = document.getElementsByClassName('text2');
for (const textNameGroupElement of textNameGroup) {
    textNameGroupElement.innerText = 'sep-2021'
}
console.log(textNameGroup)