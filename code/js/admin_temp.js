var admindata = [
    {"username": "Bersihkan", "poin": "32674", "status": "active", "account": "admin"},
    {"username": "Jane Smith", "poin": "500", "status": "inactive", "account": "admin"},
    {"username": "Michael Johnson", "poin": "10000", "status": "inactive", "account": "admin"},
    {"username": "Emily Brown", "poin": "2500", "status": "active", "account": "user"},
    {"username": "David Wilson", "poin": "750", "status": "active", "account": "user"},
];

const user = document.getElementById("user_info");
user.innerHTML = `<h1>Welcome, ${admindata[0].username} (${admindata[0].account})</h1>`

var requestOrder = JSON.parse(localStorage.getItem('order_data'));
var userData = JSON.parse(localStorage.getItem('user_data'));

// var request = [
//     {"name": "John Doe", "date": "30 March 2023", "time": "11:20", "type": "process"},
//     {"name": "Jane Smith", "date": "30 March 2023", "time": "11:20", "type": "need confirmation"},
//     {"name": "Michael Johnson", "date": "30 March 2023", "time": "11:20", "type": "done"},
//     {"name": "Emily Brown", "date": "30 March 2023", "time": "11:20", "type": "cancel"},
//     {"name": "David Wilson", "date": "15 April 2023", "time": "09:45", "type": "process"},
//     {"name": "Olivia Davis", "date": "15 April 2023", "time": "09:45", "type": "need confirmation"},
//     {"name": "Sophia Martinez", "date": "15 April 2023", "time": "09:45", "type": "done"},
//     {"name": "Daniel Anderson", "date": "15 April 2023", "time": "09:45", "type": "cancel"},
//     {"name": "Ava Taylor", "date": "5 May 2023", "time": "14:30", "type": "process"},
//     {"name": "Mia Clark", "date": "5 May 2023", "time": "14:30", "type": "need confirmation"},
//     {"name": "William White", "date": "5 May 2023", "time": "14:30", "type": "done"},
//     {"name": "Sophia Turner", "date": "5 May 2023", "time": "14:30", "type": "cancel"},
//     {"name": "James Moore", "date": "20 June 2023", "time": "16:15", "type": "process"},
//     {"name": "Emma Brooks", "date": "20 June 2023", "time": "16:15", "type": "need confirmation"},
//     {"name": "Benjamin Reed", "date": "20 June 2023", "time": "16:15", "type": "done"},
//     {"name": "Isabella Turner", "date": "20 June 2023", "time": "16:15", "type": "cancel"},
//     {"name": "Alexander Cooper", "date": "10 July 2023", "time": "08:00", "type": "process"},
//     {"name": "Charlotte Young", "date": "10 July 2023", "time": "08:00", "type": "need confirmation"},
//     {"name": "Daniel Scott", "date": "10 July 2023", "time": "08:00", "type": "done"},
//     {"name": "Ella Adams", "date": "10 July 2023", "time": "08:00", "type": "cancel"}
// ]

const container = document.getElementById("user_request");
function showRequests(){
    var temp = "";
    var processType = 0; var doneType = 0; var needConfirmType = 0;
    console.log(requestOrder[0])
    for(let i = 0; i < requestOrder.length; i++){
        temp += `<div class="request ${requestOrder[i].progress}" onclick="checkType(${i})">
                    <div class="left">
                        <img src="../asset/${requestOrder[i].progress}.png" alt="">
                        <div class="data_user">
                            <h1>${requestOrder[i].email}</h1>
                            <h2>${requestOrder[i].date}</h2>
                        </div>
                    </div>
                    <div class="right">
                        <h1 id="requestType">${requestOrder[i].progress}</h1>
                    </div>
                </div>`;
        if(requestOrder[i].progress == "process") processType += 1;
        else if(requestOrder[i].progress == "confirmation") needConfirmType += 1;
        else if(requestOrder[i].progress == "done") doneType += 1;
    }
    container.innerHTML = temp;
    document.getElementById("process_num").innerHTML = processType;
    document.getElementById("confirm_num").innerHTML = needConfirmType;
    document.getElementById("done_num").innerHTML = doneType;
}

showRequests();

function checkType(index){
    if(requestOrder[index].progress === "confirmation"){
        alert("Enter");
        requestOrder[index].progress = "done";
        for (let i = 0; i < userData.length; i++) {
            if(userData[i].email == requestOrder[index].email){
                alert("Enter 3");
                for (let j = 0; j < userData[i].order.length; j++){
                    if(userData[i].order[j].date == requestOrder[index].date && userData[i].order[j].place == requestOrder[index].place && userData[i].order[j].weight == requestOrder[index].weight && userData[i].order[j].notes == requestOrder[index].notes){
                        userData[i].point += userData[i].order[j].pointPlus;
                        userData[i].order.splice(j, 1);
                        localStorage.setItem('user_data', userData);
                        localStorage.setItem('order_data', requestOrder);
                        console.log("Name: " + userData[i].name);
                        console.log("Point: " + userData[i].point);
                        console.log("email: " + userData[i].email);
                        console.log("Order: " + userData[i].order);
                        showRequests();
                        return;
                    }
                }
            }
        }
    }
    return;
}

document.getElementById("confirmation_btn").addEventListener("click", function(){
    window.location.href = "template.html";
});

document.getElementById("process_btn").addEventListener("click", function(){
    window.location.href = "template.html";
});

document.getElementById("done_btn").addEventListener("click", function(){
    window.location.href = "template.html";
});