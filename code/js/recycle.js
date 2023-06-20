var loggedIn = JSON.parse(localStorage.getItem("userLogin"));
var temp = document.getElementById('recycle-list-container');

let date = new Date();
let curDate = date.getDate();
let curMonth = date.getMonth() + 1;

if(curDate < 10) curDate = '0' + curDate;
if(curMonth < 10) curMonth = '0' + curMonth;

let curYear = date.getUTCFullYear();
let currentDate = document.getElementById("date");
currentDate.setAttribute("min", `${curYear}-${curMonth}-${curDate}`);

console.log("Total User Order: " + loggedIn.order.length);
document.getElementById('recycle-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const place = document.getElementById('address').value;
    const userDate = document.getElementById('date').value;
    let weight = document.getElementById('weight').value;
    const notes = document.getElementById('notes').value;
    const check = document.getElementById('checkbox').checked;

    if(!localStorage.getItem('userLogin')){
        window.alert("Please login first before do recycle!");
        window.location.href="login.html";
        return;
    }

    if(weight <= 0){
        window.alert("Weight of item cannot be negative integer");
    }

    if(!check){
        window.alert("You must be responsible for the information");
        return;
    }

    var progress;
    let compareDate = new Date(userDate);
    let date = new Date();
    console.log(date);
    console.log(compareDate);
    if(compareDate < date) progress = "confirmation";
    else progress = "process";

    weight = Number(weight);
    loggedIn.order.push({"pointPlus": weight, "place": place, "date": userDate, "weight": weight, "notes": notes, "progress": progress});
    if(!localStorage.getItem('order_data')){
        var orderData = [];
        orderData.push({"place": place, "date": userDate, "weight": weight, "email": loggedIn.email, "notes": notes, "progress": progress});
        localStorage.setItem('order_data', JSON.stringify(orderData));
    } else{
        var orderData = JSON.parse(localStorage.getItem('order_data'));
        orderData.push({"place": place, "date": userDate, "weight": weight, "email": loggedIn.email, "notes": notes, "progress": progress});
        localStorage.setItem('order_data', JSON.stringify(orderData));
    }

    let userData = JSON.parse(localStorage.getItem('user_data'));
    for (let i = 0; i < userData.length; i++) {
        if(loggedIn.email == userData[i].email){
            userData[i].order = loggedIn.order;
            localStorage.setItem('userLogin', JSON.stringify(loggedIn));
            localStorage.setItem('user_data', JSON.stringify(userData));
            break;
        }
    }
    window.location.reload();
    alert("Wait for Admin Confirmation");
    return;
});