const data_user_storage = localStorage.getItem('user_data');

document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email2').value;
    var pass = document.getElementById('pass2').value;
    var user = {
        "name": nama,
        "email": email,
        "password": pass,
        "point": 1000,
        "order": []
    };

    var temp_user_data = JSON.parse(data_user_storage);
    for(let i = 0; i < temp_user_data.length; i++){
        if(temp_user_data[i].email === email){
            alert("Email already exist");
            return;
        }
    }

    temp_user_data.push({ "name": nama, "email": email, "password": pass, "point": 1000, "order": []});
    localStorage.setItem('user_data', JSON.stringify(temp_user_data));
    localStorage.setItem('userLogin', JSON.stringify(user));
    alert("Register Success");
    window.location.href = "home-logged-in.html";
    return;
});

for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    console.log(key + ": " + value);
}
console.log(JSON.parse(data_user_storage).length);

document.getElementById('pass2').addEventListener('keyup', (event) =>{
    let pass = document.getElementById('pass2').value;
    if(pass.length < 8 && pass.length > 0) document.getElementById("text-Fail").innerHTML = "Password must be more or equal to 8 characters long";
    else document.getElementById("text-Fail").innerHTML = "";
})
