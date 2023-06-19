var loggedIn = JSON.parse(localStorage.getItem("userLogin"));
var temp = document.getElementById('recycle-list-container');

document.getElementById('recycle-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const place = document.getElementById('address').value;
    const userDate = document.getElementById('date').value;
    const weight = document.getElementById('weight').value;
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

console.log("Total User Order: " + loggedIn.order.length);

function cancelOrder(index){
    var orderList = JSON.parse(localStorage.getItem("order_data"));
    for (let i = 0; i < orderList.length; i++) {
        if(orderList[i].date == loggedIn.order[index].date && orderList[i].place == loggedIn.order[index].place && orderList[i].weight === loggedIn.order[index].weight){
            orderList.splice(i, 1);
            localStorage.setItem('order_data', JSON.stringify(orderList));
            break;
        }
    }

    loggedIn.order.splice(index, 1);
    let userData = JSON.parse(localStorage.getItem('user_data'));
    for (let i = 0; i < userData.length; i++) {
        if(loggedIn.email == userData[i].email){
            userData[i].order = loggedIn.order;
            localStorage.setItem('userLogin', JSON.stringify(loggedIn));
            localStorage.setItem('user_data', JSON.stringify(userData));
            break;
        }
    }
    temp.innerHTML = "";
    showList();
    return;
}

function showList(){
    if(loggedIn.order.length != 0){
        document.getElementById('no-order-list').style.display = "none";
        for (let i = 0; i < loggedIn.order.length; i++) {
            temp.innerHTML += `<div class="recycle-list">
                                    <div class="information">${loggedIn.order[i].date}</div>
                                    <div class="information">${loggedIn.order[i].place}</div>
                                    <div class="information">${loggedIn.order[i].weight} kg</div>
                                    <div class="information">${loggedIn.order[i].notes}</div>
                                    <button onclick="cancelOrder(${i})">Cancel</button>
                                </div>`
        }
    } else{
        document.getElementById('no-order-list').style.display = "block";
    }
}

showList();

let date = new Date();
let curDate = date.getDate();
let curMonth = date.getMonth() + 1;

if(curDate < 10) curDate = '0' + curDate;
if(curMonth < 10) curMonth = '0' + curMonth;

let curYear = date.getUTCFullYear();
let currentDate = document.getElementById("date");

// currentDate.setAttribute("min", curYear + "-" + curMonth + "-" + curDate);
