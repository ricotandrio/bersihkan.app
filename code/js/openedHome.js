var temp = document.getElementById('username');

var userLogged = localStorage.getItem("userLogin");

var loggedIn = JSON.parse(userLogged);
console.log(loggedIn);
temp.innerHTML = `<h1>Welcome, ${loggedIn.name}</h1>`