


// ___________________________________________________  HOMEWORK ______________________________________________________



                                        // _______________  1  _______________



// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let postAllDiv = document.getElementsByClassName('postAll') [0];
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');

            let postIdDiv = document.createElement('div');
            postIdDiv.innerText = `id - ${valueElement.id}`;

            let postUserIdDiv = document.createElement('div');
            postUserIdDiv.innerText = `user Id - ${valueElement.userId}`;

            let postTitleDiv = document.createElement('h2');
            postTitleDiv.innerText = valueElement.title;

            let postBodyDiv = document.createElement('div');
            postBodyDiv.innerText = valueElement.body;

            postDiv.append(postIdDiv,postUserIdDiv, postTitleDiv, postBodyDiv);
            postAllDiv.appendChild(postDiv);
        }
    })



                                        // _______________  2  _______________



// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let commentsDiv = document.getElementsByClassName('comments') [0];

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {

        for (const valueElement2 of value) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            let postIdDiv = document.createElement('div');
            postIdDiv.innerText = 'post id - ' + valueElement2.postId;

            let idDiv = document.createElement('div');
            idDiv.innerText = 'id - ' + valueElement2.id;

            let nameDiv = document.createElement('div');
            nameDiv.innerText = valueElement2.name;

            let emailDiv = document.createElement('div');
            emailDiv.innerText = valueElement2.email;

            let bodyDiv = document.createElement('p');
            bodyDiv.innerText - valueElement2.body;

            commentDiv.append(postIdDiv, idDiv, nameDiv, emailDiv, bodyDiv);
            commentsDiv.appendChild(commentDiv);
        }
    })



// __________________________________________________  CLASSWORK ______________________________________________________



                                        // _______________  3  _______________



// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let postsDiv = document.getElementsByClassName('posts')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
.then(value => value.json())
.then(value => {
    for (const valueElement3 of value) {
let postDiv = document.createElement('div');
postDiv.innerText = `post id - ${valueElement3.id}; ${valueElement3.body}`;
postDiv.classList.add('post');
let button = document.createElement('button');
button.innerText = 'Read the comment';
        button.classList.add('button')
button.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${valueElement3.id}/comments`)
        .then(value => value.json())
        .then(value => {
            let commentsDiv = document.createElement('div');
            commentsDiv.classList.add('post-comments');
            for (const commentsDivElement of value) {
                let comment = document.createElement('div');
                comment.classList.add('comment');
                comment.innerText = commentsDivElement.body;
                commentsDiv.appendChild(comment);
            }
            postDiv.appendChild(commentsDiv);
        })
}
postDiv.append(button);
postsDiv.append(postDiv);
    }
})
