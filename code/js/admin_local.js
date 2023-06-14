var userdata = [
    {"username": "John Doe", "poin": "32674", "status": "active", "account": "admin"},
    {"username": "Jane Smith", "poin": "500", "status": "inactive", "account": "admin"}
]
const user = document.getElementById("user_info");
user.innerHTML = `<h1>Welcome, ${userdata[0].username} (${userdata[0].account})</h1>`

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

const container = document.getElementById("user_request");
function showRequests(){
    var temp = "";
    var processType = 0; var doneType = 0; var needConfirmType = 0;

    for(let i = 0; i < request.length; i++){
        temp += `<div class="request ${request[i].type}">
                    <div class="left">
                        <img src="../asset/${request[i].type}.png" alt="">
                        <div class="data_user">
                            <h1>${request[i].name}</h1>
                            <h2>${request[i].date}, ${request[i].time}</h2>
                        </div>
                    </div>
                    <div class="right">
                        <h1 id="requestType">${request[i].type}</h1>
                    </div>
                </div>`;
        if(request[i].type == "process"){
            processType += 1;
        } else if(request[i].type == "need confirmation"){
            needConfirmType += 1;
        } else if(request[i].type == "done"){
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
