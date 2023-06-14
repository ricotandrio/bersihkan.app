var temp = document.getElementById('username');

var userLogged = localStorage.getItem("userLogin");

var loggedIn = JSON.parse(userLogged);

temp.innerHTML = `<h1>Welcome, ${loggedIn.name}</h1>`

document.getElementById("recycle").addEventListener("click", function(){
    window.location.href = "../html/recycle.html";
})

document.getElementById("redeem").addEventListener("click", function(){
    window.location.href = "../html/redeem.html";
})

document.getElementById("forum").addEventListener("click", function(){
    window.location.href = "../html/forum.html";
})
