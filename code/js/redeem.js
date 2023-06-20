var productRedeem = [
    {name: "Waffle Binus Anggrek", point: 10000, rating: 4.5, photo: "../asset/waffle.jpg"},
    {name: "Nasi Hainam Chicken Fillet", point: 22000, rating: 5, photo: "../asset/hainam.jpg"},
    {name: "Rp 10.000", point: 15000, rating: 5, photo: "../asset/money.jpg"}
];

var temp = document.getElementById('card_container_id');

for (let i = 0; i < productRedeem.length; i++) {
    let pointNumber = productRedeem[i].point.toLocaleString("id");
    temp.innerHTML += `<div class="card">
                            <img src="${productRedeem[i].photo}" alt="">
                            <h1>${productRedeem[i].name}</h1>
                            <h2>${pointNumber} Point</h2>
                            <h3>Rating: ${productRedeem[i].rating}</h3>
                            <button class="redeem-btn" onclick="redeemTransaction(${i})">REDEEM</button>
                        </div>`;
}

var userLogged = localStorage.getItem("userLogin");
var loggedIn = JSON.parse(userLogged);

function redeemTransaction(index){
    if(!localStorage.getItem("userLogin")){
        window.location.href = "./login.html";
        return;
    }

    console.log(loggedIn.point);
    if(productRedeem[index].point > loggedIn.point){
        alert("Point is not enough");
        return;
    }

    alert(`You redeemed ${productRedeem[index].name}`);
    let userData = JSON.parse(localStorage.getItem("user_data"));
    loggedIn.point -= productRedeem[index].point;
    for (let i = 0; i < userData.length; i++) {
        if(loggedIn.email == userData[i].email){
            userData[i].point = loggedIn.point;
            localStorage.setItem("userLogin", JSON.stringify(loggedIn));
            localStorage.setItem("user_data", JSON.stringify(userData));
            break;
        }
    }
    location.reload();
    return;
}

function exclusive(){
    if(!localStorage.getItem("userLogin")){
        window.location.href = "./login.html";
        return;
    }

    window.alert("Contact admin to redeem exclusive product");
    location.reload();
    return;
}