var loggedIn = JSON.parse(localStorage.getItem("userLogin"));

const user = document.getElementById("user_info");
user.innerHTML = `<h1>Welcome, ${loggedIn.name}</h1>`

var requestOrder = JSON.parse(localStorage.getItem('order_data'));
var userData = JSON.parse(localStorage.getItem('user_data'));

const container = document.getElementById("user_request");
function showRequests(){
    var temp = "";
    var processType = 0;
    var doneType = 0;
    var needConfirmType = 0;
    var declinedType = 0;
    console.log(requestOrder[0]);
    for(let i = 0; i < requestOrder.length; i++){
        let weightText = requestOrder[i].weight.toLocaleString("id");
        let dateFormat = new Date(requestOrder[i].date);
        let formattedDate = dateFormat.toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' });
        if(requestOrder[i].progress == "confirmation"){
            temp += `<div class="request ${requestOrder[i].progress}">
                        <div class="left">
                            <img src="../asset/${requestOrder[i].progress}.png" alt="">
                            <div class="data_user">
                                <h1>${requestOrder[i].email}</h1>
                                <h2>Location: ${requestOrder[i].place}</h2>
                                <h2>Date: ${formattedDate}</h2>
                                <h2>Weight: ${weightText} Grams</h2>
                                <h2>Notes: ${requestOrder[i].notes}</h2>
                            </div>
                        </div>
                        <div class="right">
                            <h3>Status:</h3>
                            <h1 id="requestType">Need Confirmation</h1>
                            <div class="button_type_container">
                                <button id="accept_btn" onclick="checkType(${i})">Accept</button>
                                <button id="decline_btn" onclick="declineOrder(${i})">Decline</button>
                            </div>
                        </div>
                    </div>`;
        } else if(requestOrder[i].progress == "process"){
            temp += `<div class="request ${requestOrder[i].progress}">
                        <div class="left">
                            <img src="../asset/${requestOrder[i].progress}.png" alt="">
                            <div class="data_user">
                                <h1>${requestOrder[i].email}</h1>
                                <h2>Location: ${requestOrder[i].place}</h2>
                                <h2>Date: ${formattedDate}</h2>
                                <h2>Weight: ${weightText} Grams</h2>
                                <h2>Notes: ${requestOrder[i].notes}</h2>
                            </div>
                        </div>
                        <div class="right">
                            <h3>Status:</h3>
                            <h1 id="requestType">On Process</h1>
                            <button id="decline_btn" onclick="declineOrder(${i})">Decline</button>
                        </div>
                    </div>`;
        } else {
            var requestOrderStatus;
            if(requestOrder[i].progress == "declined") requestOrderStatus = "Declined";
            else requestOrderStatus = "Done";
            temp += `<div class="request ${requestOrder[i].progress}">
                        <div class="left">
                            <img src="../asset/${requestOrder[i].progress}.png" alt="">
                            <div class="data_user">
                                <h1>${requestOrder[i].email}</h1>
                                <h2>Location: ${requestOrder[i].place}</h2>
                                <h2>Date: ${formattedDate}</h2>
                                <h2>Weight: ${weightText} Grams</h2>
                                <h2>Notes: ${requestOrder[i].notes}</h2>
                            </div>
                        </div>
                        <div class="right">
                            <h3>Status:</h3>
                            <h1 id="requestType">${requestOrderStatus}</h1>
                        </div>
                    </div>`;
        }
        if(requestOrder[i].progress == "process") processType += 1;
        else if(requestOrder[i].progress == "confirmation") needConfirmType += 1;
        else if(requestOrder[i].progress == "done") doneType += 1;
        else if(requestOrder[i].progress == "declined") declinedType += 1;
    }
    container.innerHTML = temp;
    document.getElementById("process_num").innerHTML = processType;
    document.getElementById("confirm_num").innerHTML = needConfirmType;
    document.getElementById("done_num").innerHTML = doneType;
    document.getElementById("declined_num").innerHTML = declinedType;
    return;
}

showRequests();

function checkType(index){
    requestOrder[index].progress = "done";
    for (let i = 0; i < userData.length; i++) {
        if(userData[i].email == requestOrder[index].email){
            for (let j = 0; j < userData[i].order.length; j++){
                if(userData[i].order[j].date == requestOrder[index].date && userData[i].order[j].place == requestOrder[index].place && userData[i].order[j].weight == requestOrder[index].weight && userData[i].order[j].notes == requestOrder[index].notes){
                    userData[i].point += Number(userData[i].order[j].pointPlus);
                    userData[i].order[j].progress = "done";
                    userData[i].historyPoint += Number(userData[i].order[j].pointPlus);
                    userData[i].recycle += 1;
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
    return;
}

function declineOrder(index){
    requestOrder[index].progress = "declined";
    for (let i = 0; i < userData.length; i++) {
        if(userData[i].email == requestOrder[index].email){
            for (let j = 0; j < userData[i].order.length; j++){
                if(userData[i].order[j].date == requestOrder[index].date && userData[i].order[j].place == requestOrder[index].place && userData[i].order[j].weight == requestOrder[index].weight && userData[i].order[j].notes == requestOrder[index].notes){
                    userData[i].order[j].progress = "declined";
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

document.getElementById("confirmation_btn").addEventListener("click", function(){
    document.querySelector(".confirmation").scrollIntoView({block: "start", behavior: "smooth"});
});

document.getElementById("process_btn").addEventListener("click", function(){
    document.querySelector(".process").scrollIntoView({block: "start", behavior: "smooth"});
});

document.getElementById("done_btn").addEventListener("click", function(){
    document.querySelector(".done").scrollIntoView({block: "start", behavior: "smooth"});
});

document.getElementById("declined_btn").addEventListener("click", function(){
    document.querySelector(".declined").scrollIntoView({block: "start", behavior: "smooth"});
});
