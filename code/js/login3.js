function signUp(){
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email2').value;
    var pass = document.getElementById('pass2').value;

    if(localStorage.getItem(email)){
        alert("Email is already registered");
        return;
    }

    var user = {
        name: nama,
        email: email,
        password: pass,
        point: 0
    };

    var object = JSON.stringify(user);
    localStorage.setItem(email, object);
    alert("data is added");
    console.log("Data is added" + object);
    alert("EVV");
}

function login(){
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    var user = localStorage.getItem(email);
    var data = JSON.parse(user)

    if(user == null) alert("There is no email");
    else if(email == data.email && pass == data.password) alert("Login Success");
    else alert("Wrong password");
}