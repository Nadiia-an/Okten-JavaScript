
document.body.style.backgroundColor = 'rgba(174,164,170,0.78)'



// ___________________________________________________  HOMEWORK ______________________________________________________



                                        // _______________  1  _______________

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array = ['Main','Products','About us','Contacts'];

let menu = document.getElementsByClassName('menu')[0];
array.forEach(item => {
    let li = document.createElement('li');
    li.innerText = item
    menu.appendChild(li)
})


document.body.appendChild(document.createElement('hr'));


                                        // _______________  2  _______________

// Все робити за допомоги js.
// - створити блок

let div = document.createElement('div');


// - додати йому класи wrap, collapse, alpha, beta

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');


// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

div.style.margin = '15px'
div.style.width = '350px'
div.style.height = '50px'
div.style.padding = '0 0 0 12px'
div.style.background = '#697a7a'
div.style.borderRadius = '30px';
div.style.fontSize = '28px'
div.style.fontFamily = 'Amiri'
div.style.color = 'aliceblue'
div.style.textShadow = '#314a4a 0.1em 0.2em 0.15em'
div.innerText = 'Five most famous movie stars';


// - додати цей блок в body.

document.body.appendChild(div)


// - клонувати його повністю, та додати клон в body.

let cloene = div.cloneNode(true);
document.body.appendChild(cloene);


document.body.appendChild(document.createElement('hr'));


                                        // _______________  3  _______________

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.forEach(value => {
    let div = document.createElement('div');
    let item ='';
    for (const itemElement in value) {
        item+=`  -${itemElement} ${value[itemElement]}`
    }
    div.innerText = item.slice()
    document.body.appendChild(div)
})


document.body.appendChild(document.createElement('hr'));


                                        // _______________  4  _______________

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray2.forEach(value => {
    let div = document.createElement('div');
    div.classList.add('item')
    let h1 = document.createElement('h1');
    h1.classList.add('heading')
    let p = document.createElement('p');
    p.classList.add('description')
    h1.innerText = value.title
    p.innerText = value.monthDuration
    div.append(h1, p)
    document.body.appendChild(div)
    div.style.width = '365px'
    div.style.height = '50px'
    div.style.background = '#697a7a'
    div.style.borderRadius = '30px';
    h1.style.fontSize = '28px'
    h1.style.fontFamily = 'Amiri'
    h1.style.color = 'aliceblue'
    h1.style.margin = '2px 0 20px 18px'
    h1.style.textShadow = '#314a4a 0.1em 0.2em 0.15em'
    p.style.fontSize = '28px'
    div.style.margin = '15px'
    div.style.display = 'flex'
    p.style.fontSize = '28px'
    p.style.fontFamily = 'Amiri'
    p.style.color = 'aliceblue'
    p.style.textShadow = '#314a4a 0.1em 0.2em 0.15em'
    p.style.margin = '3px 0 20px 18px'
})


document.body.appendChild(document.createElement('hr'));



// __________________________________________________  CLASSWORK ______________________________________________________



                                        // _______________  5  _______________

// - є масив
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const simpson of simpsons) {
    let elementArrDiv = document.createElement('div');
    elementArrDiv.classList.add('member');
    elementArrDiv.innerText =  `${simpson.name} ${simpson.surname} ${simpson.age}`
    document.body.appendChild(elementArrDiv)
}


document.body.appendChild(document.createElement('hr'));


                                        // _______________  6  _______________

// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member

for (const simpson of simpsons) {
    let element = document.createElement('div');
    element.classList.add('member');

    let name = document.createElement('div');
    name.innerText = simpson.name;
    element.appendChild(name);

    let surname = document.createElement('div');
    surname.innerText = simpson.surname
    element.appendChild(surname);

    let age = document.createElement('div');
    age.innerText = simpson.age;
    element.appendChild(age);

    let p = document.createElement('p');
    p.innerText = simpson.info;
    element.appendChild(p);

    let img = document.createElement('img');
    img.src = simpson.photo
    element.appendChild(img);

    document.body.appendChild(element)
    element.style.border = '2px solid white'
}


document.body.appendChild(document.createElement('hr'));


                                        // _______________  7  _______________

// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];



coursesArray.forEach(item => {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item')
    let titleDiv = document.createElement('div');
    let durationDiv = document.createElement('div');
    let monthDiv = document.createElement('div');
    let hourDiv = document.createElement('div');
    durationDiv.append(monthDiv, hourDiv)
    durationDiv.style.display = 'flex'
    monthDiv.style.width = '25%'
    hourDiv.style.width ='75%'
    let modulesDiv = document.createElement('div');
    titleDiv.innerText = item.title
    monthDiv.innerText = item.monthDuration
    hourDiv.innerText = item.hourDuration
    item.modules.forEach(module => {
        let moduleDiv = document.createElement('div');
        moduleDiv.innerText = module
        modulesDiv.appendChild(moduleDiv)
        // itemDiv.style.border = '1px solid white'
        // titleDiv.style.border = '1px solid white'

    })
    itemDiv.append(titleDiv, durationDiv, modulesDiv)
    document.body.appendChild(itemDiv)
})
