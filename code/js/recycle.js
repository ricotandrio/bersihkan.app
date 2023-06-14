var loggedIn = JSON.parse(localStorage.getItem("userLogin"));
var temp = document.getElementById('recycle-list-container');

document.getElementById('recycle-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const place = document.getElementById('address').value;
    const date = document.getElementById('date').value;
    const weight = document.getElementById('weight').value;
    const notes = document.getElementById('notes').value;
    const check = document.getElementById('checkbox').checked;

    if(!localStorage.getItem('userLogin')){
        window.location.href="login.html";
        return;
    }

    var currentDate = new Date();
    var userDate = new Date(date);
    // if(userDate <= currentDate){
    //     alert(`Pick up date must be greater than ${currentDate}`);
    //     return;
    // }

    if(!check){
        alert("You must be responsible for the information");
        return;
    }

    var progress;
    if(userDate < currentDate) progress = "confirmation";
    else progress = "process";

    let pointPlus = Math.floor(weight * 1000);
    loggedIn.order.push({"pointPlus": pointPlus, "place": place, "date": date, "weight": weight, "notes": notes});
    if(!localStorage.getItem('order_data')){
        var orderData = [];
        orderData.push({"place": place, "date": date, "weight": weight, "email": loggedIn.email, "notes": notes, "progress": progress});
        localStorage.setItem('order_data', JSON.stringify(orderData));
    } else{
        var orderData = JSON.parse(localStorage.getItem('order_data'));
        orderData.push({"place": place, "date": date, "weight": weight, "email": loggedIn.email, "notes": notes, "progress": progress});
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