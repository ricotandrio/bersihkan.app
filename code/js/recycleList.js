var loggedIn = JSON.parse(localStorage.getItem("userLogin"));
var userData = JSON.parse(localStorage.getItem("user_data"));
var currentIndex = -1;
var userOrderList = document.getElementById("recycle-list-container");

function showRequests(index){
    var temp = "";
    var processType = 0;
    var doneType = 0;
    var needConfirmType = 0;
    var declinedType = 0;
    var statusText = "";
    var status = "";
    var totalOrderStatus = 0;
    if(index == 0){
        status = "confirmation";
        statusText = "Need Confirmation";
    } else if(index == 1){
        status = "process";
        statusText = "On Process";
    } else if(index == 2){
        status = "done";
        statusText = "Done";
    } else{
        status = "declined";
        statusText = "Declined";
    }
    for(let i = 0; i < loggedIn.order.length; i++){
        let weightText = loggedIn.order[i].weight.toLocaleString("id");
        let dateFormat = new Date(loggedIn.order[i].date);
        let formattedDate = dateFormat.toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' });
        if(status == loggedIn.order[i].progress && index != 1){
            temp += `<div class="list-box ${loggedIn.order[i].progress}">
                        <div class="left-div">
                            <div class="list-content">
                                <div>
                                    <img src="../asset/map.png" alt="">
                                    <div>
                                        <h4>Location</h4>
                                        <p>:</p>
                                    </div>
                                </div>
                                <p>${loggedIn.order[i].place}</p>
                            </div>
                            <div class="list-content">
                                <div>
                                    <img src="../asset/calender.png" alt="">
                                    <div>
                                        <h4>Date</h4>
                                        <p>:</p>
                                    </div>
                                </div>
                                <p>${formattedDate}</p>
                            </div>
                            <div class="list-content">
                                <div>
                                    <img src="../asset/weight.png" alt="">
                                    <div>
                                        <h4>Weight</h4>
                                        <p>:</p>
                                    </div>
                                </div>
                                <p>${weightText} Grams</p>
                            </div>
                            <div class="list-content">
                                <div>
                                    <img src="../asset/notes.png" alt="">
                                    <div>
                                        <h4>Notes</h4>
                                        <p>:</p>
                                    </div>
                                </div>
                                <p>${loggedIn.order[i].notes}</p>
                            </div>
                        </div>
                        <div class="right-div">
                            <h3>Status:</h3>
                            <h1 id="requestType">${statusText}</h1>
                        </div>
                    </div>`;
                totalOrderStatus += 1;
        } else if(status == loggedIn.order[i].progress){
            temp += `<div class="list-box ${loggedIn.order[i].progress}">
                        <div class="left-div">
                            <div class="list-content">
                                <div>
                                    <img src="../asset/map.png" alt="">
                                    <div>
                                        <h4>Location</h4>
                                        <p>:</p>
                                    </div>
                                </div>
                                <p>${loggedIn.order[i].place}</p>
                            </div>
                            <div class="list-content">
                                <div>
                                    <img src="../asset/calender.png" alt="">
                                    <div>
                                        <h4>Date</h4>
                                        <p>:</p>
                                    </div>
                                </div>
                                <p>${formattedDate}</p>
                            </div>
                            <div class="list-content">
                                <div>
                                    <img src="../asset/weight.png" alt="">
                                    <div>
                                        <h4>Weight</h4>
                                        <p>:</p>
                                    </div>
                                </div>
                                <p>${weightText} Grams</p>
                            </div>
                            <div class="list-content">
                                <div>
                                    <img src="../asset/notes.png" alt="">
                                    <div>
                                        <h4>Notes</h4>
                                        <p>:</p>
                                    </div>
                                </div>
                                <p>${loggedIn.order[i].notes}</p>
                            </div>
                        </div>
                        <div class="right-div">
                            <h3>Status:</h3>
                            <h1 id="requestType">${statusText}</h1>
                            <button id="decline_btn" onclick="cancelOrder(${i})">Cancel</button>
                        </div>
                    </div>`;
            totalOrderStatus += 1;
        }
        if(loggedIn.order[i].progress == "process") processType += 1;
        else if(loggedIn.order[i].progress == "confirmation") needConfirmType += 1;
        else if(loggedIn.order[i].progress == "done") doneType += 1;
        else if(loggedIn.order[i].progress == "declined") declinedType += 1;
    }

    document.getElementById("process_num").innerHTML = processType;
    document.getElementById("confirm_num").innerHTML = needConfirmType;
    document.getElementById("done_num").innerHTML = doneType;
    document.getElementById("declined_num").innerHTML = declinedType;
    userOrderList.innerHTML = temp;
    if(totalOrderStatus == 0){
        userOrderList.innerHTML = `<div style="margin-left: 4vw; font-weight: bolder"> There is no "${statusText}" recycle order</div>`;
    }
    return;
}

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
    for (let i = 0; i < userData.length; i++) {
        if(loggedIn.email == userData[i].email){
            userData[i].order = loggedIn.order;
            localStorage.setItem('userLogin', JSON.stringify(loggedIn));
            localStorage.setItem('user_data', JSON.stringify(userData));
            break;
        }
    }

    showRequests(1);
    return;
}

showRequests(0);
