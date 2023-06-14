var temp = document.getElementById('username');

var userLogged = localStorage.getItem("userLogin");

var loggedIn = JSON.parse(userLogged);

temp.innerHTML = `<h1>Welcome, ${loggedIn.name}</h1>`
