document.getElementById("request_user").addEventListener("click", function(){
    window.location.href = "./recycle-list.html";
});

var temp = document.getElementById('username');
var loggedIn = JSON.parse(localStorage.getItem("userLogin"));
console.log(loggedIn);
temp.innerHTML = `<h1>Welcome, ${loggedIn.name}</h1>`

var userPoint = document.getElementById('balance');
let pointHistory = loggedIn.historyPoint.toLocaleString("id");
userPoint.innerHTML += `<h2>${pointHistory} point</h2>`;
document.getElementById("recycle-bar").innerHTML += `<p>Recycle x${loggedIn.recycle}</p>`;

document.getElementById("recycle2").addEventListener("click", function(){
    window.location.href = "../html/recycle.html";
})

document.getElementById("redeem3").addEventListener("click", function(){
    window.location.href = "../html/redeem.html";
})

document.getElementById("forum4").addEventListener("click", function(){
    window.location.href = "../html/forum.html";
})
var order = JSON.parse(localStorage.getItem("order_data"));
console.log(order);
var process = document.getElementById("process_info");
var take = document.getElementById("pick-up_info");
var failed = document.getElementById("failed_info");


function counter(){
    let process_status = 0;
    let done_status = 0;
    let decline_status = 0;
    order.forEach(orderAt => {
        console.log(orderAt.progress)
        if(orderAt.email == loggedIn.email){
            if(orderAt.progress == "confirmation" || orderAt.progress == "process"){
                process_status += 1;
            } else if (orderAt.progress == "declined") {
                decline_status += 1;
            } else if (orderAt.progress == "done") {
                done_status += 1;
            }
        }
    });
    console.log(decline_status, done_status, process_status)

    if(process_status > 0){
        process.innerHTML = ` (${process_status})`;
        process.style.color = "red";
        process.style.fontSize = "1.2rem"
    }
    if(done_status > 0){
        take.innerHTML = ` (${done_status})`;
        take.style.color = "red";
        take.style.fontSize = "1.2rem"
    }
    if(decline_status > 0){
        failed.innerHTML = ` (${decline_status})`;
        failed.style.color = "red";
        failed.style.fontSize = "1.2rem"
    }
}

counter();