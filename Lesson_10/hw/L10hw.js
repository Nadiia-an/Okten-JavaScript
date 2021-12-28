
document.body.style.backgroundColor = 'rgba(174,164,170,0.78)'



// ___________________________________________________  HOMEWORK ______________________________________________________



                                        // _______________  1  _______________

// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

document.getElementById('hider').onclick = function() {
    document.getElementById('text').hidden = true;
    this.style.background = '#5f5462'
}


                                        // _______________  2  _______________

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let button = document.getElementById('button');
button.onclick = function () {
    this.style.display = 'none';
}
document.body.appendChild(document.createElement('hr'));


                                        // _______________  3  _______________

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.forms.Confirm;
form.onsubmit = function (e) {
    e.preventDefault();
    if (+this.age.value < 18) {
        alert('Stop!');
    }
    else
        alert('Welcome!');
}


                                        // _______________  4  _______________

// - Создайте меню, которое раскрывается/сворачивается при клике

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


                                        // _______________  5  _______________

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let coments = [
    {title: 'Архип', body: 'Які жанри музики вам довподоби?'},
    {title: 'Агафія', body: 'Фолк-рок, Джаз, Камерна музика'},
    {title: 'Аврелій', body: 'Електро, народна музика, Хард-Рок'}
]
for (const coment of coments) {
    let comentDiv = document.createElement('div');
    comentDiv.classList.add('coment');
    let title = document.createElement('h2');
    title.innerText = coment.title;
    let bodyComent = document.createElement('div');
    bodyComent.classList.add('body-coment');
    bodyComent.innerText = coment.body;
    let btn = document.createElement('button');
    btn.innerText = 'Заховати коментар';
    btn.onclick = function () {
        bodyComent.classList.toggle('hide-body');
    }
    comentDiv.append(title,bodyComent, btn);
    document.body.appendChild(comentDiv)}

