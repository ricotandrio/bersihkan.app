var temp = document.getElementById('username');
var loggedIn = JSON.parse(localStorage.getItem("userLogin"));
console.log(loggedIn);
temp.innerHTML = `<h1>Welcome, ${loggedIn.name}</h1>`

var userPoint = document.getElementById('balance');
userPoint.innerHTML += `<h2>${loggedIn.point} poin</h2>`;

document.getElementById("recycle").addEventListener("click", function(){
    window.location.href = "../html/recycle.html";
})

document.getElementById("redeem").addEventListener("click", function(){
    window.location.href = "../html/redeem.html";
})

document.getElementById("forum").addEventListener("click", function(){
    window.location.href = "../html/forum.html";
})