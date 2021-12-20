


// ___________________________________________________  HOMEWORK ______________________________________________________



// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  котрий :


// -- отримує текст з параграфа з id "content"

let contentElement = document.getElementById('content')
console.log(contentElement);


// -- отримує текст з блоку з id "rules"

let rulesElement = document.getElementById('rules')
console.log(rulesElement);


// -- замініть текст параграфа з id 'content' на будь-який інший

contentElement.innerText = 'Поняття барокова музика або музика бароко описує стиль європейської музики в період ' +
    'приблизно між 1600 та 1750 роками . Барокова музика наслідує музику епохи Відродження й передує класичній музиці, ' +
    'її вершинами зазвичай вважають творчість Й.С.Баха, Ґ.Ф.Генделя та А.Вівальді.'


// -- замініть текст параграфа з id 'rules' на будь-який інший

rulesElement.innerText = 'Основним музичним інструментом бароко став орган у духовній та камерній світській музиці. ' +
    'Також широкого поширення набули клавесин, щипкові і смичкові струнні — віоли, барокова гітара, барокова скрипка, ' +
    'віолончель, контрабас, а також дерев\'яні духові інструменти: флейти, кларнет, гобой, фагот.'


// -- змініть кожному елементу колір фону на червоний

contentElement.style.backgroundColor = '#e73b3b'

rulesElement.style.backgroundColor = '#e73b3b'


// -- змініть кожному елементу колір тексту на синій

let colorText=  document.body.children;
for (const element of colorText) {
    element.style.color = '#111aec';
}


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let listOfClasses = document.getElementsByClassName('fc_rules');
for (const listOfClass of listOfClasses) {
    console.log(listOfClass)
}


// -- поміняти колір тексту у всіх елементів fc_rules на червоний


let textСolor = document.getElementsByClassName('fc_rules');
for (const element of textСolor) {
    element.style.color = 'red'
}







