
document.body.style.backgroundColor = 'rgba(174,164,170,0.78)'



// __________________________________________________  CLASSWORK ______________________________________________________



                                        // _______________  1  _______________

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

document.getElementById('btn').onclick = function () {
    let input1 = document.forms.form1.input1.value;
    let input2 = document.forms.form1.input2.value;
    let input3 = document.forms.form2.input3.value;
    let input4 = document.forms.form2.input4.value;
    console.log(input1, input2, input3, input4);
}


                                        // _______________  2  _______________

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let form = document.forms['form3'];
form.onsubmit = function (e) {
    e.preventDefault();
    let rows = +form.rows.value;
    let colums = +form.colums.value;
    let content = form.content.value;
    console.log(rows, colums, content);

    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < colums; j++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
    document.body.appendChild(table);
}


                                        // _______________  3  _______________

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let words = ['йклмн', 'бляха-муха'];
let btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    let word = document.getElementById('swear words').value;
    for (const wordElement of words) {
        if (wordElement === word) {
          alert('No-no-no!')
        }
    }
}


                                        // _______________  4  _______________

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let words2 = ['йклмн', 'бляха-муха'];
let btn3 = document.getElementById('btn3');
btn3.onclick = function () {
    let sentence = document.getElementById('swear words2').value;
    for (const wordElement of words2) {
        if (sentence.includes(wordElement)) {
            alert('No-no-no');
        }
    }
}
