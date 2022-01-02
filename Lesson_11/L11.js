


// ___________________________________________________  HOMEWORK ______________________________________________________



                                        // _______________  1  _______________



// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let form = document.forms.form;
form.onsubmit = function (e) {
    e.preventDefault();
    let name = this.name.value;
    let age = this.age.value;
    console.log(name, age);
    localStorage.setItem('userData', JSON.stringify({name, age}));
}


                                        // _______________  2  _______________



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

car.onsubmit = function (e) {
    e.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let carr = {model:model, type:type, volume:volume};
    let cars = JSON.parse(localStorage.getItem('cars'));
    console.log(cars);
    if (!cars) {
        cars = [];
        cars.push(carr);
        localStorage.setItem('cars',JSON.stringify(cars));
    } else {
        cars.push(carr);
        localStorage.setItem('cars', JSON.stringify(cars));
    }
}



// __________________________________________________  CLASSWORK ______________________________________________________



                                        // _______________  3  _______________



// є масив -
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const user of users) {
let userDiv = document.createElement('div');
userDiv.innerText = JSON.stringify(user);
let btn = document.createElement('button');
btn.innerText = 'open';
btn.onclick = function () {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(user);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
userDiv.appendChild(btn);
document.body.appendChild(userDiv)
}

