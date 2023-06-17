var user_data = [
    {"name": "user001", "email": "user@gmail.com", "password": "admin135246", "point": 0, "order": []}
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
    document.getElementById('register').style.display = "none";
    document.getElementById('home-default').style.display = "none";
    document.getElementById('home-logged-in').style.display = "block";
} else{
    document.getElementById('logout').style.display = "none";
    document.getElementById('login').style.display = "block";
    document.getElementById('register').style.display = "block";
    document.getElementById('admin').style.display = "none";
    document.getElementById('home-default').style.display = "block";
    document.getElementById('home-logged-in').style.display = "none";
}

if(localStorage.getItem("userLogin")){
    var loggedIn = JSON.parse(localStorage.getItem("userLogin"));
    
    if(loggedIn.name === "user001") document.getElementById('admin').style.display = "block";
    else document.getElementById('admin').style.display = "none";
}

document.getElementById('logout').addEventListener('click', function(){
    localStorage.removeItem('userLogin');
    window.location.href = "login.html";
});