if(localStorage.getItem("userLogin")){
    document.getElementById('logout').style.display = "block";
    document.getElementById('login').style.display = "none";
    document.getElementById('register').style.display = "none";
} else{
    document.getElementById('logout').style.display = "none";
    document.getElementById('login').style.display = "block";
    document.getElementById('register').style.display = "block";
}

if(localStorage.getItem("userLogin")){
    var userLogged = localStorage.getItem("userLogin");
    var loggedIn = JSON.parse(userLogged);
    
    if(loggedIn.name === "user001") document.getElementById('admin').style.display = "block";
    else document.getElementById('admin').style.display = "none";
}

document.getElementById('logout').addEventListener('click', function(){
    localStorage.removeItem('userLogin');
    window.location.href = "login.html";
});