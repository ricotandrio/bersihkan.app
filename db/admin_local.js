function getname(){
    var userLogged = localStorage.getItem("userLogin");
    var loggedIn = JSON.parse(userLogged);
    if(userLogged) return loggedIn.name;
    else return "none";
}

document.getElementById('user_info').innerHTML = `<h1>Welcome, ${getname()} (Admin)</h1>`

// breakpoint
var request = [
    {"name": "John Doe", "date": "30 March 2023", "time": "11:20", "type": "process"},
    {"name": "Jane Smith", "date": "30 March 2023", "time": "11:20", "type": "need confirmation"}
]

function initializeLocalStorageVariable(variableName, defaultValue) {
    if (!localStorage.getItem(variableName)) {
      localStorage.setItem(variableName, JSON.stringify(defaultValue));
    }
}

initializeLocalStorageVariable('request', request);
var requestStorage = localStorage.getItem("request");

const container = document.getElementById("user_request");
function showRequests(){
    var temp = "";
    var processType = 0; var doneType = 0; var needConfirmType = 0;
    var temp_request_data = JSON.parse(requestStorage);

    for(let i = 0; i < request.length; i++){
        temp += `<div class="request ${request[i].type}">
                    <div class="left">
                        <img src="../asset/${request[i].type}.png" alt="">
                        <div class="data_user">
                            <h1>${temp_request_data[i].name}</h1>
                            <h2>${temp_request_data[i].date}, ${request[i].time}</h2>
                        </div>
                    </div>
                    <div class="right">
                        <h1 id="requestType">${temp_request_data[i].type}</h1>
                    </div>
                </div>`;
        if(temp_request_data[i].type == "process"){
            processType += 1;
        } else if(temp_request_data[i].type == "need confirmation"){
            needConfirmType += 1;
        } else if(temp_request_data[i].type == "done"){
            doneType += 1;
        }
    }
    container.innerHTML = temp;
    document.getElementById("process_num").innerHTML = processType;
    document.getElementById("confirm_num").innerHTML = needConfirmType;
    document.getElementById("done_num").innerHTML = doneType;
}

showRequests();

document.getElementById("confirmation_btn").addEventListener("click", function(){
    window.location.href = "template.html";
})

document.getElementById("process_btn").addEventListener("click", function(){
    window.location.href = "template.html";
})

document.getElementById("done_btn").addEventListener("click", function(){
    window.location.href = "template.html";
})