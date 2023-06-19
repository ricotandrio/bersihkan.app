const data_user_storage = localStorage.getItem('user_data');

document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let email = document.getElementById("email2").value;
    let pass = document.getElementById("pass2").value;

    var temp_data = JSON.parse(data_user_storage);
    for(let i = 0; i < temp_data.length; i++){
        console.log(temp_data[i].email + " " + temp_data[i].password);
        if(email === temp_data[i].email && pass === temp_data[i].password && email === "admin@gmail.com"){
            localStorage.setItem('userLogin', JSON.stringify(temp_data[i]));
            window.location.href = "admin.html";
            return;
        } else if(email === temp_data[i].email && pass === temp_data[i].password){
            localStorage.setItem('userLogin', JSON.stringify(temp_data[i]));
            window.location.href = "home-logged-in.html";
            return;
        } else if(email === temp_data[i].email){
            document.getElementById("text-Fail").innerHTML = "Wrong Password";
            return;
        }
    }
    document.getElementById("text-Fail").innerHTML = "Email is not registered";
    return;
});

for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    console.log(key + ": " + value);
}
console.log(JSON.parse(data_user_storage).length);

const hidePass = document.getElementById("hide_pass");
hidePass.addEventListener("change", function(){
    let pass = document.getElementById("pass2");
    if(pass.type === "password"){
        pass.type = "text";
        document.getElementById("viewOpen").style.display = "block";
        document.getElementById("viewClose").style.display = "none";
    } else {
        pass.type = "password";
        document.getElementById("viewOpen").style.display = "none";
        document.getElementById("viewClose").style.display = "block";
    }
})
