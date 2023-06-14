var user_data = [
    {"name": "user001", "email": "user@gmail.com", "password": "admin135246", "point": 0}
];

function initializeLocalStorageVariable(variableName, defaultValue) {
    if (!localStorage.getItem(variableName)) {
        localStorage.setItem(variableName, JSON.stringify(defaultValue));
    }
}

initializeLocalStorageVariable('user_data', user_data);
const data_user_storage = localStorage.getItem('user_data');

function signUp() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email2').value;
    var pass = document.getElementById('pass2').value;

    var temp_user_data = JSON.parse(data_user_storage);
    for(let i = 0; i < temp_user_data.length; i++){
        if(temp_user_data[i].email === email){
            window.alert("Email already exist");
            return;
        }
    }
    temp_user_data.push({ "name": nama, "email": email, "password": pass, "point": 100000});
    localStorage.setItem("user_data", JSON.stringify(temp_user_data));
    console.log("Data is added" + object);
    window.alert("STOP");
}

for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    console.log(key + ": " + value);
}
console.log(JSON.parse(data_user_storage).length);

// function login(){
//     let email = document.getElementById('email').value;
//     let pass = document.getElementById('pass').value;

//     var user = localStorage.getItem(email);
//     var data = JSON.parse(user)

//     if(user == null) alert("There is no email");
//     else if(email == data.email && pass == data.password) alert("Login Success");
//     else alert("Wrong password");
// }

document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let email = document.getElementById("email2").value;
    let pass = document.getElementById("pass2").value;

    var temp_data = JSON.parse(data_user_storage);
    for(let i = 0; i < temp_data.length; i++){
        console.log(temp_data[i].email + " " + temp_data[i].password);
        if(email === temp_data[i].email && pass === temp_data[i].password && email === "user@gmail.com"){
            localStorage.setItem("userLogin", JSON.stringify(temp_data[i]));
            window.alert("login Admin");
            window.location.href = "admin.html";
            return;
        } else if(email === temp_data[i].email && pass === temp_data[i].password){
            localStorage.setItem("userLogin", JSON.stringify(temp_data[i]));
            window.alert("login");
            window.location.href = "home-logged-in.html";
            return;
        } else if(email === temp_data[i].email){
            window.alert("Wrong Password");
            return;
        }
    }
    window.alert("Email is not registered");
    return;
});