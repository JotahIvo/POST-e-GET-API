/*GET request
const ul = document.getElementById('authors');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let authors = data;
        console.log(authors)

        authors.map(author => {
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let email = document.createElement('span');

            name.innerHTML = `${author.name}`;
            email.innerHTML = `${author.email}`;

            li.appendChild(name);
            li.appendChild(email);
            ul.appendChild(li);
        });
    })
    .catch((error) => {
        console.log(error);
}); */

//POST Request
const url = 'https://jsonplaceholder.typicode.com/users';

let data = {
    name: 'Sammy'
};

let request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
    })
});

fetch(request)
    .then(function(){
        //handle the request
    });