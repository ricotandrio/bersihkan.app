var loggedIn = JSON.parse(localStorage.getItem("userLogin"));

const user = document.getElementById("user_info");
user.innerHTML = `<h1>Welcome, ${loggedIn.name}</h1>`

var requestOrder = JSON.parse(localStorage.getItem('order_data'));
var userData = JSON.parse(localStorage.getItem('user_data'));

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
                        localStorage.setItem('user_data', JSON.stringify(userData));
                        localStorage.setItem('order_data', JSON.stringify(requestOrder));
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