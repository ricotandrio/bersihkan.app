var user_data = [
    {"name": "Admin", "email": "admin@gmail.com", "password": "12345678", "point": 0, "order": []}
];

function initializeLocalStorageVariable(variableName, defaultValue) {
    if (!localStorage.getItem(variableName)) {
        localStorage.setItem(variableName, JSON.stringify(defaultValue));
    }
}

initializeLocalStorageVariable('user_data', user_data);

if(localStorage.getItem("userLogin")){
    document.getElementById('logout').style.display = "block";
    document.getElementById('login').style.display = "none";
    document.getElementById('home-default').style.display = "none";
    document.getElementById('home-logged-in').style.display = "block";
} else if(!localStorage.getItem("userLogin")){
    document.getElementById('logout').style.display = "none";
    document.getElementById('login').style.display = "block";
    document.getElementById('admin').style.display = "none";
    document.getElementById('home-default').style.display = "block";
    document.getElementById('home-logged-in').style.display = "none";
    document.getElementById('coin-container').style.display = "none";
}

if(localStorage.getItem("userLogin")){
    var loggedIn = JSON.parse(localStorage.getItem("userLogin"));

    if(loggedIn.email === "admin@gmail.com"){
        document.getElementById('admin').style.display = "block";
        document.getElementById('home-logged-in').style.display = "none";
        document.getElementById('about').style.display = "none";
        document.getElementById('recycle').style.display = "none";
        document.getElementById('coin-container').style.display = "none";
    }
    else{
        document.getElementById('admin').style.display = "none";
        document.getElementById("coin_value").innerHTML = loggedIn.point;
    }
}

document.getElementById('logout').addEventListener('click', function(){
    localStorage.removeItem('userLogin');
    window.location.href = "login.html";
});