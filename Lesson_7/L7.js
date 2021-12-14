


// ___________________________________________________  HOMEWORK ______________________________________________________



                                        // _______________  1  _______________

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


                                        // _______________  2  _______________

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let hollywoodActors = [
    new User ('4', 'Johnny','Depp', 'johnny@gmail.com', '+7 800 707-11-11'),
    new User ('2', ' Brad','Pitt', 'brad@gmail.com', '+7 800 707-22-22'),
    new User ('3', 'Angelina','Jolie', 'angelina@gmail.com', '+7 800 707-33-33'),
    new User ('1', 'Leonardo','DiCaprio', 'leonardo@gmail.com', '+7 800 707-44-44'),
    new User ('7', 'Arnold','Schwarzenegger', 'arnold@gmail.com', '+7 800 707-55-55'),
    new User ('6', 'Christian','Bale', 'christian@gmail.com', '+7 800 707-66-66'),
    new User ('5', 'Megan','Fox', 'megan@gmail.com', '+7 800 707-77-77'),
    new User ('10', 'Nicole','Kidman', 'nicole@gmail.com', '+7 800 707-88-88'),
    new User ('9', 'Cameron','Diaz', 'cameron@gmail.com', '+7 800 707-99-99'),
    new User ('8', 'Gerard','Butler', 'gerard@gmail.com', '+7 800 707-11-99')
];


                                        // _______________  3  _______________

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let arrUser = hollywoodActors.filter (value => value.id % 2 === 0)

console.log(arrUser);


                                        // _______________  4  _______________

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let arrUsersSort = hollywoodActors.sort((a,b) => a.id - b.id)

console.log(arrUsersSort);


                                        // _______________  5  _______________

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, email, phone, order) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


                                        // _______________  6  _______________

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [
    new Client ('1', 'Johnny','johnny@gmail.com', '+7 800 707-11-11', ['pineapple', 'bread', 'tomatoes', 'oranges']),
    new Client ('2', ' Brad','brad@gmail.com', '+7 800 707-22-22', ['donut', 'cucumber']),
    new Client ('3', 'Angelina','angelina@gmail.com', '+7 800 707-33-33', ['cereals', 'donut', 'fish']),
    new Client ('4', 'Leonardo','leonardo@gmail.com', '+7 800 707-44-44', ['bread']),
    new Client ('5', 'Arnold','arnold@gmail.com', '+7 800 707-55-55', ['cucumber', 'pineapple', 'cereals', 'olives', 'bananas']),
    new Client ('6', 'Christian','christian@gmail.com', '+7 800 707-66-66', ['fish', 'milk', 'cereals']),
    new Client ('7', 'Megan','megan@gmail.com', '+7 800 707-77-77', ['donut', 'milk']),
    new Client ('8', 'Nicole','nicole@gmail.com', '+7 800 707-88-88', ['tomatoes', 'fish', 'cucumber']),
    new Client ('9', 'Cameron','cameron@gmail.com', '+7 800 707-99-99', ['tomatoes']),
    new Client ('10', 'Gerard','gerard@gmail.com', '+7 800 707-11-99', ['pineapple', 'cucumber'])
];


                                        // _______________  7  _______________

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientsSort = clients.sort((a,b) => b.order.length - a.order.length);

console.log(clientsSort)



// __________________________________________________  CLASSWORK ______________________________________________________



                                        // _______________  8  _______________

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



function Car (model, producer, year, speed, power) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.power = power;

    this.drive = function () {
console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function () {
console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.power}`)
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    };

    this.addDrive = function (driver) {
        this.addDriver = driver;
    };
}


                                        // _______________  9  _______________

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car2 {
    constructor(model, producer, year, maxSpeed, power) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.power = power;
    }

    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info () {
        console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.power}`)
    };

    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear (newValue) {
        this.year = newValue;
    };

    addDrive (driver) {
        this.addDriver = driver;
    }
}


                                        // _______________  10  _______________

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellaAll = [
    new Cinderella('Sofia', 27, '37'),
    new Cinderella('Anna', 20, '38'),
    new Cinderella('Sandra', 21, '37'),
    new Cinderella('Olena', 29, '39'),
    new Cinderella('Catherine', 19, '37'),
    new Cinderella('Hafia', 30, '35'),
    new Cinderella('Anastasia', 28, '38'),
    new Cinderella('Emilia', 26, '36'),
    new Cinderella('Iryna', 18, '39'),
    new Cinderella('Natalie', 17, '37')
];
console.log(cinderellaAll);


                                        // _______________  11  _______________

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.footSize = size;
    }
}


                                        // _______________  12  _______________

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let prince = new Prince('Petro', 27, 35);

let cinderellaFound = (cinderellaAll, prince) => {
    for (let item of cinderellaAll) {
        if (item.footsize === prince.findSize) {
            return item.name
        }
    }
}
console.log(cinderellaFound(cinderellaAll, prince))


                                        // _______________  13  _______________

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let cinderella = cinderellaAll.find(value => value.size === prince.size);

console.log(cinderella);


